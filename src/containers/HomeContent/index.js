import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as searchBooksActions from "../../store/searchBooks/actions";
import HomeBody from "../../components/Home";
import { getSearchValue } from "../../store/searchBooks/selectors";
import { getBuscketItems, getBuscketReservItems } from "../../store/bucket/selectors";

class Home extends Component {

  onChangeText = (val) => {
      console.log(val.target.value);
      this.props.actions.searchBooks.setSearchValue(val.target.value);
  };

    onSearch = () => {
        console.log(this.props.searchValue);
        this.props.actions.searchBooks.seachBooks(this.props.searchValue);
    };

  render() {
      let newBooks = [];
      let promoPictures=[];
      for(let i = 1; i<10; i++){
          newBooks.push({
              url: "http://placehold.it/140x140",
              name: "Пепе - длиный чулок "+i,
              id: i,
              autor: "Гоголь А. Н.",
              price: 100500,
              onInBox: (id) => {
                  alert(id)
              },
          });
          promoPictures.push({
              url: "/promo",
              pictureUrl: "http://placehold.it/1000x400/ffffff/c0392b/&text=slide"+i
          });
      }
    return (
        <HomeBody
            newBooks={newBooks}
            goodBooks={newBooks}
            tradeBooks={newBooks}
            promoPictures={promoPictures}
        />
    );
  }
}

const mapStateToProps = ({ searchBooks, buscket }) => ({
  searchValue: getSearchValue(searchBooks),
  boxItemsCount: getBuscketItems(buscket),
  boxItemsReservCount: getBuscketReservItems(buscket),
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    actions: {
        ...ownProps.actions,
        searchBooks: bindActionCreators(searchBooksActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
