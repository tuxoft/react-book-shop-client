import styled from "styled-components";

export const Button = styled.button.attrs({ type: "button" })`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.GRAY_COLOR};
  background-color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: auto 0;
`;
