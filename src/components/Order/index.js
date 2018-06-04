import React from "react";
import * as styles from "./styles";
import {FaPhone, FaCheck} from 'react-icons/lib/fa/';
import Checkbox from "../simpleComponents/Checkbox";


const Order = ({order, setObjectAttr, cart, step, nextStep, setObjectAddr,}) => {

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
            {(number>=step) && <styles.StepNumber active={active}>{number}</styles.StepNumber>}
            {!(number>=step) && <styles.StepNumber active={active}><FaCheck style={{color: "#26a9e0"}}/></styles.StepNumber>}
            <styles.StepRight active={active}>
                <styles.StepRow>
                    {icon}
                    <styles.Label lm15 bold>{text}</styles.Label>
                </styles.StepRow>
                <styles.StepRow low>
                    <styles.Label>{note}</styles.Label>
                </styles.StepRow>
            </styles.StepRight>
        </styles.Step>);
    };

    const getOneFromList = (indx, name, parametrName, book, data, setBookAttr, searchInDictionary, clearSuggest) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.Container>
                        <styles.Item>{book[name] && book[name].name}</styles.Item>
                    </styles.Container>
                    <styles.Input
                        onChange={(e) => {
                            console.log("doSearch", e.target.value);
                            searchInDictionary(name, e.target.value);
                        }}
                        onBlur={() => clearSuggest(name)}
                    />
                    {data[name].map((obj, indx) =>
                        <styles.Line key={name + indx}
                                     onMouseDown={(val) => {
                                         setBookAttr(name, obj)
                                     }}>
                            {obj.name}
                        </styles.Line>)}
                </styles.Column>
            </styles.RowItem>
        </styles.Row>)};

    return (
        <styles.ContentWrapper>
            <styles.Label bold>Оформление заказа</styles.Label>
            <styles.Row>
                <styles.Column leftside>

                        {getStep(1, "Контактные данные", (<FaPhone
                            style={{color: "#26a9e0"}}/>), "Укажите свои контактные данные, чтобы мы знали, кому доставить заказ", step, step===1)}
                    {step ===1 && <styles.Column>
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
                        style={{color: "#26a9e0"}}/>), "Самовывоз из пунктов выдачи • Курьер • Почта", step, step===2)}
                    { step===2 && <styles.Column>
                        <styles.SelectBlock onClick={() => {setObjectAttr("selftake", "sendtype")}}>
                            <styles.SelectBlockRow>
                                <styles.Label bold>Самовывоз из пунктов выдачи</styles.Label>
                                <styles.Label >0-493 ₽</styles.Label>
                            </styles.SelectBlockRow>
                        </styles.SelectBlock>
                        {order.sendtype==="selftake" && <styles.Column>
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
                                    <styles.Label >380 ₽</styles.Label>
                                    <styles.Label >Только наличные, Максимальный вес заказа: 31кг.</styles.Label>
                                </styles.RadioRow>
                            </styles.RadioBox>
                            <styles.OrderButton onClick={nextStep}>Указать способ оплаты</styles.OrderButton>
                        </styles.Column>}
                        <styles.SelectBlock onClick={() => {setObjectAttr("curier", "sendtype")}}>
                            <styles.SelectBlockRow>
                                <styles.Label bold>Курьер</styles.Label>
                                <styles.Label >380 ₽</styles.Label>
                            </styles.SelectBlockRow>
                        </styles.SelectBlock>
                        {order.sendtype==="curier" && <styles.Column>
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
                                    <styles.Label >380 ₽</styles.Label>
                                    <styles.Label >Только наличные, Максимальный вес заказа: 31кг.</styles.Label>
                                </styles.RadioRow>
                            </styles.RadioBox>
                            <styles.OrderButton onClick={nextStep}>Указать способ оплаты</styles.OrderButton>
                        </styles.Column>}

                        <styles.SelectBlock onClick={() => {setObjectAttr("ruMail", "sendtype")}}> <styles.Label bold>Почта</styles.Label></styles.SelectBlock>
                        {order.sendtype==="ruMail" && <styles.Column>
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
                                        <styles.Label >Стоимость доставки: 100 ₽</styles.Label>
                                        <styles.Label >Комиссия за наложенный платеж: 97.15 ₽</styles.Label>
                                    </styles.RadioLabel>
                                </styles.RadioRow>
                            </styles.RadioBox>
                            <styles.OrderButton onClick={nextStep}>Указать способ оплаты</styles.OrderButton>
                        </styles.Column>}
                    </styles.Column>}
                </styles.Column>


                <styles.Column rightside>
                    {cart && <styles.OrderBlockRow>
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
                                <styles.Label>0 ₽</styles.Label>
                            </styles.OrderRow>
                            <br/>
                            <styles.OrderRow>
                                <styles.Label bold>Итого к оплате:</styles.Label>
                                <styles.Label bold>many ₽</styles.Label>
                            </styles.OrderRow>
                        </styles.OrderBlock>
                    </styles.OrderBlockRow>}
                </styles.Column>
            </styles.Row>
        </styles.ContentWrapper>
    );
};

export default Order;
