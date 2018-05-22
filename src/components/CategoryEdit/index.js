import React from "react";
import * as styles from "./styles";
import {MdClear} from 'react-icons/lib/md/';
import Checkbox from "../simpleComponents/Checkbox";


const CategoryEdit = ({block, category, data, options, setObjAttr, removeObjFromListAttr, addObjToListAttr}) => {

    const getInput = (indx, name, parametrName, category, setObjAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setObjAttr(name, val.target.value)
                }} value={category[name]}/>
            </styles.RowItem>
        </styles.Row>)
    };

    const getMultiObjFromList = (indx, name, parametrName, dictionary, category, data, removeObjFromListAttr, addObjToListAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.Container>
                        {category[name].map((obj, indx) => <styles.Item key={indx}>
                            {obj.name}
                            <MdClear onClick={() => removeObjFromListAttr(name, category[name], obj)}/>
                        </styles.Item>)}
                    </styles.Container>
                    <styles.Input onChange={(val) => {
                        console.log("doSearch", val);
                    }}/>
                    {data[dictionary].map((obj, indx) =>
                        <styles.Line key={name + indx}
                                     onClick={() => addObjToListAttr(name, category[name], obj)}>
                            ИД: {obj.id}| {obj.name}
                        </styles.Line>)}
                </styles.Column>
            </styles.RowItem>
        </styles.Row>)
    };

    const getOneFromList = (indx, name, parametrName, dictionary, category, data, setBookAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.Container>
                        <styles.Item>{category[name].name}</styles.Item>
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

    const getSelect = (indx, name, parametrName, category, data, setObjAttr) => {
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
                    value={category[name].id}>
                    {data[name].map((item, indx) => <option key={item.id} value={item.id}>
                        {item.name}
                    </option>)}
                </styles.Select>
            </styles.RowItem>
        </styles.Row>)
    };

    const getTextArea = (indx, name, parametrName, category, setObjAttr) => {
        return (<styles.Row key={indx?"row"+indx:"row"}>
            <styles.RowItem>
                <styles.Label bold>{parametrName}</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.InputText
                    onChange={(val) => {
                        setObjAttr(name, val.target.value)
                    }} value={category[name]}/>
            </styles.RowItem>
        </styles.Row>)
    };

    return (
        <styles.ContentWrapper>
            <styles.Label bold>Редактирование категории</styles.Label>

            {options.map((option, indx)=> {
                switch (option.type) {
                    case "oneFromList":
                        return getOneFromList(indx, option.name, option.parametrName, option.dictionary, category, data, setObjAttr);
                        break;
                    case "select":
                        return getSelect(indx, option.name, option.parametrName, category, data, setObjAttr);
                        break;
                    case "input":
                        return getInput(indx, option.name, option.parametrName, category, setObjAttr);
                        break;
                    case "textArea":
                        return getTextArea(indx, option.name, option.parametrName, category, setObjAttr);
                        break;
                    case "multiObjFromList":
                        return getMultiObjFromList(indx, option.name, option.parametrName, option.dictionary, category, data, removeObjFromListAttr, addObjToListAttr);
                        break;
                    default:
                        return (<b>Unresolved Type</b>);
                        break;
                }
                })}
        </styles.ContentWrapper>
    );
};

export default CategoryEdit;
