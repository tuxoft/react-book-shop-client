import React from "react";
import * as styles from "./styles";
import {MdClear} from 'react-icons/lib/md/';
import Checkbox from "../simpleComponents/Checkbox";


const Order = ({}) => {

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
            <styles.Label bold>Оформление заказа</styles.Label>

        </styles.ContentWrapper>
    );
};

export default Order;
