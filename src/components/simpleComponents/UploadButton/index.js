import React, { Component } from "react";
import * as styles from "./styles";

class UploadButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };

    this.input = "";
  }

  triggerFileUpload = () => {
    this.input.click();
  };

  onDropFile = e => {
    if (typeof this.props.onChange === "function") {
      this.props.onChange(e);
    }
  };

  render() {
    return (
      <styles.Wrapper>
        <styles.Button blue onClick={this.triggerFileUpload}>
          {this.props.label}
          <styles.Input
            innerRef={input => (this.input = input)}
            onChange={this.onDropFile}
          />
        </styles.Button>
        {this.props.deleteButtonVisible&&<styles.Button blue onClick={this.props.onDelete}>
          {this.props.deleteLabel}
        </styles.Button>}

      </styles.Wrapper>
    );
  }
}

export default UploadButton;
