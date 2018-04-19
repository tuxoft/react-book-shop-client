import React, {Component} from "react";
import * as styles from "./styles";

import {SimpleText} from "../../simpleComponents/Text";

const checkboxNonChecked = require("../../../assets/images/checkbox.png");
const checkboxChecked = require("../../../assets/images/checkbox-selected.png");


const CheckboxComponent = ({isChecked, onClick, labelText}) =>(
    <styles.CheckboxWrapper onClick = {() =>{onClick(!isChecked)}}>  {/* нужно инвертирование, т.к. state предыдущий*/}
        <styles.CheckboxImage src = {isChecked ? checkboxChecked : checkboxNonChecked}/>
        <SimpleText>{labelText}</SimpleText>

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

export default Checkbox;
