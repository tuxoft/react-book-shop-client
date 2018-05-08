import React from "react";
import * as styles from "./styles";
import InBoxButton from "../../containers/InBoxButton";


const BookCard = ({book}) => (
    <styles.CardWrapper>

        <styles.ImageLink to={"/book/" + book.id}>
            <styles.Image src={book.url}/>
        </styles.ImageLink>

        <styles.Description>
            <styles.TextLink to={"/book/" + book.id}>{book.name}</styles.TextLink>
            <styles.AutorLabel>
                {book.autor}
            </styles.AutorLabel>
            <styles.PriceLabel>
                Цена: <styles.PriceValue>{book.price}</styles.PriceValue>
            </styles.PriceLabel>
            <styles.ButtonWrapper>
                <InBoxButton bookId={book.id}/>
            </styles.ButtonWrapper>
        </styles.Description>

    </styles.CardWrapper>
);

export default BookCard;
