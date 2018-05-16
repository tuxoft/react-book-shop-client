import React from "react";
import * as styles from "./styles";
import {MdClear} from 'react-icons/lib/md/';
import Checkbox from "../simpleComponents/Checkbox";


const BookEdit = ({block, book, bookSeries, publishers, authors, setBookAttr, addBookAutor, removeBookAutor}) => (
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
                <styles.Label bold>Авторы</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.Container>
                        {book.authors.map((obj, indx)=><styles.Item key={indx}>
                            {obj.author.lastName?obj.author.lastName:""} {obj.author.firstName?obj.author.firstName.substring(0,1)+".":""}
                            {obj.author.middleName?obj.author.middleName.substring(0,1)+".":""} <MdClear onClick={()=>removeBookAutor(book.authors, obj)}/></styles.Item>)}
                    </styles.Container>
                    <styles.Input onChange={(val) => {
                        console.log("doSearch", val);
                    }} />
                    {authors.map((obj, indx) =>
                        <styles.Line key={"authors" + indx}
                                     onClick={()=>addBookAutor(book.authors, obj)}>
                            ИД: {obj.author.id}| {obj.author.lastName?obj.author.lastName:""} {obj.author.firstName?obj.author.firstName.substring(0,1)+".":""}
                            {obj.author.middleName?obj.author.middleName.substring(0,1)+".":""}
                        </styles.Line>)}
                </styles.Column>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Описание</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.InputText
                    onChange={(val) => {
                        setBookAttr("subtitle", val.target.value)
                    }} value={book.subtitle}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Издатель</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Select
                    onChange={(e) => {
                        setBookAttr("publisher", publishers.find((pub, indx) => pub.id == e.target.value))
                    }
                    }
                    value={book.publisher.id}>
                    {publishers.map((item, indx) => <option key={item.id} value={item.id}>
                        {item.name}
                    </option>)}
                </styles.Select>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Серия</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Column>
                    <styles.Input onChange={(val) => {
                        console.log("doSearch", val);
                    }} value={book.bookSeries.name}/>
                    {bookSeries.map((series, indx) =>
                        <styles.Line key={"series" + indx}
                                     onClick={(val) => {
                                         setBookAttr("bookSeries", series)
                                     }}>
                            ИД: {series.id}| {series.name}
                        </styles.Line>)}

                </styles.Column>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Год издания</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("publicationYear", val.target.value)
                }} value={book.publicationYear}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Кол-во страниц</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("pageCount", val.target.value)
                }} value={book.pageCount}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>ISBN</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("isbn", val.target.value)
                }} value={book.isbn}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>UDC</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("udc", val.target.value)
                }} value={book.udc}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>BBK</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("bbk", val.target.value)
                }} value={book.bbk}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Тираж</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("circulation", val.target.value)
                }} value={book.circulation}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Вес</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("weight", val.target.value)
                }} value={book.weight}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Возрастные ограничения</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("ageLimit", val.target.value)
                }} value={book.ageLimit}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Формат</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("format", val.target.value)
                }} value={book.format}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Тип обложки</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("coverType", val.target.value)
                }} value={book.coverType}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>В наличии</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("inStock", val.target.value)
                }} value={book.inStock}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Город</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("city", val.target.value)
                }} value={book.city}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Язык</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("language", val.target.value)
                }} value={book.language}/>
            </styles.RowItem>
        </styles.Row>

        <styles.Row>
            <styles.RowItem>
                <styles.Label bold>Цена</styles.Label>
            </styles.RowItem>
            <styles.RowItem big>
                <styles.Input onChange={(val) => {
                    setBookAttr("price", val.target.value)
                }} value={book.price}/>
            </styles.RowItem>
        </styles.Row>
    </styles.ContentWrapper>
);

export default BookEdit;
