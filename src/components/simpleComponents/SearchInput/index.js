import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as styles from "./styles";

class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
          suggestionVisible: false,
        };
    }

    onFocus = () => {
        this.setState({suggestionVisible: true})
    };

    onBlur = () => {
        this.setState({suggestionVisible: false});
    };

    onLink = (url) => {
        this.props.history.push(url);
    };

    render() {
        const {...props} = this.props;
        const FaSearch = props.picture;
        return (
            <styles.InputWrapper
                {...props}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
            >
              {(props.leftPicture && FaSearch) ?
                <styles.Button onClick={props.leftPictureClick} leftSide {...props}>
                    <FaSearch/>
                </styles.Button> : null}

                <styles.Input
                  {...props.inputProps}
                  {...props}
                  onKeyPress={ (e) => {
                      switch (e.key) {
                        case 'Enter': this.props.rightPictureClick(); break;
                      }
                  }}
                />
              {(props.rightPicture && FaSearch) ?
                <styles.Button onClick={props.rightPictureClick} rightSide {...props}>
                    <FaSearch/>
                </styles.Button> : null}
              {this.state.suggestionVisible && props.suggestions &&
              <styles.SuggestionWrapper>
                  <styles.Row>
                      <styles.Column>
                          <styles.SuggestionItemGroupWrapper>
                              <styles.SuggestionItemGroupTitle>
                                  Найдено в товарах
                              </styles.SuggestionItemGroupTitle>
                            {props.suggestions.productItems &&  props.suggestions.productItems.map((item, indx) => (
                              <styles.SuggestionItemWrapper key={"productItem-"+indx}>
                                  <styles.SuggestionItemTitle onMouseDown={() => this.onLink(item.url)}>
                                    {item.title}
                                  </styles.SuggestionItemTitle>
                                  <styles.SuggestionItemDescriptionWrapper>
                                    {item.authors && item.authors.map((author, indx2) => (
                                      indx2>0
                                        ?<styles.SuggestionItemDescription key={"authorProductItem-"+indx2} onMouseDown={() => this.onLink(author.url)}>
                                          {", "}{author.title}
                                        </styles.SuggestionItemDescription>
                                        :<styles.SuggestionItemDescription key={"authorProductItem-"+indx2} onMouseDown={() => this.onLink(author.url)}>
                                          {author.title}
                                        </styles.SuggestionItemDescription>
                                    ))}
                                  </styles.SuggestionItemDescriptionWrapper>
                              </styles.SuggestionItemWrapper>
                            ))}
                          </styles.SuggestionItemGroupWrapper>
                      </styles.Column>
                      <styles.Column>
                          <styles.SuggestionItemGroupWrapper>
                              <styles.SuggestionItemGroupTitle>
                                  Авторы
                              </styles.SuggestionItemGroupTitle>
                            {props.suggestions.authorItems &&  props.suggestions.authorItems.map((item, indx) => (
                              <styles.SuggestionItemWrapper  key={"authorItem-"+indx}>
                                  <styles.SuggestionItemTitle onMouseDown={() => this.onLink(item.url)}>
                                    {item.title}
                                  </styles.SuggestionItemTitle>
                              </styles.SuggestionItemWrapper>
                            ))}
                          </styles.SuggestionItemGroupWrapper>
                          <styles.SuggestionItemGroupWrapper>
                              <styles.SuggestionItemGroupTitle>
                                  Серии
                              </styles.SuggestionItemGroupTitle>
                            {props.suggestions.seriesItems &&  props.suggestions.seriesItems.map((item, indx) => (
                              <styles.SuggestionItemWrapper  key={"seriesItem-"+indx}>
                                  <styles.SuggestionItemTitle onMouseDown={() => this.onLink(item.url)}>
                                    {item.title}
                                  </styles.SuggestionItemTitle>
                              </styles.SuggestionItemWrapper>
                            ))}
                          </styles.SuggestionItemGroupWrapper>
                      </styles.Column>
                  </styles.Row>
              </styles.SuggestionWrapper>
              }
            </styles.InputWrapper>
        )
    }
}

export default withRouter(SearchInput);
