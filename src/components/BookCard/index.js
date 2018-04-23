import React from "react";
import * as styles from "./styles";


const BookCard = (props) => (
    <styles.CardWrapper>

        <styles.ImageLink to={"/books/" + props.id}>
            <styles.Image src={props.url}/>
        </styles.ImageLink>

        <styles.Description>
            <styles.TextLink to={"/books/" + props.id}>{props.name}</styles.TextLink>
            <styles.AutorLabel>
                {props.autor}
            </styles.AutorLabel>
            <styles.PriceLabel>
                Цена: <styles.PriceValue>{props.price}</styles.PriceValue>
            </styles.PriceLabel>
            <styles.ButtonWrapper>
                <styles.Control onClick={() => {props.onInBox(props.id)}}>В корзину</styles.Control>
            </styles.ButtonWrapper>
        </styles.Description>

    </styles.CardWrapper>
);

export default BookCard;
