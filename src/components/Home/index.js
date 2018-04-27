import React from "react";
import * as styles from "./styles";
import BookCard from "../../components/BookCard/index";
import CarouselBookDecorated from "../../components/CarouselBookDecorated";
import CarouselPromoDecorated from "../../components/CarouselPromoDecorated";

const HomeBody = ({promoPictures, newBooks, goodBooks, tradeBooks}) => (
    <styles.HomeWrapper>
        <CarouselPromoDecorated>
            {promoPictures.map((promo, indx)=><styles.TextLink key={"promoPicture"+indx} to={promo.url?promo.url:"/"}><img src={promo.pictureUrl}/></styles.TextLink>)}

        </CarouselPromoDecorated>

        <styles.LeftSide><styles.BlueTextLink to="/newBooks">Новинки литературы</styles.BlueTextLink></styles.LeftSide>
        <CarouselBookDecorated>
            {newBooks.map((book, indx)=><BookCard key={"newBook"+indx} book={book}/>)}
        </CarouselBookDecorated>

        <styles.LeftSide><styles.BlueTextLink to="/tradeBooks">Лидеры продаж</styles.BlueTextLink></styles.LeftSide>
        <CarouselBookDecorated>
            {goodBooks.map((book, indx)=><BookCard key={"newBook"+indx} book={book}/>)}
        </CarouselBookDecorated>

        <styles.LeftSide><styles.BlueTextLink to="/goodBooks">Лучшие книги</styles.BlueTextLink></styles.LeftSide>
        <CarouselBookDecorated>
            {tradeBooks.map((book, indx)=><BookCard key={"newBook"+indx} book={book}/>)}
        </CarouselBookDecorated>
        <styles.RowWrapper>
            <styles.InfoBlock to="/goodBooks">
                <styles.InfoImage src="http://placehold.it/290x220"/>
                <styles.InfoText>
                    <styles.BlueLabel>Лучшие книги</styles.BlueLabel>
                    <styles.Label>25 апреля – Международный день ДНК.</styles.Label>
                </styles.InfoText>
            </styles.InfoBlock>
            <styles.InfoBlock to="/goodBooks">
                <styles.InfoImage src="http://placehold.it/290x220"/>
                <styles.InfoText>
                    <styles.BlueLabel>Лучшие книги</styles.BlueLabel>
                    <styles.Label>25 апреля – Международный день ДНК.</styles.Label>
                </styles.InfoText>
            </styles.InfoBlock>
            <styles.InfoBlock to="/goodBooks">
                <styles.InfoImage src="http://placehold.it/290x220"/>
                <styles.InfoText>
                    <styles.BlueLabel>Лучшие книги</styles.BlueLabel>
                    <styles.Label>25 апреля – Международный день ДНК.</styles.Label>
                </styles.InfoText>
            </styles.InfoBlock>
        </styles.RowWrapper>
    </styles.HomeWrapper>
);

export default HomeBody;
