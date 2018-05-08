import React from "react";
import * as styles from "./styles";

const SearchInput = (props) => {
    const FaSearch = props.picture;
    return (
    <styles.InputWrapper {...props}>
        {(props.leftPicture && FaSearch) ?
            <styles.Button onClick={props.leftPictureClick} leftSide {...props}>
                <FaSearch/>
            </styles.Button> : null}

        <styles.Input
            {...props.inputProps}
            {...props}
        />
        {(props.rightPicture && FaSearch) ?
            <styles.Button onClick={props.rightPictureClick} rightSide {...props}>
                <FaSearch/>
            </styles.Button> : null}
    </styles.InputWrapper>)
};

export default SearchInput;
