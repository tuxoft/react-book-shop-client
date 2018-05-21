import React from "react";
import * as styles from "./styles";
import {MdClear} from 'react-icons/lib/md/';
import Checkbox from "../simpleComponents/Checkbox";


const BookSeriesEdit = ({block, object, data, options, setObjAttr, removeObjFromListAttr, addObjToListAttr}) => {

    const getInput = (indx, name, parametrName, object, setObjAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setObjAttr(name, val.target.value)
                }} value={object[name]}/>
            </styles.RowItem>
        </styles.Row>)
    };

    const getMultiObjFromList = (indx, name, parametrName, dictionary, object, data, removeObjFromListAttr, addObjToListAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.Container>
                        {object[name].map((obj, indx) => <styles.Item key={indx}>
                            {obj.name}
                            <MdClear onClick={() => removeObjFromListAttr(name, object[name], obj)}/>
                        </styles.Item>)}
                    </styles.Container>
                    <styles.Input onChange={(val) => {
                        console.log("doSearch", val);
                    }}/>
                    {data[dictionary].map((obj, indx) =>
                        <styles.Line key={name + indx}
                                     onClick={() => addObjToListAttr(name, object[name], obj)}>
                            ИД: {obj.id}| {obj.name}
                        </styles.Line>)}
                </styles.Column>
            </styles.RowItem>
        </styles.Row>)
    };

    const getOneFromList = (indx, name, parametrName, dictionary, object, data, setBookAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.Container>
                        <styles.Item>{object[name].name}</styles.Item>
                    </styles.Container>
                    <styles.Input onChange={(val) => {
                        console.log("doSearch", val);
                    }}/>
                    {data[dictionary].map((obj, indx) =>
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

    const getSelect = (indx, name, parametrName, object, data, setObjAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Select
                    onChange={(e) => {
                        setObjAttr(name, data[name].find((pub, indx) => pub.id == e.target.value))
                    }
                    }
                    value={object[name].id}>
                    {data[name].map((item, indx) => <option key={item.id} value={item.id}>
                        {item.name}
                    </option>)}
                </styles.Select>
            </styles.RowItem>
        </styles.Row>)
    };

    const getTextArea = (indx, name, parametrName, object, setObjAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.InputText
                    onChange={(val) => {
                        setObjAttr(name, val.target.value)
                    }} value={object[name]}/>
            </styles.RowItem>
        </styles.Row>)
    };

    return (
        <styles.ContentWrapper>
            <styles.Label bold>Редактирование серий</styles.Label>

            {options.map((option, indx)=> {
                switch (option.type) {
                    case "oneFromList":
                        return getOneFromList(indx, option.name, option.parametrName, option.dictionary, object, data, setObjAttr);
                        break;
                    case "select":
                        return getSelect(indx, option.name, option.parametrName, object, data, setObjAttr);
                        break;
                    case "input":
                        return getInput(indx, option.name, option.parametrName, object, setObjAttr);
                        break;
                    case "textArea":
                        return getTextArea(indx, option.name, option.parametrName, object, setObjAttr);
                        break;
                    case "multiObjFromList":
                        return getMultiObjFromList(indx, option.name, option.parametrName, option.dictionary, object, data, removeObjFromListAttr, addObjToListAttr);
                        break;
                    default:
                        return (<b>Unresolved Type</b>);
                        break;
                }
                })}
        </styles.ContentWrapper>
    );
};

export default BookSeriesEdit;
