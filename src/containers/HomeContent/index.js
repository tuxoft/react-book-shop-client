import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as contentActions from "../../store/content/actions";
import HomeBody from "../../components/Home";
import * as contentSelectors from "../../store/content/selectors";


class Home extends Component {

    componentDidMount() {
        this.props.actions.content.fetchPromoPictures();
        this.props.actions.content.fetchCategoryCarousels();
    }

    onInBox = (id) => {
        console.log("book add in box",this.props.id);
        //this.props.actions.bucket.addBookToItems(id);
    };

    render() {
        console.log("categoryCarousels", this.props.categoryCarousels);
        return (
            <HomeBody
                categoryCarousels={this.props.categoryCarousels}
                promoPictures={this.props.promoPictures}
                menu={this.props.menu}
            />
        );
    }
}

const mapStateToProps = ({ searchBooks, content }) => ({
    categoryCarousels: contentSelectors.getCategoryCarousels(content),
    promoPictures: contentSelectors.getPromoPictures(content)
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    actions: {
        ...ownProps.actions,
        content: bindActionCreators(contentActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
