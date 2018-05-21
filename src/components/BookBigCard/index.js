import React from "react";
import * as styles from "./styles";
import InBoxButton from "../../containers/InBoxButton";
const navigationSplitter = require("../../assets/images/arrow.png");


const BookBigCard = ({book, block, navigationMenuTop}) => (
    <styles.CardWrapper>
        <styles.NavigationRow>
          {navigationMenuTop && navigationMenuTop.map((menuItem, indx) => {
              if (indx === 0) {
                  return (
                    <styles.NavigationItemWrapper key={"meniItemTop-"+indx}>
                        <styles.NavigationItem to={menuItem.url}>{menuItem.name}</styles.NavigationItem>
                    </styles.NavigationItemWrapper>
                  )
              } else {
                  return (
                    <styles.NavigationItemWrapper key={"meniItemTop-"+indx}>
                        <styles.NavigationItemSplitter src={navigationSplitter}/>
                        <styles.NavigationItem to={menuItem.url}>{menuItem.name}</styles.NavigationItem>
                    </styles.NavigationItemWrapper>
                  )
              }
          })}
        </styles.NavigationRow>
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
                {book.bookSeries&&<styles.PriceLabel>Серия: {book.bookSeries && book.bookSeries.name}</styles.PriceLabel>}
                {book.publisher&&<styles.PriceLabel>Издательство: {book.publisher && book.publisher.name}</styles.PriceLabel>}
                {book.publicationYear&&<styles.PriceLabel>Год издания: {book.publicationYear}</styles.PriceLabel>}
                {book.pageCount&&<styles.PriceLabel>Кол-во страниц: {book.pageCount}</styles.PriceLabel>}
                {book.isbn&&<styles.PriceLabel>ISBN: {book.isbn}</styles.PriceLabel>}
                {book.circulation&&<styles.PriceLabel>Тираж: {book.circulation}</styles.PriceLabel>}
                {book.dimensions&&<styles.PriceLabel>Формат: {book.dimensions}</styles.PriceLabel>}
                {book.coverType&&<styles.PriceLabel>Тип обложки: {book.coverType}</styles.PriceLabel>}
                {book.ageLimit&&<styles.PriceLabel>Возрастные ограничения: {book.ageLimit}</styles.PriceLabel>}
                {book.inStock&&<styles.PriceLabel>В наличии: {book.inStock}</styles.PriceLabel>}

                <styles.PriceLabel>
                    Цена:
                    <styles.PriceValue>{book.price}</styles.PriceValue>
                </styles.PriceLabel>
                <styles.ButtonWrapper>
                    <InBoxButton bookId={book.id}/>
                </styles.ButtonWrapper>


                {block === 'description' &&
                <styles.Text>
                    {book.description}
                </styles.Text>}

                {block === 'review' &&
                <styles.Text></styles.Text>}

            </styles.Description>
        </styles.Row>

    </styles.CardWrapper>
);

export default BookBigCard;
