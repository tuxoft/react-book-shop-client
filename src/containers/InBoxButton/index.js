import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import styled from "styled-components";
import * as bucketActions from "../../store/bucket/actions";
import Button from "../../components/simpleComponents/Button";
import * as cartSelectors from "../../store/bucket/selectors";
import {Link} from "react-router-dom";

export const Control = styled(Button).attrs({ type: "button" })`
    height: 30px;
    background: #9bd53a;
    font-size: 14px;
    margin: 0 auto;
    min-width: 110px;
    white-space: nowrap;
    color: #fff;
    padding: 0 20px;
    display: block;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
`;

export const SimpleLink = styled((props) => <Link {...props} />)`
    text-decoration: none;
    height: 30px;
    background: #26a9e0;
    font-size: 14px;
    margin: 0 auto;
    min-width: 110px;
    white-space: nowrap;
    color: #fff;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
`;


class InBoxButton extends Component {

    onInBox = (bookId) => {
        console.log("book add in box", this.props.bookId);
        this.props.actions.bucket.addBookToCart({
            id: bookId,
            count: 1,
        });
    };

    render() {
        let items = this.props.cart.cartItemList? this.props.cart.cartItemList : [];
        if(items.find( item => item.book.id===this.props.bookId)){
            return (
                <SimpleLink to="/cart">
                    В корзине
                </SimpleLink>
            );
        }else{
            return (
                <Control onClick={()=>this.onInBox(this.props.bookId)}>
                    В корзину
                </Control>
            );
        }
    }
}

const mapStateToProps = ({buscket}) => ({
    cart: cartSelectors.getCart(buscket),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        bucket: bindActionCreators(bucketActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(InBoxButton);
