import React from "react";
import * as styles from "./styles";

const SearchInput = (props) => {
    const FaSearch = props.picture;
    return (
    <styles.InputWrapper >
        {(props.leftPicture && FaSearch) ?
            <styles.Button onClick={props.leftPictureClick} leftSide>
                <FaSearch/>
            </styles.Button> : null}

        <styles.Input
            {...props.inputProps}
            leftPicture = {props.leftPicture}
            rightPicture = {props.rightPicture}
        />
        {(props.rightPicture && FaSearch) ?
            <styles.Button onClick={props.rightPictureClick} rightSide>
                <FaSearch/>
            </styles.Button> : null}
    </styles.InputWrapper>)
};

export default SearchInput;
