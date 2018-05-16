import React from "react";
import * as styles from "./styles";
import BookCard from "../../components/BookCard/index";

const CategoryBooks = ({ category }) => (
  <styles.HomeWrapper>

    <styles.CenterSide>
      <styles.BlueLabel >{category.name}</styles.BlueLabel>
    </styles.CenterSide>

    <styles.RowWrapper>
      {category.bookList && category.bookList.map((book, indx)=><BookCard key={"categoryBooks"+indx} book={book}/>)}
    </styles.RowWrapper>

  </styles.HomeWrapper>

);

export default CategoryBooks;
