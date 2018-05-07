import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import styled from "styled-components";
import * as bucketActions from "../../store/bucket/actions";
import Button from "../../components/simpleComponents/Button";

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

class InBoxButton extends Component {

    onInBox = (bookId) => {
        console.log("book add in box", this.props.bookId);
        this.props.actions.bucket.addBookToItems(bookId);
    };

    render() {
        return (
            <Control onClick={()=>this.onInBox(this.props.bookId)}>
                В корзину
            </Control>
        );
    }
}

const mapStateToProps = ({bucket}) => ({
    bucket: bucket,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        bucket: bindActionCreators(bucketActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(InBoxButton);
