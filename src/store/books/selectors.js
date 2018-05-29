export const getBigBook = (state) => {
    console.log("getBook", state);
    return state.book;
};

export const getSearchBooks = (state) => {
    return state.searchBooks?state.searchBooks.data:[];
};

export const getSearchBooksMeta = (state) => {
    return state.searchBooks?state.searchBooks.meta:[];
};

export const getSearchBooksSpinner = (state) => {
    return state.searchBooks?state.searchBooks.spinner:true;
};

export const getSearchBooksQuery = (state) => {
    return state.searchBooks?state.searchBooks.query:'';
};

export const getBooksByCategory = (state, categoryId) => {
  return state.booksByCategory[categoryId]?state.booksByCategory[categoryId].data:[];
};

export const getBooksByCategoryPaging = (state, categoryId) => {
    return state.booksByCategory[categoryId]?state.booksByCategory[categoryId].meta:[];
};
export const getBooksByCategorySpinner = (state, categoryId) => {
    return state.booksByCategory[categoryId]?state.booksByCategory[categoryId].spinner:true;
};

export const getSuggestions = (state) => {
  if (state.suggestionSearch.length === 0) {
    return null;
  } else {
    let productItems = [];
    let authorItems = [];
    let seriesItems = [];
    state.suggestionSearch.map((book) => {
      let searchBook = {
        title: book.title,
        url: '/book/' + book.id + '/description',
        authors: []
      };
      if (book.bookAuthors) {
        book.bookAuthors.map((bookAuthor) => {
          searchBook.authors.push({
            id: bookAuthor.author.id,
            title: (bookAuthor.author.firstName ? bookAuthor.author.firstName.slice(0,1) + ". ":"") + (bookAuthor.author.lastName ? bookAuthor.author.lastName : ""),
            url: '/authors/' + bookAuthor.author.id
          });
        });
      }
      productItems.push(searchBook);
      searchBook.authors.map((author) => {
        authorItems.findIndex((a) => a.id === author.id);
        if (authorItems.findIndex((a) => a.id === author.id) === -1) {
          authorItems.push(author);
        }
      });
      if (book.bookSeries && seriesItems.findIndex((s) => s.id === book.bookSeries.id) === -1) {
        seriesItems.push({
          id: book.bookSeries.id,
          title: book.bookSeries.name,
          url: '/series/' + book.bookSeries.id
        });
      }
    });
    return {
      productItems,
      authorItems,
      seriesItems
    };
  }
}