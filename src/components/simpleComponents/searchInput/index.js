import React from "react";
import * as styles from "./styles";
import {FaSearch} from 'react-icons/lib/fa/';

const SearchInput = (props) => (
    <styles.InputWrapper {...props}>
        <styles.Input
            {...props}
        />
        <FaSearch/>
    </styles.InputWrapper>
);

export default SearchInput;
