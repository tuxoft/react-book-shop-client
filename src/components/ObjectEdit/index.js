import React from "react";
import * as styles from "./styles";
import {MdClear} from 'react-icons/lib/md/';


const ObjectEdit = ({
  object,
  data,
  options,
  setObjAttr,
  removeObjFromListAttr,
  addObjToListAttr,
  saveChangeObjectEdit,
  cancelChangeObjectEdit,
  searchInDictionary,
  clearSuggest,
  setImage,
  addObjWithOrder,
  removeObjWithOrder,
  getTitle,
  objectInfo
}) => {

  const getInput = (indx, name, parametrName, object, setObjAttr, valueType) => {
    return (<styles.Row key={indx ? "row" + indx : "row"}>
      <styles.RowItem>
        <styles.Label bold>{parametrName}</styles.Label>
      </styles.RowItem>
      <styles.RowItem big>
        <styles.Input
          valueType={valueType}
          onChange={(val) => {
            setObjAttr(name, val.target.value)
          }}
          value={object[name] ? object[name] : ""}/>
      </styles.RowItem>
    </styles.Row>)
  };

  const getMultiObjFromList = (indx, name, dictionary, parametrName, object, data, removeObjFromListAttr, addObjToListAttr, searchInDictionary, clearSuggest) => {
    return (<styles.Row key={indx?"row"+indx:"row"}>
      <styles.RowItem>
        <styles.Label bold>{parametrName}</styles.Label>
      </styles.RowItem>
      <styles.RowItem big>
        <styles.Column>
          <styles.Container>
            {object[name] && object[name].map((obj, indx) => <styles.Item key={indx}>
              {obj.name}
              <MdClear onClick={() => removeObjFromListAttr(name, object[name], obj)}/>
            </styles.Item>)}
          </styles.Container>
          <styles.Input
            id={name}
            onChange={(e) => {
              searchInDictionary(dictionary, e.target.value);
            }}
            onBlur={() => clearSuggest(dictionary, name)}
          />
          {data[dictionary].map((obj, indx) =>
            <styles.Line key={name + indx}
                         onMouseDown={() => addObjToListAttr(name, object[name], obj)}>
              {obj.name}
            </styles.Line>)}
        </styles.Column>
      </styles.RowItem>
    </styles.Row>)
  };

  const getMultiObjWithOrderFromList = (indx, name, dictionary, parametrName, object, data, addObjWithOrder, removeObjWithOrder, searchInDictionary, getTitle, clearSuggest) => {
    return (<styles.Row key={indx?"row"+indx:"row"}>
      <styles.RowItem>
        <styles.Label bold>{parametrName}</styles.Label>
      </styles.RowItem>
      <styles.RowItem big>
        <styles.Column>
          <styles.Container>
            {object[name] && object[name].map((obj, indx) => <styles.Item key={indx}>
              {getTitle(obj.author)} <MdClear
              onClick={() => removeObjWithOrder(object[name], obj)}/></styles.Item>)}
          </styles.Container>
          <styles.Input
            id={name}
            onChange={(e) => {
              console.log("doSearch", e);
              searchInDictionary(dictionary, e.target.value);
            }}
            onBlur={() => clearSuggest(dictionary, name)}
          />
          {data[dictionary].map((obj, indx) =>
            <styles.Line key={name + indx}
                         onMouseDown={() => addObjWithOrder(object[name], obj)}>
              {getTitle(obj)}
            </styles.Line>)}
        </styles.Column>
      </styles.RowItem>
    </styles.Row>)
  };

  const getOneFromList = (indx, name, dictionary, parametrName, object, data, setObjAttr, searchInDictionary, clearSuggest) => {
    console.log("object", object);
    console.log("name", name);
    const disabled = (name === "bookSeries" && (object.publisher == null || object.publisher && object.publisher.id == null))? true : false;
    return (<styles.Row key={indx?"row"+indx:"row"}>
      <styles.RowItem>
        <styles.Label bold>{parametrName}</styles.Label>
      </styles.RowItem>
      <styles.RowItem big>
        <styles.Column>
          <styles.Container>
            {object[name] && object[name].name &&<styles.Item>{object[name].name}</styles.Item>}
          </styles.Container>
          <styles.Input id={name}
                        disabled={disabled}
                        onChange={(e) => {
                          searchInDictionary(dictionary, e.target.value);
                        }}
                        onBlur={() => clearSuggest(dictionary, name)}
                        placeholder={disabled ? "Выберите издателя" : ""}
          />
          {data[dictionary].map((obj, indx) =>
            <styles.Line key={name + indx}
                         onMouseDown={(val) => {
                           setObjAttr(name, obj)
                         }}>
              {obj.name}
            </styles.Line>)}
        </styles.Column>
      </styles.RowItem>
    </styles.Row>)
  };

  const getSelect = (indx, name, parametrName, object, data, setObjAttr) => {
    return (<styles.Row key={indx ? "row" + indx : "row"}>
      <styles.RowItem>
        <styles.Label bold>{parametrName}</styles.Label>
      </styles.RowItem>
      <styles.RowItem big>
        <styles.Select
          onChange={(e) => {
            setObjAttr(name, data[name].find((pub, indx) => pub.id === Number(e.target.value)))
          }
          }
          value={object[name] ? object[name].id : ""}>
          <option disabled value={""}>выберите значение</option>
          {data[name].map((item, indx) =>
            <option key={item.id} value={item.id}>
              {item.name}
            </option>)}
        </styles.Select>
      </styles.RowItem>
    </styles.Row>)
  };

  const getTextArea = (indx, name, parametrName, object, setObjAttr) => {
    return (<styles.Row key={indx ? "row" + indx : "row"}>
      <styles.RowItem>
        <styles.Label bold>{parametrName}</styles.Label>
      </styles.RowItem>
      <styles.RowItem big>
        <styles.InputText
          onChange={(val) => {
            setObjAttr(name, val.target.value)
          }} value={object[name] ? object[name] : ""}/>
      </styles.RowItem>
    </styles.Row>)
  };

  const getInputImage = (indx, name, parametrName, object, setObjAttr, setImage) => {
    return (<styles.Row key={indx?"row"+indx:"row"}>
      <styles.RowItem>
        <styles.Label bold>{parametrName}</styles.Label>
      </styles.RowItem>
      <styles.RowItem big>
        <styles.Column>
          <styles.CoverImage src={object[name]}/>
          <styles.UploadButton
            onChange={(val) => {
              setImage(val)
            }}
            label={
              object[name] == null
                ? "Добавить изображение"
                : "Изменить изображение"
            }
            deleteButtonVisible={object[name]}
            onDelete={() => setObjAttr(name, null)}
            deleteLabel={"Удалить изображение"}
          />
        </styles.Column>
      </styles.RowItem>
    </styles.Row>)
  };

  return (
    <styles.ContentWrapper>
      <styles.Label bold>{objectInfo.pageItemTitle}</styles.Label>
      <styles.ButtonRow>
        <styles.Button blue onClick={saveChangeObjectEdit}>Сохранить</styles.Button>
        <styles.Button blue onClick={cancelChangeObjectEdit}>Отмена</styles.Button>
      </styles.ButtonRow>
      {options.map((option, indx) => {
        switch (option.type) {
          case "oneFromList":
            return getOneFromList(indx, option.name, option.dictionary?option.dictionary:option.name, option.parametrName, object, data, setObjAttr, searchInDictionary, clearSuggest);
          case "select":
            return getSelect(indx, option.name, option.parametrName, object, data, setObjAttr);
          case "input":
            return getInput(indx, option.name, option.parametrName, object, setObjAttr, option.valueType);
          case "textArea":
            return getTextArea(indx, option.name, option.parametrName, object, setObjAttr);
          case "multiObjFromList":
            return getMultiObjFromList(indx, option.name, option.dictionary?option.dictionary:option.name, option.parametrName, object, data, removeObjFromListAttr, addObjToListAttr, searchInDictionary, clearSuggest);
          case "authors":
            return getMultiObjWithOrderFromList(indx, option.name, option.dictionary?option.dictionary:option.name, option.parametrName, object, data, addObjWithOrder, removeObjWithOrder, searchInDictionary, getTitle, clearSuggest);
          case "inputImage":
            return getInputImage(indx, option.name, option.parametrName, object, setObjAttr, setImage)
          default:
            return (<b>Unresolved Type</b>);
        }
      })}
    </styles.ContentWrapper>
  );
};

export default ObjectEdit;
