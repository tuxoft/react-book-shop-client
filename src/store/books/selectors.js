export const getNewBooks = (state) => {
    console.log("getNewBooks", state);
    return state.newBooks.map((book)=>{
        return getBook(book)
    });
};

export const getTradeBooks = (state) => {
    return state.tradeBooks.map((book)=>{
        return getBook(book)
    });
};

export const getGoodBooks = (state) => {
    return state.goodBooks.map((book)=>{
        return getBook(book)
    });
};

export const getSearchBooks = (state) => {
    return state.searchBooks.map((book)=>{
        return getBook(book)
    });
};

function getBook(book){
    return {
        url: book.coverUrl?book.coverUrl:"http://placehold.it/140x140",
            name: book.title,
        id: book.id,
        autor: book.authors ? book.authors.map((author)=>author.author.lastName+" "+ (author.author.firstName!==undefined && author.author.firstName!== null?(author.author.firstName.substring(0,1)+"."):"") + (author.author.middleName!==undefined && author.author.middleName!==null?(author.author.middleName.substring(0,1)+"."):"")) : [] ,
        price: book.price,
    }
}
