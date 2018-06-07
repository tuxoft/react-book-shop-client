import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as cartActions from "../../store/bucket/actions";
import CartComponet from "../../components/Cart";
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

            />
        );
    }
}

const mapStateToProps = ({app, buscket}) => ({
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
