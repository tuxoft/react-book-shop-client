import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withLastLocation } from "react-router-last-location";
import * as searchBooksActions from "../../store/searchBooks/actions";
import * as booksActions from "../../store/books/actions";
import HeaderBody from "../../components/Header";
import { getSearchValue } from "../../store/searchBooks/selectors";
import { getBuscketItems, getBuscketReservItems } from "../../store/bucket/selectors";

class Header extends Component {

  onChangeText = (val) => {
      console.log(val.target.value);
      this.props.actions.searchBooks.setSearchValue(val.target.value);
  };

    onSearch = () => {
        console.log(this.props.searchValue);
        this.props.history.push("/search/"+this.props.searchValue);
    };

  render() {
    return (
        <HeaderBody
            {...this.state}
            {...this.props}
            email = {this.props.email}
            menuItems={
                [
                    {
                        head: "Книги",
                        subItems: [{
                            name: "Жанр",
                            links: [
                              {
                                title: "Художественная литература",
                                link: "/"
                              },
                              {
                                title: "Фантастика",
                                link: "/"
                              }
                            ]
                        }, {
                            name: "Подборки",
                            links: []
                        }]
                    },
                    {head: "Канцтовары"},
                    {head: "Сувениры"}
                ]
            }
            onSearch={this.onSearch}
            onChangeSearch = {this.onChangeText}
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
        books: bindActionCreators(booksActions, dispatch),
        searchBooks: bindActionCreators(searchBooksActions, dispatch)
    },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(Header));
