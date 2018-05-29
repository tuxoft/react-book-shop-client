import React from "react";
import * as styles from "./styles";
import {FaSearch} from 'react-icons/lib/fa/';
import BookCard from "../../components/BookCard/index";
import SearchInput from "../simpleComponents/SearchInput/index";
import Spinner  from 'react-spinkit'

const SearchBooks = ({ searchBooks, searchValue, onSearch, onChangeSearch, spinner}) => (
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

        { spinner && <styles.RowWrapper center>
            <Spinner name="ball-spin-fade-loader" color="#28A9E0"/>
        </styles.RowWrapper> }

    </styles.HomeWrapper>
);

export default SearchBooks;
