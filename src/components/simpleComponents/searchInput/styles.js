import styled from "styled-components";
import InputComponent from "../Input";
import {FaSearch} from 'react-icons/lib/fa/';

export const InputWrapper = styled.div`
  width: 500px;
  border: 1px solid #b2b2b2;
  border-radius: 3px;
`;

export const Input = styled.input.attrs({ type: "text" })`
  background: url(react-icons/lib/fa/search) no-repeat 80% 50%;
  border: 0;
  padding: 0 10px;  
  height: 35px;
`;


export const ControlLabel = styled.span`
  margin-right: 10px;
`;

