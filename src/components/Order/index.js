import React from "react";
import ReactDOMServer from 'react-dom/server';
import * as styles from "./styles";
import {FaPhone, FaCheck, FaMapMarker, FaClockO, FaCreditCardAlt, FaCircleO, FaDotCircleO} from 'react-icons/lib/fa/';
import Checkbox from "../simpleComponents/Checkbox";
import {YMaps, Map, Placemark, Clusterer, ListBox, ListBoxItem, } from 'react-yandex-maps';


const Order = ({order, setObjectAttr, cart, step, nextStep, makeOrder, setObjectAddr, placemarks, cities, onCitySelect, selectCity, boxItemsCount, setStep}) => {

    const getInput = (indx, name, parametrName, object, setObjectAttr) => {
        return (
            <styles.RowItem big key={indx ? "row" + indx : "row"}>
                <styles.Input onChange={(val) => {
                    setObjectAttr(val.target.value, name)
                }} value={object[name]} placeholder={parametrName}/>
            </styles.RowItem>)
    };

    const getStep = (number, text, icon, note, step, active) => {
        return (<styles.Step>
            {(number >= step) && <styles.StepNumber active={active}>{number}</styles.StepNumber>}
            {!(number >= step) &&
            <styles.StepNumber active={active}><FaCheck style={{color: "#26a9e0"}}/></styles.StepNumber>}
            <styles.StepRight active={active}>
                <styles.StepRow>
                    {icon}
                    <styles.Label lm15 bold>{text}</styles.Label>
                    {!(number >= step)&&<styles.EditWrapper onClick={()=>{setStep(number)}}>[изменить]</styles.EditWrapper>}
                </styles.StepRow>
                <styles.StepRow>
                    <styles.Label>{note}</styles.Label>
                </styles.StepRow>
            </styles.StepRight>
        </styles.Step>);
    };

    const mapState = {center: selectCity.coords, zoom: 10,};

    const getBalloonContentHeader = (properties) => {
        return (<styles.Row fromStart>
            <img src={properties.orgIconUrl}/>
            <styles.Label fs12 bold lm15>{properties.orgName}</styles.Label>
        </styles.Row>);
    };

    const getBalloonContentBody = (properties) => {
        return (<styles.Column leftside>
            <styles.Row fromStart>
                <styles.Label fs12>{properties.orgAddr}</styles.Label>
            </styles.Row>
            <styles.Row fromStart>
                <FaClockO/>
                <styles.Label fs12 lm15>{properties.orgWorkPeriod}</styles.Label>
            </styles.Row>
            <styles.Row fromStart>
                <FaCreditCardAlt/>
                <styles.Label fs12 lm15>{properties.payCase}</styles.Label>
            </styles.Row>
        </styles.Column>);
    };

    const getPlacemarc = (placemarc, indx) => {

        return (<Placemark
            key={indx}
            geometry={placemarc.geometry}
            properties={{
                balloonContentHeader: ReactDOMServer.renderToStaticMarkup(getBalloonContentHeader(placemarc.properties)),
                balloonContentBody: ReactDOMServer.renderToStaticMarkup(getBalloonContentBody(placemarc.properties)),
                balloonContentFooter: '<div id="'+placemarc.properties.orgId+'" style="padding-top: 5px;padding-left: 5px;width: 90px;height: 30px;background: #26a9e0;color: #fff;display: block;border-radius: 5px;cursor: pointer;box-sizing: border-box;" onclick="{var event; if (document.createEvent) {event = document.createEvent(`HTMLEvents`);event.initEvent(`mapSelectBalloon`, true, true);} else {event = document.createEventObject();event.eventType = `mapSelectBalloon`;}event.eventName = `mapSelectBalloon`;if (document.createEvent) {this.dispatchEvent(event);} else { this.fireEvent(`on` + event.eventType, event);}}">заберу отсюда</div>'
            }}
            options={placemarc.options}
        />);
    };

    const getTextArea = (indx, name, order, setObjectAttr) => {
        return (<styles.Row mb25 fromStart key={indx?"row"+indx:"row"}>
            <styles.RowItem big>
                <styles.InputText
                    onChange={(val) => {
                        setObjectAttr(val.target.value, name)
                    }} value={order[name]}/>
            </styles.RowItem>
        </styles.Row>)
    };

    return (
        <styles.ContentWrapper>
            <styles.Label bold>Оформление заказа</styles.Label>
            <styles.Row top>
                <styles.Column leftside>

                    {getStep(1, "Контактные данные", (<FaPhone
                        style={{color: "#26a9e0"}}/>), "Укажите свои контактные данные, чтобы мы знали, кому доставить заказ", step, step === 1)}
                    {step === 1 && <styles.Column>
                        {getInput(2, "lastname", "Фамилия", order, setObjectAttr)}
                        {getInput(3, "firstname", "Имя", order, setObjectAttr)}
                        {getInput(4, "midlename", "Отчество", order, setObjectAttr)}
                        {getInput(5, "email", "Эл. почта", order, setObjectAttr)}
                        {getInput(6, "phone", "Телефон +7 (XXX) XXX-XX-XX", order, setObjectAttr)}
                        <Checkbox isCheckedControl isChecked={order.isTakeStatusEmail}
                                  labelText="Получать статус заказа по e-mail" onClick={() => {
                            setObjectAttr(!order.isTakeStatusEmail, "isTakeStatusEmail")
                        }}/>
                        <Checkbox isCheckedControl isChecked={order.isTakeStatusSMS}
                                  labelText="Получать статус заказа в СМС" onClick={() => {
                            setObjectAttr(!order.isTakeStatusSMS, "isTakeStatusSMS")
                        }}/>
                        <Checkbox isCheckedControl isChecked={order.isAge18}
                                  labelText="Да, мне больше 18 лет, и я даю добровольное согласие на обработку своих персональных данных"
                                  onClick={() => {
                                      setObjectAttr(!order.isAge18, "isAge18")
                                  }}/>
                        <styles.OrderButton onClick={nextStep}>Выбрать способ доставки</styles.OrderButton>
                    </styles.Column>}

                    {getStep(2, "Доставка", (<FaPhone
                        style={{color: "#26a9e0"}}/>), "Самовывоз из пунктов выдачи • Курьер • Почта", step, step === 2)}
                    {step === 2 && <styles.Column>
                        <styles.SelectBlock onClick={() => {
                            setObjectAttr("selftake", "sendtype")
                        }}>
                            <styles.SelectBlockRow>
                                <styles.Label bold>Самовывоз из пунктов выдачи</styles.Label>
                                <styles.Label>0-493 ₽</styles.Label>
                            </styles.SelectBlockRow>
                        </styles.SelectBlock>
                        {order.sendtype === "selftake" && <styles.Column>
                            <YMaps>
                                <Map state={mapState} width={1000} height={900}>
                                    <ListBox data={{content: 'Выберите город'}} options={{float: 'right'}}>
                                        {cities.map(city =>
                                            <ListBoxItem
                                                data={city.data}
                                                options={city.options}
                                                onClick={() => onCitySelect(city)}
                                                key={city.data.content}
                                            />
                                        )}
                                    </ListBox>
                                    <Clusterer
                                        options={{
                                            preset: 'islands#invertedVioletClusterIcons',
                                            groupByCoordinates: false,
                                            clusterDisableClickZoom: true,
                                            clusterHideIconOnBalloonOpen: false,
                                            geoObjectHideIconOnBalloonOpen: false,
                                        }}
                                    >
                                        {placemarks && placemarks.map((placemark, indx) => getPlacemarc(placemark, indx))}
                                    </Clusterer>
                                </Map>
                            </YMaps>
                        </styles.Column>}
                        <styles.SelectBlock onClick={() => {
                            setObjectAttr("curier", "sendtype")
                        }}>
                            <styles.SelectBlockRow>
                                <styles.Label bold>Курьер</styles.Label>
                                <styles.Label>380 ₽</styles.Label>
                            </styles.SelectBlockRow>
                        </styles.SelectBlock>
                        {order.sendtype === "curier" && <styles.Column>
                            <styles.Label bold>Адрес</styles.Label>
                            {getInput(6, "city", "Город", order, setObjectAddr)}
                            {getInput(7, "index", "Индекс", order, setObjectAddr)}
                            {getInput(8, "street", "Улица", order, setObjectAddr)}
                            {getInput(8, "street", "Дом", order, setObjectAddr)}
                            {getInput(8, "street", "Корпус", order, setObjectAddr)}
                            {getInput(8, "street", "Строение", order, setObjectAddr)}
                            {getInput(8, "street", "Квартира", order, setObjectAddr)}
                            <styles.Label bold>Курьерская служба</styles.Label>
                            <styles.RadioBox>
                                <styles.RadioRow>
                                    <styles.InputRadio/>
                                    <styles.RadioLabel>
                                        <span>DPD</span>
                                    </styles.RadioLabel>
                                    <styles.Label>380 ₽</styles.Label>
                                    <styles.Label>Только наличные, Максимальный вес заказа: 31кг.</styles.Label>
                                </styles.RadioRow>
                            </styles.RadioBox>
                            <styles.OrderButton onClick={nextStep}>Указать способ оплаты</styles.OrderButton>
                        </styles.Column>}

                        <styles.SelectBlock onClick={() => {
                            setObjectAttr("ruMail", "sendtype")
                        }}>
                            <styles.Label bold>Почта</styles.Label>
                        </styles.SelectBlock>
                        {order.sendtype === "ruMail" && <styles.Column>
                            <styles.Label bold>Адрес</styles.Label>
                            {getInput(6, "city", "Город", order, setObjectAddr)}
                            {getInput(7, "index", "Индекс", order, setObjectAddr)}
                            {getInput(8, "street", "Улица", order, setObjectAddr)}
                            {getInput(8, "street", "Дом", order, setObjectAddr)}
                            {getInput(8, "street", "Корпус", order, setObjectAddr)}
                            {getInput(8, "street", "Строение", order, setObjectAddr)}
                            {getInput(8, "street", "Квартира", order, setObjectAddr)}

                            <styles.RadioBox>
                                <styles.RadioRow>
                                    <styles.InputRadio/>
                                    <styles.RadioLabel>
                                        <span>Бандероль наложенным платежом</span>
                                        <styles.Label>Стоимость доставки: 100 ₽</styles.Label>
                                        <styles.Label>Комиссия за наложенный платеж: 97.15 ₽</styles.Label>
                                    </styles.RadioLabel>
                                </styles.RadioRow>
                            </styles.RadioBox>
                            <styles.OrderButton onClick={nextStep}>Указать способ оплаты</styles.OrderButton>
                        </styles.Column>}
                    </styles.Column>}

                    {getStep(3, "Оплата", (<FaCreditCardAlt
                        style={{color: "#26a9e0"}}/>), "На сайте или при получении заказа. Принимаем карты Visa, Mastercard", step, step === 3)}
                    {step === 3 && <styles.Column>
                        <styles.RadioBox>
                            <styles.RadioRow>
                                {!(order.payCase==='card') && <FaCircleO style={{width: 60}} onClick={()=>setObjectAttr('card','payCase')}/>}
                                {order.payCase==='card' && <FaDotCircleO style={{color: "#26a9e0", width: 60}} onClick={()=>setObjectAttr('card','payCase')}/>}

                                <styles.RadioLabel active={order.payCase==='card'}>
                                    <styles.Label bold>Оплата на сайте</styles.Label>
                                    <styles.Label>Оплата банковской картой. После завершения оформления заказа Вы будете перенаправлены на страницу банка для оплаты.
                                        Также вы можете оплатить заказ в Личном кабинете. </styles.Label>
                                </styles.RadioLabel>
                            </styles.RadioRow>

                            <styles.RadioRow>
                                {!(order.payCase==='cash') && <FaCircleO style={{width: 30}} onClick={()=>setObjectAttr('cash','payCase')}/>}
                                {order.payCase==='cash' && <FaDotCircleO style={{color: "#26a9e0", width: 30}} onClick={()=>setObjectAttr('cash','payCase')}/>}

                                <styles.RadioLabel active={order.payCase==='cash'}>
                                    <styles.Label bold>Оплата при получении заказа</styles.Label>
                                    <styles.Label>Оплата банковской картой или наличными (подставляется из информации после выбора доставки)</styles.Label>
                                </styles.RadioLabel>
                            </styles.RadioRow>
                        </styles.RadioBox>
                        <styles.OrderButton onClick={nextStep}>Подтвердить данные</styles.OrderButton>
                    </styles.Column>}
                    {getStep(4, "Подтверждение", (<FaCreditCardAlt
                        style={{color: "#26a9e0"}}/>), "Проверьте свои данные перед завершением оформления заказа", step, step === 4)}
                    {step === 4 && <styles.Column>
                        <styles.Row fromStart>
                            <styles.Label bold>Комментарии к заказу</styles.Label>
                        </styles.Row>
                        {getTextArea("comment1", "comment", order, setObjectAttr)}
                        <styles.Label bold>Состав заказа</styles.Label>
                        <styles.CartWrapper>
                            <styles.CartTableHeader>
                                <styles.CartTableHeaderItem name>Товар</styles.CartTableHeaderItem>
                                <styles.CartTableHeaderItem count>Количество</styles.CartTableHeaderItem>
                                <styles.CartTableHeaderItem price>Сумма</styles.CartTableHeaderItem>
                            </styles.CartTableHeader>
                            {(cart.cartItemList && boxItemsCount !== 0) && cart.cartItemList.map((item, indx) => (
                                <styles.SimpleLink to={"/book/" + item.book.id} key={"item" + indx}>
                                <styles.CartOrderItem last>
                                    <styles.CartOrderItemDescription>
                                        <styles.CartOrderItemDescriptionInfo>
                                            <styles.Label fs14 >{item.book.title}</styles.Label>
                                        </styles.CartOrderItemDescriptionInfo>
                                        <styles.CartOrderItemDescriptionRightInfo>
                                            <styles.CartOrderItemDescriptionRightInfoCount>
                                                {item.count} шт.
                                            </styles.CartOrderItemDescriptionRightInfoCount>
                                            <styles.CartOrderItemDescriptionRightInfoPrice>
                                                <styles.Label fs14 bold>{item.book.price * item.count}</styles.Label>
                                                <styles.Label fs12 gray>{item.book.price} ₽ х {item.count} шт.</styles.Label>
                                            </styles.CartOrderItemDescriptionRightInfoPrice>
                                        </styles.CartOrderItemDescriptionRightInfo>
                                    </styles.CartOrderItemDescription>
                                </styles.CartOrderItem></styles.SimpleLink>))
                            }
                            {(cart.cartItemList && boxItemsCount !== 0) &&
                            <styles.OrderBlockRow left>
                                <styles.OrderBlock>
                                    <styles.OrderRow>
                                        <styles.Label fs14>Общая сумма:</styles.Label>
                                        <styles.Label fs14>{cart.cartItemList.reduce((accumulator ,item)=>((item.book.price* item.count)+accumulator),0)} ₽</styles.Label>
                                    </styles.OrderRow>
                                    <styles.OrderRow>
                                        <styles.Label fs14>Доставка:</styles.Label>
                                        <styles.Label fs14>{order.sendPrice} ₽</styles.Label>
                                    </styles.OrderRow>
                                    <styles.OrderRow>
                                        <styles.Label fs14>Скидка:</styles.Label>
                                        <styles.Label fs14>0 ₽</styles.Label>
                                    </styles.OrderRow>
                                    <br/>
                                    <styles.OrderRow>
                                        <styles.Label bold fs14>Итого к оплате:</styles.Label>
                                        <styles.Label bold fs14>{cart.cartItemList.reduce((accumulator ,item)=>((item.book.price* item.count)+accumulator),0)} ₽</styles.Label>
                                    </styles.OrderRow>
                                </styles.OrderBlock>
                            </styles.OrderBlockRow>
                            }
                        </styles.CartWrapper>
                        <styles.OrderButton onClick={makeOrder}>Завершить оформление заказа</styles.OrderButton>
                    </styles.Column>}
                </styles.Column>


                <styles.Column rightside>
                    {(cart && cart.cartItemList) && <styles.OrderBlockRow>
                        <styles.OrderBlock>
                            <styles.Label bold>Общая информация по заказу</styles.Label>
                            <br/>
                            <styles.OrderRow>
                                <styles.Label>Количество товаров:</styles.Label>
                                <styles.Label>{cart.cartItemList.reduce((accumulator, item) => (item.count + accumulator), 0)}</styles.Label>
                            </styles.OrderRow>
                            <br/>
                            <styles.OrderRow>
                                <styles.Label>Сумма заказа:</styles.Label>
                                <styles.Label>{cart.cartItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0)}
                                    ₽
                                </styles.Label>
                            </styles.OrderRow>
                            <styles.OrderRow>
                                <styles.Label>Скидка:</styles.Label>
                                <styles.Label>0 ₽</styles.Label>
                            </styles.OrderRow>
                            <styles.OrderRow>
                                <styles.Label>Доставка:</styles.Label>
                                <styles.Label>{order.sendPrice} ₽</styles.Label>
                            </styles.OrderRow>
                            <br/>
                            <styles.OrderRow>
                                <styles.Label bold>Итого к оплате:</styles.Label>
                                <styles.Label bold>{cart.cartItemList.reduce((accumulator ,item)=>((item.book.price* item.count)+accumulator),0)} ₽</styles.Label>
                            </styles.OrderRow>
                        </styles.OrderBlock>
                    </styles.OrderBlockRow>}
                </styles.Column>
            </styles.Row>
        </styles.ContentWrapper>
    );
};

export default Order;
