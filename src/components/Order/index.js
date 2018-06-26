import React from "react";
import ReactDOMServer from 'react-dom/server';
import Autosuggest from 'react-autosuggest';
import * as styles from "./styles";
import {FaPhone, FaCheck, FaMapMarker, FaClockO, FaCreditCardAlt, FaCircleO, FaDotCircleO, FaHome} from 'react-icons/lib/fa/';
import Checkbox from "../simpleComponents/Checkbox";
import {YMaps, Map, Placemark, Clusterer, ListBox, ListBoxItem,} from 'react-yandex-maps';
import { getAddress } from "../../utils"


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
  pickupPointsRangeCost,
  courierService,
  courierServiceRangeCost,
  mailService,
  suggestValues,
  setSuggestValue,
  paymentMethod
}) => {
  const getOneFromList = (indx, name, dictionary, parametrName, object, data, setObjAttr, searchInDictionary, clearSuggest, validator, doValid, alertText) => {
    return (<styles.RowItem big key={indx?"row"+indx:"row"}>
        <styles.Label bold>{parametrName}</styles.Label>

      <Autosuggest id={"Autosuggest-"+name}
                   suggestions={data[dictionary]}
                   onSuggestionsFetchRequested={({value}) => {
                       searchInDictionary(dictionary, value)
                   }}
                   onSuggestionsClearRequested={() => {
                       clearSuggest(dictionary, name);
                   }}
                   getSuggestionValue={(obj) => obj.name}
                   onSuggestionSelected={(event, {suggestion, suggestionValue, suggestionIndex, sectionIndex, method}) => {
                       setObjAttr(suggestion, name)
                   }}
                   focusInputOnSuggestionClick={false}
                   renderSuggestion={(obj, indx) => (<styles.Line key={name + indx} >
                       {obj.name}
                   </styles.Line>)}
                   inputProps={{
                       placeholder: '',
                       value: !suggestValues[name] ? "" : suggestValues[name],
                       onChange: (event, { newValue, method }) => {
                           console.log("onChange", newValue, event.target.value);
                           searchInDictionary(dictionary, event.target.value? event.target.value : "");
                           setSuggestValue(event.target.value? event.target.value : "", name);
                       },
                       onBlur: (event, { highlightedSuggestion })=>{console.log("onBlur", highlightedSuggestion);}
                   }}
                   renderInputComponent={inputProps => (<styles.InputWrapper>
                     <styles.Container>
                         {object[name] && object[name].name && <styles.Item>{object[name].name}</styles.Item>}
                     </styles.Container>
                     <styles.Input {...inputProps}
                                          id={name}
                                          redAlert={(doValid && !validator)}
                     />
                       {(doValid && !validator) && <styles.Label redAlert>{alertText}</styles.Label>}
                   </styles.InputWrapper>)}
                   theme={{
                       suggestionsList: {
                           width: "300px",
                           padding: 0,
                           listStyleType: "none"
                       },
                       suggestion: {
                           cursor: "pointer",
                           boxSizing: "border-box",
                           width: "100%",
                           backgroundColor: "#fff",
                       },
                       suggestionHighlighted: {
                           backgroundColor: "#dfd",
                           width: "100%"
                       }
                   }}
      />
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
        if (order.sendType == "pickupPoint") {
          return (
            <styles.Label>
              <styles.Label fs14 bold black>{"Самовывоз из пунктов выдачи"}</styles.Label>
              <styles.Label fs14 bold black>{"Стоимость доставки: " + order.sendPrice + " ₽"}</styles.Label>
              <styles.Label fs14 notBold black><FaHome style={{verticalAlign: "text-top"}}/>{" "}{order.sendOrg.addr}</styles.Label>
              <styles.Label fs14 notBold black><FaClockO style={{verticalAlign: "text-top"}}/>{" "}{order.sendOrg.workPeriod}</styles.Label>
            </styles.Label>
          )
        } else if (order.sendType == "courierService") {
          return (
            <styles.Label>
              <styles.Label fs14 bold black>{"Доставка курьерской службой: " + order.sendOrg.name}</styles.Label>
              <styles.Label fs14 bold black>{"Стоимость доставки: " + order.sendPrice + " ₽"}</styles.Label>
              <styles.Label fs14 notBold black><FaHome style={{verticalAlign: "text-top"}}/>{" "}{getAddress(order.addr)}</styles.Label>
            </styles.Label>
          )
        } else if (order.sendType == "mailService") {
          return (
            <styles.Label>
              <styles.Label fs14 bold black>{"Доставка почтой"}</styles.Label>
              <styles.Label fs14 bold black>{order.sendOrg.name}</styles.Label>
              <styles.Label fs14 bold black>{"Стоимость доставки: " + order.sendPrice + " ₽"}</styles.Label>
              <styles.Label fs14 notBold black><FaHome style={{verticalAlign: "text-top"}}/>{" "}{getAddress(order.addr)}</styles.Label>
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
            {placemarks && placemarks.length > 0 && <styles.SelectBlock onClick={() => {
              const val = order.sendType === "pickupPoint" ? "" : "pickupPoint";
              setObjectMultiAttr([{
                field: "sendType",
                val: val
              }, {
                field: "sendOrgId",
                val: val === "" ? "" : order.sendOrgId
              }, {
                field: "sendPrice",
                val: val === "" ? "" : order.sendPrice
              }, {
                  field: "totalCost",
                  val: val === "" ? order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) - order.discount : order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + order.sendPrice - order.discount,
              }, {
                  field: "toPay",
                  val: val === "" ? order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) - order.discount : order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + order.sendPrice - order.discount,
              }]);
            }}>
              <styles.SelectBlockRow>
                <styles.Label bold>Самовывоз из пунктов выдачи</styles.Label>
                <styles.Label>{pickupPointsRangeCost}</styles.Label>
              </styles.SelectBlockRow>
            </styles.SelectBlock>}
            {order.sendType === "pickupPoint" && <styles.Column animationHeight>
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
            {courierService && courierService.length > 0 &&<styles.SelectBlock onClick={() => {
              const val = order.sendType === "courierService" ? "" : "courierService";
              setObjectMultiAttr([{
                  field: "sendType",
                  val: val
                }, {
                  field: "sendOrgId",
                  val: val === "" ? "" : order.sendOrgId
                }, {
                  field: "sendPrice",
                  val: val === "" ? "" : order.sendPrice
                }, {
                  field: "totalCost",
                  val: val === "" ? order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) - order.discount : order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + order.sendPrice - order.discount,
                }, {
                  field: "toPay",
                  val: val === "" ? order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) - order.discount : order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + order.sendPrice - order.discount,
                }]);
            }}>
              <styles.SelectBlockRow>
                <styles.Label bold>Курьер</styles.Label>
                <styles.Label>{courierServiceRangeCost}</styles.Label>
              </styles.SelectBlockRow>
            </styles.SelectBlock>}
            {order.sendType === "courierService" && <styles.Column animationHeight>
              <styles.Label bold>Адрес</styles.Label>
              {getInput(7, "city", "Город", order.addr, setObjectAddr, validatorText(order.addr.city), doValid, "Введите город")}
              {getInput(8, "index", "Индекс", order.addr, setObjectAddr, validatorText(order.addr.index), doValid, "Введите индекс")}
              {getInput(9, "street", "Улица", order.addr, setObjectAddr, validatorText(order.addr.street), doValid, "Введите улицу")}
              {getInput(10, "house", "Дом", order.addr, setObjectAddr, validatorText(order.addr.house), doValid, "Введите дом")}
              {getInput(11, "housing", "Корпус", order.addr, setObjectAddr, true, doValid, "Введите корпус")}
              {getInput(12, "building", "Строение", order.addr, setObjectAddr, true, doValid, "Введите строение")}
              {getInput(13, "room", "Квартира", order.addr, setObjectAddr, validatorText(order.addr.room), doValid, "Введите номер квартиры")}
              <styles.Label bold>Курьерская служба</styles.Label>
              <styles.RadioBox>
                {courierService && courierService.map((courier, indx) => (
                  <styles.RadioRow key={"courierService-" + indx} active={order.sendOrgId === courier.id}>
                  {!(order.sendOrgId === courier.id) && <FaCircleO style={{width: 60}}
                                                                  onClick={() => {
                                                                    setObjectMultiAttr([{
                                                                      field: "sendOrgId",
                                                                      val: courier.id
                                                                    }, {
                                                                      field: "sendPrice",
                                                                      val: courier.sendPrice
                                                                    }, {
                                                                      field: "totalCost",
                                                                      val: order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + courier.sendPrice - order.discount,
                                                                    }, {
                                                                      field: "toPay",
                                                                      val: order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + courier.sendPrice - order.discount,
                                                                    }, {
                                                                      field: "sendOrg",
                                                                      val: courier
                                                                    }]);
                                                                  }}/>}
                  {order.sendOrgId === courier.id &&
                  <FaDotCircleO style={{color: "#26a9e0", width: 60}}
                                onClick={() => {
                                  setObjectMultiAttr([{
                                    field: "sendOrgId",
                                    val: ""
                                  }, {
                                    field: "sendPrice",
                                    val: ""
                                  }, {
                                    field: "totalCost",
                                    val: order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) - order.discount,
                                  }, {
                                    field: "toPay",
                                    val: order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) - order.discount,
                                  }, {
                                    field: "sendOrg",
                                    val: ""
                                  }]);
                                }}/>}
                  <styles.RadioLabel>
                    <span>{courier.name}</span>
                  </styles.RadioLabel>
                  <styles.RadioLabel>
                    <styles.Label fs14>{courier.sendPrice +" ₽"}</styles.Label>
                  </styles.RadioLabel>
                  <styles.RadioLabel>
                    <styles.Label fs14>{courier.payCase + ", Максимальный вес заказа: " + courier.maxWeight + " кг."}
                    </styles.Label>
                  </styles.RadioLabel>
                </styles.RadioRow>))}
              </styles.RadioBox>
              {(doValid && (!order.sendOrgId || order.sendOrgId === '')) &&
              <styles.Label redAlert>выберите курьерскую службу</styles.Label>}
              <styles.OrderButton onClick={nextStep}>Указать способ оплаты</styles.OrderButton>
            </styles.Column>}

            {mailService && mailService.length > 0 &&<styles.SelectBlock onClick={() => {
              const val = order.sendType === "mailService" ? "" : "mailService";
              setObjectMultiAttr([{
                  field: "sendType",
                  val: val
                }, {
                  field: "sendOrgId",
                  val: val === "" ? "" : order.sendOrgId
                }, {
                  field: "sendPrice",
                  val: val === "" ? "" : order.sendPrice
                }, {
                  field: "totalCost",
                  val: val === "" ? order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) - order.discount : order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + order.sendPrice - order.discount,
                }, {
                  field: "toPay",
                  val: val === "" ? order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) - order.discount : order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + order.sendPrice - order.discount,
                }]);
            }}>
              <styles.Label bold>Почта</styles.Label>
            </styles.SelectBlock>}
            {order.sendType === "mailService" && <styles.Column animationHeight>
              <styles.Label bold>Адрес</styles.Label>
              {getInput(7, "city", "Город", order.addr, setObjectAddr, validatorId(order.addr.city), doValid, "Введите город")}
              {getInput(8, "index", "Индекс", order.addr, setObjectAddr, validatorText(order.addr.index), doValid, "Введите индекс")}
              {getInput(9, "street", "Улица", order.addr, setObjectAddr, validatorText(order.addr.street), doValid, "Введите улицу")}
              {getInput(10, "house", "Дом", order.addr, setObjectAddr, validatorText(order.addr.house), doValid, "Введите дом")}
              {getInput(11, "housing", "Корпус", order.addr, setObjectAddr, true, doValid, "Введите корпус")}
              {getInput(12, "building", "Строение", order.addr, setObjectAddr, true, doValid, "Введите строение")}
              {getInput(13, "room", "Квартира", order.addr, setObjectAddr, validatorText(order.addr.room), doValid, "Введите номер квартиры")}

              <styles.RadioBox>
                {mailService && mailService.map((mail, indx) => (
                <styles.RadioRowWrapper>
                <styles.RadioRow key={"mailService-" + indx} active={order.sendOrgId === mail.id}>
                  {!(order.sendOrgId === mail.id) && <FaCircleO style={{width: 60}}
                                                                     onClick={() => {
                                                                       setObjectMultiAttr([{
                                                                         field: "sendOrgId",
                                                                         val: mail.id
                                                                       }, {
                                                                         field: "sendPrice",
                                                                         val: mail.sendPrice
                                                                       }, {
                                                                         field: "totalCost",
                                                                         val: order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + mail.sendPrice - order.discount,
                                                                       }, {
                                                                         field: "toPay",
                                                                         val: order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + mail.sendPrice - order.discount,
                                                                       }, {
                                                                         field: "sendOrg",
                                                                         val: mail
                                                                       }]);
                                                                     }}/>}
                  {order.sendOrgId === mail.id &&
                  <FaDotCircleO style={{color: "#26a9e0", width: 60}}
                                onClick={() => {
                                  setObjectMultiAttr([{
                                    field: "sendOrgId",
                                    val: ""
                                  }, {
                                    field: "sendPrice",
                                    val: ""
                                  }, {
                                    field: "totalCost",
                                    val: order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) - order.discount,
                                  }, {
                                    field: "toPay",
                                    val: order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) - order.discount,
                                  }, {
                                    field: "sendOrg",
                                    val: ""
                                  }]);
                                }}/>}
                  <styles.RadioLabel>
                    <styles.Label fs14 bold>{mail.name}</styles.Label>
                    <styles.Label fs14>{"Стоимость доставки: " + mail.sendPriceCost + " ₽"}</styles.Label>
                    <styles.Label fs14>{"Комиссия за наложенный платеж: " + mail.sendPriceCommission + " ₽"}</styles.Label>
                  </styles.RadioLabel>
                </styles.RadioRow>
                  <styles.Label fs14 justify>
                    {mail.comment}
                  </styles.Label>
                </styles.RadioRowWrapper>
                  ))}
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
              {paymentMethod && paymentMethod.map((payment, indx) => (
              <styles.RadioRow>
                {!(order.paymentMethod === payment.value) &&
                <FaCircleO style={{minWidth: 30}} onClick={() => setObjectAttr(payment.value, 'paymentMethod')}/>}
                {order.paymentMethod === payment.value && <FaDotCircleO style={{color: "#26a9e0", minWidth: 30}}
                                                                 onClick={() => setObjectAttr('', 'paymentMethod')}/>}
                <styles.RadioLabel active={order.paymentMethod === payment.value}>
                  <styles.Label bold>{payment.name}</styles.Label>
                  <styles.Label>{payment.comment}
                  </styles.Label>
                </styles.RadioLabel>
              </styles.RadioRow>
              ))}
            </styles.RadioBox>
            {doValid &&
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
                <styles.SimpleLink target="_blank" to={"/book/" + item.book.id} key={"item" + indx}>
                  <styles.CartOrderItem last={indx === (order.orderItemList.length - 1)}>
                    <styles.CartOrderItemDescription>
                      <styles.CartOrderItemDescriptionInfo>
                        <styles.Label fs14>{item.book.title}</styles.Label>
                      </styles.CartOrderItemDescriptionInfo>
                      <styles.CartOrderItemDescriptionRightInfo>
                        <styles.CartOrderItemDescriptionRightInfoCount>
                          <styles.Label fs14>{item.count + " шт."}</styles.Label>
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
                      fs14>{order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + " ₽"}
                    </styles.Label>
                  </styles.OrderRow>
                  <styles.OrderRow>
                    <styles.Label fs14>Доставка:</styles.Label>
                    <styles.Label fs14>{order.sendPrice+" ₽"}</styles.Label>
                  </styles.OrderRow>
                  <styles.OrderRow>
                    <styles.Label fs14>Скидка:</styles.Label>
                    <styles.Label fs14>{order.discount + " ₽"}</styles.Label>
                  </styles.OrderRow>
                  <br/>
                  <styles.OrderRow>
                    <styles.Label bold fs14>Итого к оплате:</styles.Label>
                    <styles.Label bold
                                  fs14>{(order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + order.sendPrice - order.discount) + " ₽"}
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
                <styles.Label>{order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + " ₽"}
                </styles.Label>
              </styles.OrderRow>
              <styles.OrderRow>
                <styles.Label>Скидка:</styles.Label>
                <styles.Label>{order.discount + " ₽"}</styles.Label>
              </styles.OrderRow>
              <styles.OrderRow>
                <styles.Label>Доставка:</styles.Label>
                <styles.Label>{(order.sendPrice === null ? "" : order.sendPrice ) + " ₽"}</styles.Label>
              </styles.OrderRow>
              <br/>
              <styles.OrderRow>
                <styles.Label bold>Итого к оплате:</styles.Label>
                <styles.Label
                  bold>{(order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) + order.sendPrice - order.discount) + " ₽"}
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
