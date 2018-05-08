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
                    {book.authors && book.authors.map((author, indx) => (
                        <styles.AutorLabel key={"author" + indx}>
                            {author.author.lastName ? author.author.lastName : ""} {author.author.firstName ? author.author.firstName : ""} {author.author.middleName ? author.author.middleName : ""}
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
                    <InBoxButton bookId={book.id}/>
                </styles.ButtonWrapper>


                {block === 'description' &&
                <styles.Text>
                    {book.subtitle}
                </styles.Text>}

                {block === 'review' &&
                <styles.Text></styles.Text>}

            </styles.Description>
        </styles.Row>

    </styles.CardWrapper>
);

export default BookBigCard;
