export const getBookEdit = (state) => {
    console.log("getBookEdit", state);
    return state.editBook;
};

export const getBookEditList = (state) => {
  console.log("getBookEditList", state);
  return state.bookEditList.data;
};

export const getHeadersForBookEditList = (state) => {
  console.log("getHeadersForBookEditList", state);
  return state.headersForBookEditList;
};

export const getPagesForBookEditList = (state) => {
  console.log("getPagesForBookEditList", state);
  let pages = [];
  if (state && state.bookEditList && state.bookEditList.meta && state.bookEditList.meta.total > state.pageSize) {
    const countPage = (state.bookEditList.meta.total - state.bookEditList.meta.total % state.pageSize) / state.pageSize;
    let total = state.bookEditList.meta.total;
    let i = 0;
    while (total > 0) {
      i++;
      total = total - state.pageSize;
      pages.push({
        number: i,
        start: (i - 1) * state.pageSize,
        pageSize: state.pageSize,
        active: (i - 1) * state.pageSize === state.bookEditList.meta.paging.start
      })
    }
  }
  return pages;
}

export const getPageSize = (state) => {
  console.log("getPageSize", state);
  return state.pageSize;
}

export const getSortField = (state) => {
  console.log("getSortField", state);
  return state.sortField;
}
