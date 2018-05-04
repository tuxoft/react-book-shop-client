import React from "react";
import * as styles from "./styles";
import {FaSearch} from 'react-icons/lib/fa/';
import BookCard from "../../components/BookCard/index";
import SearchInput from "../simpleComponents/searchInput/index";

const SearchBooks = ({ searchBooks, searchValue, onSearch, onChangeSearch}) => (
    <styles.HomeWrapper>

        <styles.CenterSide>
            <styles.BlueLabel >Поиск по сайту</styles.BlueLabel>
        </styles.CenterSide>

        <styles.CenterSide>
            <SearchInput
            long
            border
            inputProps={{
                placeholder: "Вводи поисковое значение",
                onChange: onChangeSearch,
                value: searchValue
            }}
            rightPictureClick={() => {
                onSearch()
            }}
            rightPicture
            picture={FaSearch}/>
        </styles.CenterSide>

        <styles.RowWrapper>
            {searchBooks.map((book, indx)=><BookCard key={"searchBooks"+indx} book={book}/>)}
        </styles.RowWrapper>

    </styles.HomeWrapper>
);

export default SearchBooks;
