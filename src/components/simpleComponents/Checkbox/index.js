import React, {Component} from "react";
import * as styles from "./styles";
import PropTypes from "prop-types";
import {SimpleText} from "../../simpleComponents/Text";

const checkboxNonChecked = require("../../../assets/images/checkbox.png");
const checkboxChecked = require("../../../assets/images/checkbox-selected.png");


const CheckboxComponent = ({isChecked, onClick, labelText}) =>(
    <styles.CheckboxWrapper onClick = {() =>{onClick(!isChecked)}}>  {/* нужно инвертирование, т.к. state предыдущий*/}
        <styles.CheckboxImage src = {isChecked ? checkboxChecked : checkboxNonChecked}/>
        {labelText && <SimpleText>{labelText}</SimpleText>}
    </styles.CheckboxWrapper>
);


class Checkbox extends  Component {
    constructor (props){
       super(props);
       this.state = {
           isChecked: false
       }
    }
    toggleChecked(){
        this.setState({
            isChecked: !this.state.isChecked
        });
    }
    render (){
        return(<CheckboxComponent {...this.state}
                                  onClick = {(e)=> {
                                      this.props.onClick(e);
                                      this.toggleChecked();
                                  }}
                                  labelText = {this.props.labelText}/>)
    }
}
Checkbox.propTypes = {
    onClick: PropTypes.func,
    labelText:PropTypes.string
};
export default Checkbox;
