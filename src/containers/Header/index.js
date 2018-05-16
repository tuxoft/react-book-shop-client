import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withLastLocation } from "react-router-last-location";
import * as searchBooksActions from "../../store/searchBooks/actions";
import * as booksActions from "../../store/books/actions";
import * as contentActions from "../../store/content/actions";
import * as cartActions from "../../store/bucket/actions";
import HeaderBody from "../../components/Header";
import { getSearchValue } from "../../store/searchBooks/selectors";
import { getCartItemsCount } from "../../store/bucket/selectors";
import * as contentSelectors from "../../store/content/selectors";

class Header extends Component {

  componentDidMount() {
    this.props.actions.content.fetchMenu();
      this.props.actions.cart.getCart();
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

const mapStateToProps = ({ searchBooks, buscket, content }) => ({
  searchValue: getSearchValue(searchBooks),
  boxItemsCount: getCartItemsCount(buscket),
  menu: contentSelectors.getMenuTop(content)
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    actions: {
        ...ownProps.actions,
        books: bindActionCreators(booksActions, dispatch),
        searchBooks: bindActionCreators(searchBooksActions, dispatch),
        cart: bindActionCreators(cartActions, dispatch),
        content: bindActionCreators(contentActions, dispatch)
    },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(Header));
