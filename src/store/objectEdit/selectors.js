export const getActiveObject = (state) => {
  return state.activeObject;
};

export const getObjectEdit = (state) => {
  return state.editObject[state.activeObject];
};

export const getOptions = (state) => {
  return state.options[state.activeObject];
};

export const getObjectEditList = (state) => {
  return state.editList[state.activeObject].data;
};

export const getObjectQueryParams = (state) => {
  return state.queryParams[state.activeObject];
};

export const getHeadersForEditList = (state) => {
  return state.headersForEditList[state.activeObject];
};

export const getPagesForEditList = (state) => {
  let pages = [];
  if (state &&
    state.editList &&
    state.editList[state.activeObject] &&
    state.editList[state.activeObject].meta &&
    state.editList[state.activeObject].meta.total > state.queryParams[state.activeObject].pageSize) {
    let total = state.editList[state.activeObject].meta.total;
    let i = 0;
    while (total > 0) {
      i++;
      total = total - state.queryParams[state.activeObject].pageSize;
      pages.push({
        number: i,
        start: (i - 1) * state.queryParams[state.activeObject].pageSize,
        pageSize: state.queryParams[state.activeObject].pageSize,
        active: (i - 1) * state.queryParams[state.activeObject].pageSize === state.editList[state.activeObject].meta.paging.start
      })
    }
  }
  return pages;
};

export const getPageSize = (state) => {
  return state.queryParams[state.activeObject].pageSize;
};

export const getSortField = (state) => {
  return state.queryParams[state.activeObject].sort;
};

export const getSearchValue = (state) => {
  return state.queryParams[state.activeObject].query;
};

export const getObjectInfo = (state) => {
  return state.objectInfo[state.activeObject];
};