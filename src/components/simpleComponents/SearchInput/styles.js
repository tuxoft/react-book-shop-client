import styled from "styled-components";


export const InputWrapper = styled.div`
  width: 500px;
  height: 40px;
  border-radius: 3px;
  ${props => (props.short) && `
    width: 200px;
  `}  
  ${props => (props.long) && `
    width: 100%;
  `}  
`;

export const Input = styled.input.attrs({ type: "text" })`
  background-color: #fff;
  border: 0px solid #b2b2b2;
  padding: 0 10px;  
  height: 40px;
  width: 80%;
  border-radius: 5px 0 0 5px;
   ${props => (props.leftPicture && !props.rightPicture) && `
    border-radius: 0 5px 5px 0;
  `}
  ${props => (!props.leftPicture && props.rightPicture) && `
    border-radius: 5px 0 0 5px;
  `}
  ${props => (!props.leftPicture && !props.rightPicture) && `
    border-radius: 5px 5px 5px 5px;
  `}
  ${props => (props.leftPicture && props.rightPicture) && `
    border-radius: 0 0 0 0;
  `}
  ${props => (props.border) && `
    box-shadow: 0 0 5px 0 rgba(0,0,0,.3);
  `}
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;  
  font-stretch: 100%;
  font-weight: 400;
`;

export const Button = styled.button`
  height: 40px;
  border: 0;  
  background-color: #1b75bb;
  color: #fff;
  width: 11%;
  ${props => props.rightSide && `
    border-radius: 0 5px 5px 0;
  `}
  ${props => props.leftSide && `
    border-radius: 5px 0 0 5px;
  `}
  ${props => (props.border) && `
    box-shadow: 0 0 5px 0 rgba(0,0,0,.3);
  `}
`;

export const ControlLabel = styled.span`
  margin-right: 10px;
`;

export const SuggestionWrapper = styled.div`
  left: -125px;
  padding: 25px;
  width: 700px;  
  border-radius: 7px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  z-index: 100;
  margin-top: 5px;
  position: relative;
  background-color: #ffffff;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const SuggestionItemGroupWrapper = styled.div`
  margin-right: 10px;
  margin-bottom: 20px;
`;

export const SuggestionItemGroupTitle = styled.p`
  font-size: 16px;
  color: #26a8df;
  margin: 0 0 10px 0;
  font-weight: 700;
  line-height: 1.2;
  font-family: 'PT Sans', sans-serif;
`;

export const SuggestionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SuggestionItemTitle = styled.div`
  font-weight: normal;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-size: 16px;
  color: #333333;
  line-height: 20px;
  cursor: pointer;
  &:hover {        
     color: #26A9E0;
  }
`;

export const SuggestionItemDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SuggestionItemDescription = styled.div`
  font-size: 14px;
  margin: 0;
  padding: 0;
  color: #808080;
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;
  &:hover {        
     color: #26A9E0;
  }
`;