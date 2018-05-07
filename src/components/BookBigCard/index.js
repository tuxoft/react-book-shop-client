import React from "react";
import * as styles from "./styles";
import InBoxButton from "../../containers/InBoxButton";


const BookBigCard = ({book, block}) => (
    <styles.CardWrapper>

        <styles.Row>
            <styles.ImageBlock>
                <styles.Image src={book.coverUrl}/>
            </styles.ImageBlock>

            <styles.Description>
                <styles.NameBookLabel>{book.title}</styles.NameBookLabel>
                <styles.Row>
                {book.authors && book.authors.map((autor, indx) => (
                    <styles.AutorLabel key={"author" + indx}>
                        {autor.autor.lastName ? autor.autor.lastName : ""} {autor.autor.firstName ? autor.autor.firstName : ""} {autor.autor.middleName ? autor.autor.middleName : ""}
                    </styles.AutorLabel>))}
                </styles.Row>
                <styles.PriceLabel>ID товара: {book.id}</styles.PriceLabel>
                <styles.PriceLabel>Серия: {book.bookSeries && book.bookSeries.name}</styles.PriceLabel>
                <styles.PriceLabel>Издательство: {book.publisher && book.publisher.name}</styles.PriceLabel>
                <styles.PriceLabel>Год издания: {book.publicationYear}</styles.PriceLabel>
                <styles.PriceLabel>Кол-во страниц: VeryMany</styles.PriceLabel>
                <styles.PriceLabel>ISBN: {book.isbn}</styles.PriceLabel>
                <styles.PriceLabel>Тираж: {book.circulation}</styles.PriceLabel>
                <styles.PriceLabel>Формат: 3:4</styles.PriceLabel>
                <styles.PriceLabel>Тип обложки: VeryHard</styles.PriceLabel>
                <styles.PriceLabel>Возрастные ограничения: 18+</styles.PriceLabel>
                <styles.PriceLabel>В наличии: {book.inStock}</styles.PriceLabel>

                <styles.PriceLabel>
                    Цена:
                    <styles.PriceValue>{book.price}</styles.PriceValue>
                </styles.PriceLabel>
                <styles.ButtonWrapper>
                    <InBoxButton/>
                </styles.ButtonWrapper>
            </styles.Description>
        </styles.Row>

        <styles.Row>
            {block == 'description' &&
            <styles.Description>
                {book.subtitle}
            </styles.Description>}

            {block == 'review' &&
            <styles.Description></styles.Description>}
        </styles.Row>

    </styles.CardWrapper>
);

export default BookBigCard;
