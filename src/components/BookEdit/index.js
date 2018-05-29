import React from "react";
import * as styles from "./styles";
import {MdClear} from 'react-icons/lib/md/';
import Checkbox from "../simpleComponents/Checkbox";


const BookEdit = ({
    block,
    book,
    data,
    options,
    setBookAttr,
    addBookAutor,
    removeBookAutor,
    removeObjFromListAttr,
    addObjToListAttr,
    searchInDictionary,
    getAuthorName,
    clearSuggest,
    cancelChangeBookEdit,
    saveChangeBookEdit,
    setCoverBook
}) => {

    const getInput = (indx, name, parametrName, book, setBookAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr(name, val.target.value)
                }} value={book[name]}/>
            </styles.RowItem>
        </styles.Row>)
    };

    const getAuthors = (indx, name, parametrName, book, data, addBookAutor, removeBookAutor, searchInDictionary, getAuthorName, clearSuggest, dictionary) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.Container>
                        {book[name] && book[name].map((obj, indx) => <styles.Item key={indx}>
                          {getAuthorName(obj.author)} <MdClear
                            onClick={() => removeBookAutor(book[name], obj)}/></styles.Item>)}
                    </styles.Container>
                    <styles.Input
                        onChange={(e) => {
                            console.log("doSearch", e);
                            searchInDictionary(dictionary, e.target.value);
                        }}
                        onBlur={() => clearSuggest(dictionary)}
                    />
                    {data[dictionary].map((obj, indx) =>
                        <styles.Line key={name + indx}
                                     onMouseDown={() => addBookAutor(book[name], obj)}>
                            {getAuthorName(obj)}
                        </styles.Line>)}
                </styles.Column>
            </styles.RowItem>
        </styles.Row>)
    };

    const getMultiObjFromList = (indx, name, parametrName, book, data, removeObjFromListAttr, addObjToListAttr, searchInDictionary, clearSuggest) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.Container>
                        {book[name] && book[name].map((obj, indx) => <styles.Item key={indx}>
                            {obj.name}
                            <MdClear onClick={() => removeObjFromListAttr(name, book[name], obj)}/>
                        </styles.Item>)}
                    </styles.Container>
                    <styles.Input
                        onChange={(e) => {
                            console.log("doSearch", e);
                            searchInDictionary(name, e.target.value);
                        }}
                        onBlur={() => clearSuggest(name)}
                    />
                    {data[name].map((obj, indx) =>
                        <styles.Line key={name + indx}
                                     onMouseDown={() => addObjToListAttr(name, book[name], obj)}>
                            {obj.name}
                        </styles.Line>)}
                </styles.Column>
            </styles.RowItem>
        </styles.Row>)
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
        </styles.Row>)
    };

    const getSelect = (indx, name, parametrName, book, data, setBookAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Select
                    onChange={(e) => {
                        setBookAttr(name, data[name].find((pub, indx) => pub.id == e.target.value))
                    }
                    }
                    value={book[name] ? book[name].id: null}>
                    {data[name].map((item, indx) => <option key={item.id} value={item.id}>
                        {item.name}
                    </option>)}
                </styles.Select>
            </styles.RowItem>
        </styles.Row>)
    };

    const getTextArea = (indx, name, parametrName, book, setBookAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.InputText
                    onChange={(val) => {
                        setBookAttr(name, val.target.value)
                    }} value={book[name]}/>
            </styles.RowItem>
        </styles.Row>)
    };

    const getInputImage = (indx, name, parametrName, book, setBookAttr, setCoverBook) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.CoverImage src={book[name]}/>
                    <styles.UploadButton
                      onChange={(val) => {
                        setCoverBook(val)
                      }}
                      label={
                        book[name] == null
                          ? "Добавить изображение"
                          : "Изменить изображение"
                      }
                      deleteButtonVisible={book[name]}
                      onDelete={() => setBookAttr(name, null)}
                      deleteLabel={"Удалить изображение"}
                    />
                </styles.Column>
            </styles.RowItem>
        </styles.Row>)
    };

    const isEmptyObject = (obj) => {
        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            return false;
          }
        }
        return true;
    }

    return (
        <styles.ContentWrapper>
            <styles.Label bold>Редактирование книги</styles.Label>
            <styles.ButtonRow>
                <styles.Button blue onClick={saveChangeBookEdit}>Сохранить</styles.Button>
                <styles.Button blue onClick={cancelChangeBookEdit}>Отмена</styles.Button>
            </styles.ButtonRow>

            {options.map((option, indx)=> {
                switch (option.type) {
                    case "oneFromList":
                        return getOneFromList(indx, option.name, option.parametrName, book, data, setBookAttr, searchInDictionary, clearSuggest);
                        break;
                    case "select":
                        return getSelect(indx, option.name, option.parametrName, book, data, setBookAttr);
                        break;
                    case "input":
                        return getInput(indx, option.name, option.parametrName, book, setBookAttr);
                        break;
                    case "textArea":
                        return getTextArea(indx, option.name, option.parametrName, book, setBookAttr);
                        break;
                    case "authors":
                        return getAuthors(indx, option.name, option.parametrName, book, data, addBookAutor, removeBookAutor, searchInDictionary, getAuthorName, clearSuggest, option.dictionary);
                        break;
                    case "multiObjFromList":
                        return getMultiObjFromList(indx, option.name, option.parametrName, book, data, removeObjFromListAttr, addObjToListAttr, searchInDictionary, clearSuggest);
                        break;
                    case "inputImage":
                        return getInputImage(indx, option.name, option.parametrName, book, setBookAttr, setCoverBook)
                    default:
                        return (<b>Unresolved Type</b>);
                        break;
                }
                })}
        </styles.ContentWrapper>
    );
};

export default BookEdit;
