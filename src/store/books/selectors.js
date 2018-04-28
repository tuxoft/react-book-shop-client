export const getNewBooks = (state) => {

    return state.newBooks.map((book)=>getShortBook(book));
};

export const getTradeBooks = (state) => {
    return state.tradeBooks.map((book)=>getShortBook(book));
};

export const getGoodBooks = (state) => {
    return state.goodBooks.map((book)=>getShortBook(book));
};

export const getSearchBooks = (state) => {
    return state.searchBooks.map((book)=>getShortBook(book));
};

function* getShortBook(book) {
    if(!book) return {};

    return {
        url: book.coverUrl?book.coverUrl:"http://placehold.it/140x140",
        name: book.title,
        id: book.id,
        autor: book.authors ? book.authors.map((author)=>author.lastName+" "+author.firstName?(author.firstName.substring(0,1)+"."):""+author.middleName?(author.middleName.substring(0,1)+"."):"") : [] ,
        price: book.price,
    }
}

