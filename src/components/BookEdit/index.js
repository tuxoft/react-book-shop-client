import React from "react";
import * as styles from "./styles";
import Checkbox from "../simpleComponents/Checkbox";


const BookEdit = ({block, book, setBookAttr}) => (
    <styles.ContentWrapper>
        <styles.Label bold>Редактирование книги</styles.Label>
        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Назание</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("title", val.target.value)
                }} value={book.title}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Описание</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("subtitle", val.target.value)
                }} value={book.subtitle}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Серия</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("title", val.target.value)
                }} value={book.title}/>
            </styles.RowItem>
        </styles.Row>
    </styles.ContentWrapper>
);

export default BookEdit;
