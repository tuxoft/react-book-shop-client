import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withLastLocation } from "react-router-last-location";
import * as searchBooksActions from "../../store/searchBooks/actions";
import * as booksActions from "../../store/books/actions";
import * as menuActions from "../../store/menu/actions";
import HeaderBody from "../../components/Header";
import { getSearchValue } from "../../store/searchBooks/selectors";
import { getBuscketItems, getBuscketReservItems } from "../../store/bucket/selectors";
import * as menuSelectors from "../../store/menu/selectors";

class Header extends Component {

  componentDidMount() {
    this.props.actions.menu.fetchMenu();
  }

  onChangeText = (val) => {
      console.log(val.target.value);
      this.props.actions.searchBooks.setSearchValue(val.target.value);
  };

    onSearch = () => {
        console.log(this.props.searchValue);
        this.props.history.push("/search/"+this.props.searchValue);
    };

  render() {
    console.log("this.props.menu",this.props.menu);
    return (
        <HeaderBody
            {...this.state}
            {...this.props}
            email = {this.props.email}
            menuItems={this.props.menu}
            onSearch={this.onSearch}
            onChangeSearch = {this.onChangeText}
        />
    );
  }
}

const mapStateToProps = ({ searchBooks, buscket, menu }) => ({
  searchValue: getSearchValue(searchBooks),
  boxItemsCount: getBuscketItems(buscket),
  boxItemsReservCount: getBuscketReservItems(buscket),
  menu: menuSelectors.getMenuTop(menu)
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    actions: {
        ...ownProps.actions,
        books: bindActionCreators(booksActions, dispatch),
        searchBooks: bindActionCreators(searchBooksActions, dispatch),
        menu: bindActionCreators(menuActions, dispatch)
    },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(Header));
