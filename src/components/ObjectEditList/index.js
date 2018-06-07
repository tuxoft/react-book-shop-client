import React from "react";
import * as styles from "./styles";
const deleteButton = require("../../assets/images/delete.png");



const ObjectEditList = ({
  objectList,
  headers,
  pages,
  fetchObjectEditList,
  openObjectEdit,
  sortField,
  changeSortField,
  onChangeSearch,
  searchValue,
  objectInfo,
  data,
  getCellValue,
  deleteActionHandler
}) => {

  const getObjectAction = (id, deleteActionHandler) => {
    return (<styles.ActionRow>
      <styles.Tooltip title="Удалить">
      <styles.ActionImage
        src={deleteButton}
        onClick={e => deleteActionHandler(e, id)}/>
      </styles.Tooltip>
    </styles.ActionRow>);
  }

  return (
    <styles.ContentWrapper>
      <styles.Label bold>{objectInfo.pageListTitle}</styles.Label>
      <styles.ButtonRow>
        <styles.Button blue onClick={() => openObjectEdit("new")}>{objectInfo.newObjectButtonCaption}</styles.Button>
        <styles.SearchInput
          placeholder="Поиск..."
          onChange={(e) => onChangeSearch(e.target.value)}
          value={searchValue}
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
      {objectList && objectList.length > 0 &&<styles.Table>
        <styles.TableBody>
        <styles.TableRow>
          {headers && headers.map((header, indx) => (
            <styles.TableHeader key={"header-" + indx}>{header.title}</styles.TableHeader>
          ))}
          <styles.TableHeader key={"header-action"}></styles.TableHeader>
        </styles.TableRow>
        {objectList.map((object, indx) => (
           <styles.TableRow key={"row-"+indx} onClick={() => openObjectEdit(object.id)}>
              {headers && headers.map((header, indx2) => (
                  <styles.TableCell left={typeof(getCellValue(object,header.name)) === "string"} key={"row-"+indx+"-cell-"+indx2}>{getCellValue(object,header.name)}</styles.TableCell>
              ))}
             <styles.TableCell key={"row-"+indx+"-cell-action"}>{getObjectAction(object.id, deleteActionHandler)}</styles.TableCell>
           </styles.TableRow>
        ))}
        </styles.TableBody>
      </styles.Table>}
      {objectList && objectList.length === 0 && <styles.NotFoundSearch>
        {"По запросу "}<b>{searchValue}</b>{" ничего не найдено."}<br/><br/>
        Рекомендации:<br/>
        <ul>
          <li>Убедитесь, что все слова написаны без ошибок.</li>
          <li>Попробуйте использовать другие ключевые слова.</li>
          <li>Попробуйте использовать более популярные ключевые слова.</li>
        </ul>
      </styles.NotFoundSearch>}
      <styles.Paging>
        {pages && pages.map((page, indx) => (
          <styles.Page
              key={"page-"+indx}
              onClick={() => fetchObjectEditList({start: page.start})}
              active={page.active}
          >
            {page.number}
          </styles.Page>
        ))}
      </styles.Paging>

    </styles.ContentWrapper>
  );
};

export default ObjectEditList;
