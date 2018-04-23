import React from "react";
import * as styles from "./styles";

export const SimpleText = ({ children, ...restProps }) => (
  <styles.SimpleText {...restProps}>{children}</styles.SimpleText>
);
export const BoldText = ({ children, ...restProps }) => (
    <styles.Bolded>
      <styles.SimpleText {...restProps} >{children}</styles.SimpleText>
    </styles.Bolded>
);
export const ColoredText = ({ children, ...restProps }) => (
    <styles.Colored>
      <styles.SimpleText {...restProps} >{children}</styles.SimpleText>
    </styles.Colored>
);
export const UnderlinedText = ({ children, ...restProps }) => (
    <styles.Underlined>
      <styles.SimpleText {...restProps} >{children}</styles.SimpleText>
    </styles.Underlined>
);
export const ColoredBoldText = ({ children, ...restProps }) => (
    <styles.Bolded>
      <styles.Colored>
        <styles.SimpleText {...restProps} >{children}</styles.SimpleText>
      </styles.Colored>
    </styles.Bolded>
);
export const GrayText = ({ children, ...restProps }) => (
      <styles.GrayColored>
        <styles.SimpleText {...restProps} >{children}</styles.SimpleText>
      </styles.GrayColored>
);
