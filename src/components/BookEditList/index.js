import React from "react";
import * as styles from "./styles";


const BookEditList = ({
  books,
  headers,
  pages,
  fetchBookEditList,
  openBookEdit,
}) => {

  return (
    <styles.ContentWrapper>
      <styles.Label bold>Книги</styles.Label>
      <styles.ButtonRow>
        <styles.Button blue onClick={() => openBookEdit(null)}>Новая книга</styles.Button>
      </styles.ButtonRow>
      <styles.Table>
        <styles.TableRow>
          {headers && headers.map((header, indx) => (
            <styles.TableHeader key={"header-" + indx}>header.title</styles.TableHeader>
          ))}
        </styles.TableRow>
        {books && books.map((book, indx) => (
          <styles.TableRow key={"row-"+indx} onClick={() => openBookEdit(books.id)}>
            {headers && headers.map((header, indx2) => (
              <styles.TableCell>book[header.name]</styles.TableCell>
            )
            )}
          </styles.TableRow>
        ))}
      </styles.Table>
      <styles.Paging>
        {pages && pages.map((page, indx) => (
          <styles.Page onClick={() => fetchBookEditList(page.start, page.pageSize)}>{page.number}</styles.Page>
        ))}
      </styles.Paging>

    </styles.ContentWrapper>
  );
};

export default BookEditList;
