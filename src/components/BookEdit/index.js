import React from "react";
import * as styles from "./styles";
import {MdClear} from 'react-icons/lib/md/';
import Checkbox from "../simpleComponents/Checkbox";


const BookEdit = ({block, book, data, options, setBookAttr, addBookAutor, removeBookAutor, removeObjFromListAttr, addObjToListAttr}) => {

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

    const getAuthors = (indx, name, parametrName, book, data, addBookAutor, removeBookAutor) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.Container>
                        {book[name].map((obj, indx) => <styles.Item key={indx}>
                            {obj.author.lastName ? obj.author.lastName : ""} {obj.author.firstName ? obj.author.firstName.substring(0, 1) + "." : ""}
                            {obj.author.middleName ? obj.author.middleName.substring(0, 1) + "." : ""} <MdClear
                            onClick={() => removeBookAutor(book[name], obj)}/></styles.Item>)}
                    </styles.Container>
                    <styles.Input onChange={(val) => {
                        console.log("doSearch", val);
                    }}/>
                    {data[name].map((obj, indx) =>
                        <styles.Line key={name + indx}
                                     onClick={() => addBookAutor(book[name], obj)}>
                            ИД: {obj.author.id}| {obj.author.lastName ? obj.author.lastName : ""} {obj.author.firstName ? obj.author.firstName.substring(0, 1) + "." : ""}
                            {obj.author.middleName ? obj.author.middleName.substring(0, 1) + "." : ""}
                        </styles.Line>)}
                </styles.Column>
            </styles.RowItem>
        </styles.Row>)
    };

    const getMultiObjFromList = (indx, name, parametrName, book, data, removeObjFromListAttr, addObjToListAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.Container>
                        {book[name].map((obj, indx) => <styles.Item key={indx}>
                            {obj.name}
                            <MdClear onClick={() => removeObjFromListAttr(name, book[name], obj)}/>
                        </styles.Item>)}
                    </styles.Container>
                    <styles.Input onChange={(val) => {
                        console.log("doSearch", val);
                    }}/>
                    {data[name].map((obj, indx) =>
                        <styles.Line key={name + indx}
                                     onClick={() => addObjToListAttr(name, book[name], obj)}>
                            ИД: {obj.id}| {obj.name}
                        </styles.Line>)}
                </styles.Column>
            </styles.RowItem>
        </styles.Row>)
    };

    const getOneFromList = (indx, name, parametrName, book, data, setBookAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.Container>
                        <styles.Item>{book[name].name}</styles.Item>
                    </styles.Container>
                    <styles.Input onChange={(val) => {
                        console.log("doSearch", val);
                    }}/>
                    {data[name].map((obj, indx) =>
                        <styles.Line key={name + indx}
                                     onClick={(val) => {
                                         setBookAttr(name, obj)
                                     }}>
                            ИД: {obj.id}| {obj.name}
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
                    value={book[name].id}>
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

    return (
        <styles.ContentWrapper>
            <styles.Label bold>Редактирование книги</styles.Label>

            {options.map((option, indx)=> {
                switch (option.type) {
                    case "oneFromList":
                        return getOneFromList(indx, option.name, option.parametrName, book, data, setBookAttr);
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
                        return getAuthors(indx, option.name, option.parametrName, book, data, addBookAutor, removeBookAutor);
                        break;
                    case "multiObjFromList":
                        return getMultiObjFromList(indx, option.name, option.parametrName, book, data, removeObjFromListAttr, addObjToListAttr);
                        break;
                    default:
                        return (<b>Unresolved Type</b>);
                        break;
                }
                })}
        </styles.ContentWrapper>
    );
};

export default BookEdit;
