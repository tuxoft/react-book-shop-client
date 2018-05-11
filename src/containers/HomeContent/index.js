import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as booksActions from "../../store/books/actions";
import HomeBody from "../../components/Home";
import * as booksSelectors from "../../store/books/selectors";


class Home extends Component {

    componentDidMount() {
        this.props.actions.books.fetchNewBooks("new");
        this.props.actions.books.fetchTradeBooks("trade");
        this.props.actions.books.fetchGoodBooks("good");
    }

    onInBox = (id) => {
        console.log("book add in box",this.props.id);
        //this.props.actions.bucket.addBookToItems(id);
    };

  render() {
      let newBooks = [];
      let promoPictures=[];
      for(let i = 1; i<10; i++){
          newBooks.push();
          promoPictures.push({
              url: "/promo",
              pictureUrl: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide"+i
          });
      }
      console.log("books", this.props.newBooks);
    return (
        <HomeBody
            newBooks={this.props.newBooks}
            goodBooks={this.props.newBooks}
            tradeBooks={this.props.newBooks}
            promoPictures={promoPictures}
            menu={this.props.menu}
        />
    );
  }
}

const mapStateToProps = ({ searchBooks, books }) => ({
    newBooks: booksSelectors.getNewBooks(books),
    goodBooks: booksSelectors.getGoodBooks(books),
    tradeBooks: booksSelectors.getTradeBooks(books)
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    actions: {
        ...ownProps.actions,
        books: bindActionCreators(booksActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
