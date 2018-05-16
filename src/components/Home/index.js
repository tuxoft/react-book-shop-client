import React from "react";
import * as styles from "./styles";
import BookCard from "../../components/BookCard/index";
import CarouselBookDecorated from "../../components/CarouselBookDecorated";
import CarouselPromoDecorated from "../../components/CarouselPromoDecorated";

const HomeBody = ({promoPictures, categoryCarousels}) => {
    console.log("promoPictures",promoPictures);
    return (
    <styles.HomeWrapper>
        <CarouselPromoDecorated>
            {promoPictures.map((promo, indx)=><styles.TextLink key={"promoPicture"+indx} to={promo.url?promo.url:"/"}><styles.PromoImage src={promo.pictureUrl}/></styles.TextLink>)}
        </CarouselPromoDecorated>
        {categoryCarousels && categoryCarousels.map((category, indx1) => (
            <styles.BooksCarouselWrapper key={"categoryCarousel-"+indx1}>
                <styles.LeftSide><styles.BlueTextLink to={"/categories/"+category.id}>{category.name}</styles.BlueTextLink></styles.LeftSide>
                <CarouselBookDecorated>
                    {category.bookList && category.bookList.map((book, indx2)=><BookCard key={"book-"+indx1+"-"+indx2} book={book}/>)}
                </CarouselBookDecorated>
            </styles.BooksCarouselWrapper>
        ))}

        <styles.RowWrapper>
            <styles.InfoBlock to="/goodBooks">
                <styles.InfoImage src="http://placehold.it/290x220"/>
                <styles.InfoText>
                    <styles.BlueLabel>Лучшие книги</styles.BlueLabel>
                    <br/>
                    <styles.Label>25 апреля – Международный день ДНК.</styles.Label>
                </styles.InfoText>
            </styles.InfoBlock>
            <styles.InfoBlock to="/goodBooks">
                <styles.InfoImage src="http://placehold.it/290x220"/>
                <styles.InfoText>
                    <styles.BlueLabel>Лучшие книги</styles.BlueLabel>
                    <br/>
                    <styles.Label>25 апреля – Международный день ДНК.</styles.Label>
                </styles.InfoText>
            </styles.InfoBlock>
            <styles.InfoBlock to="/goodBooks">
                <styles.InfoImage src="http://placehold.it/290x220"/>
                <styles.InfoText>
                    <styles.BlueLabel>Лучшие книги</styles.BlueLabel>
                    <br/>
                    <styles.Label>25 апреля – Международный день ДНК.</styles.Label>
                </styles.InfoText>
            </styles.InfoBlock>
        </styles.RowWrapper>
    </styles.HomeWrapper>
);}

export default HomeBody;
