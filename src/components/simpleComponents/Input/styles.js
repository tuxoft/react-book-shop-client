import styled from "styled-components";

export const Input = styled.input.attrs({ type: "text" })`
  height: var(--input-height);
  border-radius: var(--input-border-radius);
  border: 1px solid var(--input-border-color);
  padding: var(--input-padding);
  background-color: var(--input-background-color);
  background: var(--input-background);
  color: var(--input-color);
  font-size: var(--input-font-size);
  width: var(--input-width);

  ${props => props.small && `
    height: var(--input-height-small);
  `}
`;