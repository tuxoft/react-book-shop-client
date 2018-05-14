import React, {Component} from "react";
import * as styles from "./styles";
import PropTypes from "prop-types";
import {SimpleText} from "../../simpleComponents/Text";

const checkboxNonChecked = require("../../../assets/images/checkbox.png");
const checkboxChecked = require("../../../assets/images/checkbox-selected.png");


const CheckboxComponent = ({isChecked, isCheckedControl, isChecked2, onClick, labelText}) =>(
    <styles.CheckboxWrapper onClick = {() =>{onClick(!isChecked)}}>  {/* нужно инвертирование, т.к. state предыдущий*/}
        <styles.CheckboxImage src = {(isCheckedControl?isChecked:isChecked2) ? checkboxChecked : checkboxNonChecked}/>
        {labelText && <SimpleText>{labelText}</SimpleText>}
    </styles.CheckboxWrapper>
);


class Checkbox extends  Component {
    constructor (props){
       super(props);
       this.state = {
           isChecked2: false
       }
    }
    toggleChecked(){
        this.setState({
            isChecked2: !this.state.isChecked2
        });
    }
    render (){
        return(<CheckboxComponent {...this.state}
                                  onClick = {(e)=> {
                                      this.props.onClick(e);
                                      this.toggleChecked();
                                  }}
                                  labelText = {this.props.labelText}
                                  isChecked = {this.props.isChecked}
                                  isCheckedControl = {this.props.isCheckedControl}
        />)
    }
}
Checkbox.propTypes = {
    onClick: PropTypes.func,
    labelText:PropTypes.string
};
export default Checkbox;
