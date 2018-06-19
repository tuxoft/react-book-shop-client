import React from "react";
import ReactDOMServer from 'react-dom/server';
import * as styles from "./styles";
import {FaPhone, FaCheck, FaMapMarker, FaClockO, FaCreditCardAlt, FaCircleO, FaDotCircleO} from 'react-icons/lib/fa/';
import Checkbox from "../simpleComponents/Checkbox";
import {YMaps, Map, Placemark, Clusterer, ListBox, ListBoxItem,} from 'react-yandex-maps';


const Order = ({
  order,
  setObjectAttr,
  cart,
  step,
  nextStep,
  makeOrder,
  setObjectAddr,
  setObjectMultiAttr,
  placemarks,
  cities,
  onCitySelect,
  selectCity,
  setStep,
  doValid,
  validatorId,
  validatorText,
  validatorEmail,
  validatorNumber,
  data,
  searchInDictionary,
  clearSuggest,
  pickupPointsRangeCost
}) => {
  const getOneFromList = (indx, name, dictionary, parametrName, object, data, setObjAttr, searchInDictionary, clearSuggest, validator, doValid, alertText) => {
    return (<styles.RowItem big key={indx?"row"+indx:"row"}>
        <styles.Label bold>{parametrName}</styles.Label>
        <styles.Column>
          <styles.Container>
            {object[name] && object[name].name &&<styles.Item>{object[name].name}</styles.Item>}
          </styles.Container>
          <styles.Input redAlert={(doValid && !validator)} id={name}
                        onChange={(e) => {
                          searchInDictionary(dictionary, e.target.value);
                        }}
                        onBlur={() => clearSuggest(dictionary, name)}
          />
          {data[dictionary].map((obj, indx) =>
            <styles.Line key={name + indx}
                         onMouseDown={(val) => {
                           setObjAttr(obj, name)
                         }}>
              {obj.name}
            </styles.Line>)}
          {(doValid && !validator) && <styles.Label redAlert>{alertText}</styles.Label>}
        </styles.Column>
    </styles.RowItem>)
  };

  const getInput = (indx, name, parametrName, object, setObjectAttr, validator, doValid, alertText) => {
    return (
      <styles.RowItem big key={indx ? "row" + indx : "row"}>
        <styles.Input redAlert={(doValid && !validator)} onChange={(val) => {
          setObjectAttr(val.target.value, name)
        }} value={object[name]} placeholder={parametrName}/>
        {(doValid && !validator) && <styles.Label redAlert>{alertText}</styles.Label>}
      </styles.RowItem>)
  };

  const getNote = (step, finish, order) => {
    if (step === 1) {
      if (finish) {
        return (
          <styles.Label>
            <styles.Label fs14 bold
                          black>{order.lastName + " " + order.firstName + " " + order.middleName}</styles.Label>
            <styles.Label fs14 notBold black>{order.email + ", " + order.phoneNumber}</styles.Label>
          </styles.Label>
        )
      } else {
        return (
          <styles.Label fs14 black>
            {"Укажите свои контактные данные, чтобы мы знали, кому доставить заказ"}
          </styles.Label>
        )
      }
    } else if (step === 2) {
      if (finish) {
        if (order.sendType == "selftake") {
          return (
            <styles.Label>
              <styles.Label fs14 bold black>{"Самовывоз из пунктов выдачи"}</styles.Label>
              <styles.Label fs14 bold black>{"Стоимость доставки: " + order.sendPrice + " ₽"}</styles.Label>
            </styles.Label>
          )
        }
      } else {
        return (
          <styles.Label fs14 black>
            {"Самовывоз из пунктов выдачи • Курьер • Почта"}
          </styles.Label>
        )
      }

    }
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
          {!(number >= step) && <styles.EditWrapper onClick={() => {
            setStep(number)
          }}>[изменить]</styles.EditWrapper>}
        </styles.StepRow>
        <styles.StepRow>
          {note}
        </styles.StepRow>
      </styles.StepRight>
    </styles.Step>);
  };

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
        balloonContentFooter: '<div id="' + placemarc.properties.orgId + '" style="padding-top: 5px;padding-left: 5px;width: 90px;height: 30px;background: #26a9e0;color: #fff;display: block;border-radius: 5px;cursor: pointer;box-sizing: border-box;" onclick="{var event; if (document.createEvent) {event = document.createEvent(`HTMLEvents`);event.initEvent(`mapSelectBalloon`, true, true);} else {event = document.createEventObject();event.eventType = `mapSelectBalloon`;}event.eventName = `mapSelectBalloon`;if (document.createEvent) {this.dispatchEvent(event);} else { this.fireEvent(`on` + event.eventType, event);}}">заберу отсюда</div>'
      }}
      options={placemarc.options}
    />);
  };

  const getTextArea = (indx, name, order, setObjectAttr) => {
    return (<styles.Row mb25 fromStart key={indx ? "row" + indx : "row"}>
      <styles.RowItem big>
        <styles.InputText
          onChange={(val) => {
            setObjectAttr(val.target.value, name)
          }} value={order[name]}/>
      </styles.RowItem>
    </styles.Row>)
  };

  const mapState = {center: selectCity && selectCity.coords ? selectCity.coords : [], zoom: 12,};

  return (
    <styles.ContentWrapper>
      <styles.Label bold>Оформление заказа</styles.Label>
      <styles.Row top>
        <styles.Column leftside>
          {getStep(1, "Контактные данные", (
            <FaPhone style={{color: "#26a9e0"}}/>), getNote(1, step > 1, order), step, step === 1)}
          {step === 1 && <styles.Column animationHeight>
            {getOneFromList(1, "shopCity", "shopCity", "Ваш регион", order, data, setObjectAttr, searchInDictionary, clearSuggest, validatorId(order.shopCity), doValid, "Выберите регион")}
            {getInput(2, "lastName", "Фамилия", order, setObjectAttr, validatorText(order.lastName), doValid, "Введите фамилию")}
            {getInput(3, "firstName", "Имя", order, setObjectAttr, validatorText(order.firstName), doValid, "Введите имя")}
            {getInput(4, "middleName", "Отчество", order, setObjectAttr, true, doValid, "Введите отчество")}
            {getInput(5, "email", "Эл. почта", order, setObjectAttr, validatorEmail(order.email), (doValid), "Введите почту")}
            {getInput(6, "phoneNumber", "Телефон +7 (XXX) XXX-XX-XX", order, setObjectAttr, validatorNumber(order.phoneNumber), (doValid), "Введите телефон")}
            <Checkbox isCheckedControl isChecked={order.isTakeStatusEmail}
                      labelText="Получать статус заказа по e-mail" onClick={() => {
              setObjectAttr(!order.isTakeStatusEmail, "isTakeStatusEmail")
            }}/>
            <Checkbox isCheckedControl isChecked={order.isTakeStatusSMS}
                      labelText="Получать статус заказа в СМС" onClick={() => {
              setObjectAttr(!order.isTakeStatusSMS, "isTakeStatusSMS")
            }}/>
            {(doValid && !order.isTakeStatusEmail && !order.isTakeStatusSMS) &&
            <styles.Label redAlert>Выберите хотя бы 1 способ оповещения</styles.Label>}
            <Checkbox isCheckedControl isChecked={order.isAge18}
                      labelText="Да, мне больше 18 лет, и я даю добровольное согласие на обработку своих персональных данных"
                      onClick={() => {
                        setObjectAttr(!order.isAge18, "isAge18")
                      }}/>
            {(doValid && !order.isAge18) && <styles.Label redAlert>Согласие обязательно</styles.Label>}
            <styles.OrderButton onClick={() => {
              nextStep();
            }}>Выбрать способ доставки</styles.OrderButton>
          </styles.Column>}

          {getStep(2, "Доставка", (<FaPhone
            style={{color: "#26a9e0"}}/>), getNote(2, step > 2, order), step, step === 2)}
          {step === 2 && <styles.Column animationHeight>
            <styles.SelectBlock onClick={() => {
              setObjectMultiAttr([{field: "sendType", val: "selftake"}, {
                field: "curierService",
                val: ""
              }, {field: "mailService", val: ""}]);
            }}>
              <styles.SelectBlockRow>
                <styles.Label bold>Самовывоз из пунктов выдачи</styles.Label>
                <styles.Label>{pickupPointsRangeCost}</styles.Label>
              </styles.SelectBlockRow>
            </styles.SelectBlock>
            {order.sendType === "selftake" && <styles.Column>
              <styles.YMapWrapper>
                <YMaps>
                  <Map state={mapState} width={1000} height={600}>
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
              </styles.YMapWrapper>
            </styles.Column>}
            <styles.SelectBlock onClick={() => {
              setObjectAttr("curier", "sendType")
            }}>
              <styles.SelectBlockRow>
                <styles.Label bold>Курьер</styles.Label>
                <styles.Label>380 ₽</styles.Label>
              </styles.SelectBlockRow>
            </styles.SelectBlock>
            {order.sendType === "curier" && <styles.Column>
              <styles.Label bold>Адрес</styles.Label>
              {getInput(7, "city", "Город", order, setObjectAddr, validatorText(order.addr.city), doValid, "Введите город")}
              {getInput(8, "index", "Индекс", order, setObjectAddr, validatorText(order.addr.index), doValid, "Введите индекс")}
              {getInput(9, "street", "Улица", order, setObjectAddr, validatorText(order.addr.street), doValid, "Введите улицу")}
              {getInput(10, "house", "Дом", order, setObjectAddr, validatorText(order.addr.house), doValid, "Введите дом")}
              {getInput(11, "housing", "Корпус", order, setObjectAddr, true, doValid, "Введите корпус")}
              {getInput(12, "building", "Строение", order, setObjectAddr, true, doValid, "Введите строение")}
              {getInput(13, "room", "Квартира", order, setObjectAddr, validatorText(order.addr.room), doValid, "Введите номер квартиры")}
              <styles.Label bold>Курьерская служба</styles.Label>
              <styles.RadioBox>
                <styles.RadioRow>
                  {!(order.curierService === 'DPD') && <FaCircleO style={{width: 60}}
                                                                  onClick={() => {
                                                                    setObjectMultiAttr([{
                                                                      field: "curierService",
                                                                      val: "DPD"
                                                                    }, {
                                                                      field: "sendPrice",
                                                                      val: 300
                                                                    }]);
                                                                  }}/>}
                  {order.curierService === 'DPD' &&
                  <FaDotCircleO style={{color: "#26a9e0", width: 60}}
                                onClick={() => {
                                  setObjectMultiAttr([{
                                    field: "curierService",
                                    val: "DPD"
                                  }, {field: "sendPrice", val: 300}]);
                                }}/>}
                  <styles.RadioLabel>
                    <span>DPD</span>
                  </styles.RadioLabel>
                  <styles.RadioLabel>
                    <styles.Label fs14>380 ₽</styles.Label>
                  </styles.RadioLabel>
                  <styles.RadioLabel>
                    <styles.Label fs14>Только наличные, Максимальный вес заказа: 31кг.
                    </styles.Label>
                  </styles.RadioLabel>
                </styles.RadioRow>
              </styles.RadioBox>
              {(doValid && (!order.curierService || order.curierService === '')) &&
              <styles.Label redAlert>выберите курьерскую службу</styles.Label>}
              <styles.OrderButton onClick={nextStep}>Указать способ оплаты</styles.OrderButton>
            </styles.Column>}

            <styles.SelectBlock onClick={() => {
              setObjectAttr("ruMail", "sendType")
            }}>
              <styles.Label bold>Почта</styles.Label>
            </styles.SelectBlock>
            {order.sendType === "ruMail" && <styles.Column>
              <styles.Label bold>Адрес</styles.Label>
              {getInput(7, "city", "Город", order, setObjectAddr, validatorId(order.addr.city), doValid, "Введите город")}
              {getInput(8, "index", "Индекс", order, setObjectAddr, validatorText(order.addr.index), doValid, "Введите индекс")}
              {getInput(9, "street", "Улица", order, setObjectAddr, validatorText(order.addr.street), doValid, "Введите улицу")}
              {getInput(10, "house", "Дом", order, setObjectAddr, validatorText(order.addr.house), doValid, "Введите дом")}
              {getInput(11, "housing", "Корпус", order, setObjectAddr, true, doValid, "Введите корпус")}
              {getInput(12, "building", "Строение", order, setObjectAddr, true, doValid, "Введите строение")}
              {getInput(13, "room", "Квартира", order, setObjectAddr, validatorText(order.addr.room), doValid, "Введите номер квартиры")}

              <styles.RadioBox>
                <styles.RadioRow>
                  {!(order.mailService === 'banderol') && <FaCircleO style={{width: 60}}
                                                                     onClick={() => {
                                                                       setObjectMultiAttr([{
                                                                         field: "mailService",
                                                                         val: "banderol"
                                                                       },
                                                                         {
                                                                           field: "sendPrice",
                                                                           val: order.orderItemList.reduce((accumulator, item) => ((item.book.weight * item.count) + accumulator), 0) * 0.5
                                                                         }]);
                                                                     }}/>}
                  {order.mailService === 'banderol' &&
                  <FaDotCircleO style={{color: "#26a9e0", width: 60}}
                                onClick={() => {
                                  setObjectMultiAttr([{field: "mailService", val: "banderol"},
                                    {
                                      field: "sendPrice",
                                      val: order.orderItemList.reduce((accumulator, item) => ((item.book.weight * item.count) + accumulator), 0) * 0.5
                                    }]);
                                }}/>}
                  <styles.RadioLabel>
                    <span>Бандероль наложенным платежом</span>
                    <styles.Label fs14>Стоимость доставки: 100 ₽</styles.Label>
                    <styles.Label fs14>Комиссия за наложенный платеж: 97.15 ₽</styles.Label>
                  </styles.RadioLabel>
                </styles.RadioRow>
              </styles.RadioBox>
              {(doValid && (!order.mailService || order.mailService === '')) &&
              <styles.Label redAlert>выберите способ отправки</styles.Label>}
              <styles.OrderButton onClick={nextStep}>Указать способ оплаты</styles.OrderButton>
            </styles.Column>}
          </styles.Column>}

          {getStep(3, "Оплата", (<FaCreditCardAlt
            style={{color: "#26a9e0"}}/>), "На сайте или при получении заказа. Принимаем карты Visa, Mastercard", step, step === 3)}
          {step === 3 && <styles.Column>
            <styles.RadioBox>
              <styles.RadioRow>
                {!(order.paymentMethod === 'card') &&
                <FaCircleO style={{width: 60}} onClick={() => setObjectAttr('card', 'paymentMethod')}/>}
                {order.paymentMethod === 'card' && <FaDotCircleO style={{color: "#26a9e0", width: 60}}
                                                                 onClick={() => setObjectAttr('card', 'paymentMethod')}/>}

                <styles.RadioLabel active={order.paymentMethod === 'card'}>
                  <styles.Label bold>Оплата на сайте</styles.Label>
                  <styles.Label>Оплата банковской картой. После завершения оформления заказа Вы будете
                    перенаправлены на страницу банка для оплаты.
                    Также вы можете оплатить заказ в Личном кабинете.
                  </styles.Label>
                </styles.RadioLabel>
              </styles.RadioRow>

              <styles.RadioRow>
                {!(order.paymentMethod === 'cash') &&
                <FaCircleO style={{width: 30}} onClick={() => setObjectAttr('cash', 'paymentMethod')}/>}
                {order.paymentMethod === 'cash' && <FaDotCircleO style={{color: "#26a9e0", width: 30}}
                                                                 onClick={() => setObjectAttr('cash', 'paymentMethod')}/>}

                <styles.RadioLabel active={order.paymentMethod === 'cash'}>
                  <styles.Label bold>Оплата при получении заказа</styles.Label>
                  <styles.Label>Оплата банковской картой или наличными (подставляется из информации
                    после выбора доставки)
                  </styles.Label>
                </styles.RadioLabel>
              </styles.RadioRow>
            </styles.RadioBox>
            {(doValid && !(order.paymentMethod === 'cash' || order.paymentMethod === 'card')) &&
            <styles.Label redAlert>выберите способ оплаты</styles.Label>}
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
                <styles.CartTableHeaderItem naming>Товар</styles.CartTableHeaderItem>
                <styles.CartTableHeaderItem count>Количество</styles.CartTableHeaderItem>
                <styles.CartTableHeaderItem price>Сумма</styles.CartTableHeaderItem>
              </styles.CartTableHeader>
              {(order.orderItemList && order.orderItemList.length !== 0) && order.orderItemList.map((item, indx) => (
                <styles.SimpleLink to={"/book/" + item.book.id} key={"item" + indx}>
                  <styles.CartOrderItem last={indx === (order.orderItemList.length - 1)}>
                    <styles.CartOrderItemDescription>
                      <styles.CartOrderItemDescriptionInfo>
                        <styles.Label fs14>{item.book.title}</styles.Label>
                      </styles.CartOrderItemDescriptionInfo>
                      <styles.CartOrderItemDescriptionRightInfo>
                        <styles.CartOrderItemDescriptionRightInfoCount>
                          {item.count} шт.
                        </styles.CartOrderItemDescriptionRightInfoCount>
                        <styles.CartOrderItemDescriptionRightInfoPrice>
                          <styles.Label fs14
                                        bold>{item.book.price * item.count}</styles.Label>
                          <styles.Label fs12 gray>{item.book.price} ₽ х {item.count} шт.
                          </styles.Label>
                        </styles.CartOrderItemDescriptionRightInfoPrice>
                      </styles.CartOrderItemDescriptionRightInfo>
                    </styles.CartOrderItemDescription>
                  </styles.CartOrderItem>
                </styles.SimpleLink>))
              }
              {(order.orderItemList && order.orderItemList.length !== 0) &&
              <styles.OrderBlockRow left>
                <styles.OrderBlock>
                  <styles.OrderRow>
                    <styles.Label fs14>Общая сумма:</styles.Label>
                    <styles.Label
                      fs14>{order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0)}
                      ₽
                    </styles.Label>
                  </styles.OrderRow>
                  <styles.OrderRow>
                    <styles.Label fs14>Доставка:</styles.Label>
                    <styles.Label fs14>{order.sendPrice} ₽</styles.Label>
                  </styles.OrderRow>
                  <styles.OrderRow>
                    <styles.Label fs14>Скидка:</styles.Label>
                    <styles.Label fs14>{order.discount} ₽</styles.Label>
                  </styles.OrderRow>
                  <br/>
                  <styles.OrderRow>
                    <styles.Label bold fs14>Итого к оплате:</styles.Label>
                    <styles.Label bold
                                  fs14>{order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + order.sendPrice - order.discount}
                      ₽
                    </styles.Label>
                  </styles.OrderRow>
                </styles.OrderBlock>
              </styles.OrderBlockRow>
              }
            </styles.CartWrapper>
            <styles.OrderButton onClick={makeOrder}>Завершить оформление заказа</styles.OrderButton>
          </styles.Column>}
        </styles.Column>


        <styles.Column rightside>
          {(order && order.orderItemList) && <styles.OrderBlockRow>
            <styles.OrderBlock>
              <styles.Label bold>Общая информация по заказу</styles.Label>
              <br/>
              <styles.OrderRow>
                <styles.Label>Количество товаров:</styles.Label>
                <styles.Label>{order.orderItemList.reduce((accumulator, item) => (item.count + accumulator), 0)}</styles.Label>
              </styles.OrderRow>
              <br/>
              <styles.OrderRow>
                <styles.Label>Сумма заказа:</styles.Label>
                <styles.Label>{order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0)}
                  ₽
                </styles.Label>
              </styles.OrderRow>
              <styles.OrderRow>
                <styles.Label>Скидка:</styles.Label>
                <styles.Label>{order.discount} ₽</styles.Label>
              </styles.OrderRow>
              <styles.OrderRow>
                <styles.Label>Доставка:</styles.Label>
                <styles.Label>{order.sendPrice} ₽</styles.Label>
              </styles.OrderRow>
              <br/>
              <styles.OrderRow>
                <styles.Label bold>Итого к оплате:</styles.Label>
                <styles.Label
                  bold>{order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + order.sendPrice - order.discount}
                  ₽
                </styles.Label>
              </styles.OrderRow>
            </styles.OrderBlock>
          </styles.OrderBlockRow>}
        </styles.Column>
      </styles.Row>
    </styles.ContentWrapper>
  );
};

export default Order;
