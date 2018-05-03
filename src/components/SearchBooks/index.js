import React from "react";
import * as styles from "./styles";
import BookCard from "../../components/BookCard/index";
import SearchInput from "../simpleComponents/searchInput/index";

const SearchBooks = ({ searchBooks, searchValue}) => (
    <styles.HomeWrapper>

        <styles.LeftSide><styles.BlueLabel >Поиск по сайту</styles.BlueLabel></styles.LeftSide>

        <styles.LeftSide>
            <SearchInput
            inputProps={{
                placeholder: "Вводи поисковое значение",
                onChange: props.onChangeSearch,
                value: props.searchValue
            }}
            rightPictureClick={() => {
                props.onSearch()
            }}
            rightPicture
            picture={FaSearch}/>
        </styles.LeftSide>

        <styles.LeftSide>
            {newBooks.map((book, indx)=><BookCard key={"newBook"+indx} book={book}/>)}
        </styles.LeftSide>

    </styles.HomeWrapper>
);

export default SearchBooks;
