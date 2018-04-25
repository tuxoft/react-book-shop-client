import React from "react";
import * as styles from "./styles";


const BookCard = ({book}) => (
    <styles.CardWrapper>

        <styles.ImageLink to={"/books/" + book.id}>
            <styles.Image src={book.url}/>
        </styles.ImageLink>

        <styles.Description>
            <styles.TextLink to={"/books/" + book.id}>{book.name}</styles.TextLink>
            <styles.AutorLabel>
                {book.autor}
            </styles.AutorLabel>
            <styles.PriceLabel>
                Цена: <styles.PriceValue>{book.price}</styles.PriceValue>
            </styles.PriceLabel>
            <styles.ButtonWrapper>
                <styles.Control onClick={() => {book.onInBox(book.id)}}>В корзину</styles.Control>
            </styles.ButtonWrapper>
        </styles.Description>

    </styles.CardWrapper>
);

export default BookCard;
