import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as cartActions from "../../store/bucket/actions";
import CartComponet from "../../components/Cart";
import * as cartSelectors from "../../store/bucket/selectors";


class Cart extends Component {

    componentDidMount() {
        this.props.actions.cart.getCart(this.props.match.params.id);
    }

    setBookCount = (id, count) => {
        console.log("setBookCount", id, count);
        if(count<0)return;
        this.props.actions.cart.setBookInCart({
            id: id,
            count: count,
        });
    };

    render() {
        console.log("Cart", this.props.cart);
        return (
            <CartComponet
                {...this.state}
                {...this.props}
                block={this.props.match.params.block}
                setBookCount={this.setBookCount}
            />
        );
    }
}

const mapStateToProps = ({ buscket }) => ({
    cart: cartSelectors.getCart(buscket),
    boxItemsCount: cartSelectors.getCartItemsCount(buscket),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        cart: bindActionCreators(cartActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
