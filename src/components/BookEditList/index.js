import React from "react";
import * as styles from "./styles";
import SearchInput from "../simpleComponents/SearchInput/index";


const BookEditList = ({
  books,
  headers,
  pages,
  fetchBookEditList,
  openBookEdit,
  sortField,
  changeSortField,
  onChangeSearch,
  searchValue
}) => {

  return (
    <styles.ContentWrapper>
      <styles.Label bold>Книги</styles.Label>
      <styles.ButtonRow>
        <styles.Button blue onClick={() => openBookEdit(null)}>Новая книга</styles.Button>
        <SearchInput
          inputProps={{
            placeholder: "Поиск...",
            onChange: onChangeSearch,
            value: searchValue
          }}
        />
        <styles.Label fs16>
          сортировать:
        </styles.Label>
        <styles.Select
          onChange={(e) => {
            changeSortField(e.target.value);
          }
          }
          value={sortField ? sortField: headers[0].name}>
          {headers.map((header, indx) => <option key={"select-"+indx} value={header.name}>
            {header.title.toLowerCase()}
          </option>)}
        </styles.Select>
      </styles.ButtonRow>
      <styles.Table>
        <styles.TableRow>
          {headers && headers.map((header, indx) => (
            <styles.TableHeader key={"header-" + indx}>{header.title}</styles.TableHeader>
          ))}
        </styles.TableRow>
        <styles.TableBody>
          {books && books.map((book, indx) => (
            <styles.TableRow key={"row-"+indx} onClick={() => openBookEdit(book.id)}>
              {headers && headers.map((header, indx2) => (
                <styles.TableCell left={header.name === "title"} key={"row-"+indx+"-cell-"+indx2}>{book[header.name]}</styles.TableCell>
              )
              )}
            </styles.TableRow>
          ))}
        </styles.TableBody>
      </styles.Table>
      <styles.Paging>
        {pages && pages.map((page, indx) => (
          <styles.Page
              key={"page-"+indx}
              onClick={() => fetchBookEditList({start: page.start, pageSize: page.pageSize, sort: sortField})}
              active={page.active}
          >
            {page.number}
          </styles.Page>
        ))}
      </styles.Paging>

    </styles.ContentWrapper>
  );
};

export default BookEditList;
