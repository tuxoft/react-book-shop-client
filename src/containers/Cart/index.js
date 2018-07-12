import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as appActions from "../../store/app/actions";
import * as cartActions from "../../store/bucket/actions";
import CartComponet from "../../components/Cart";
import * as appSelectors from "../../store/app/selectors";
import * as cartSelectors from "../../store/bucket/selectors";


class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedBooks: [],
        };
    }

    componentDidMount() {
        this.props.actions.cart.getCart(this.props.match.params.id);
        this.setState({
            selectedBooks: [],
        });
    }

    setBookCount = (id, count) => {
        console.log("setBookCount", id, count);
        if (count < 0) return;
        this.props.actions.cart.setBookInCart({
            id: id,
            count: count,
        });
    };

    removeBookFromCart = () => {
        console.log("removeBookFromCart", this.state.selectedBooks);
        let ids="";
        this.state.selectedBooks.forEach((id, indx) =>{
            if(indx>0){
                ids=ids+"&";
            }
            ids=ids+"ids="+id;
        });
        this.props.actions.cart.deleteBookFromCartAll({
            ids: ids,
        })
    };

    selectAll = () => {
        console.log("selectAll");
        this.setState({
            selectedBooks: (this.props.cart.cartItemList ? (this.props.cart.cartItemList.length !== this.state.selectedBooks.length ? this.props.cart.cartItemList.map((item, indx) => item.book.id) : [] ) : []),
        });
    };

    deselectAll = () => {
        console.log("deselectAll");
        this.setState({
            selectedBooks: []
        });
    }

    selectId = (id) => {
        console.log("selectId", id);
        let mass = this.state.selectedBooks.filter(item => item !== id);
        mass.push(id);
        this.setState({
            selectedBooks: mass
        });
    };

    checkoutOrder = () => {
      if(!this.props.authenticated){
        this.props.actions.app.authenticationLogin(this.props.keycloak, this.props.authenticated)
      } else {
        this.props.history.push("/order");
      }
    }

    render() {
        console.log("Cart", this.props.cart);
        return (
            <CartComponet
                {...this.state}
                {...this.props}
                block={this.props.match.params.block}
                setBookCount={this.setBookCount}
                removeBookFromCart={this.removeBookFromCart}
                selectId={this.selectId}
                selectAll={this.selectAll}
                deselectAll={this.deselectAll}
                checkoutOrder={this.checkoutOrder}
            />
        );
    }
}

const mapStateToProps = ({app, buscket}) => ({
    cart: cartSelectors.getCart(buscket),
    boxItemsCount: cartSelectors.getCartItemsCount(buscket),
    keycloak: appSelectors.getKeyckloak(app),
    authenticated: appSelectors.isAuthenticated(app),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        cart: bindActionCreators(cartActions, dispatch),
        app: bindActionCreators(appActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
