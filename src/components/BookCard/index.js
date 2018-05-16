import React from "react";
import * as styles from "./styles";
import InBoxButton from "../../containers/InBoxButton";
import { getAuthors } from "../../utils"


const BookCard = ({book}) => (
    <styles.CardWrapper>

        <styles.ImageLink to={"/book/" + book.id}>
            <styles.Image src={book.coverUrl}/>
        </styles.ImageLink>

        <styles.Description>
            <styles.TextLink to={"/book/" + book.id}>{book.title}</styles.TextLink>
            <styles.AutorLabel>
                {getAuthors(book.authors)}
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
