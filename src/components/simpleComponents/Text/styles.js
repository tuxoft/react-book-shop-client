import styled from "styled-components";

export const SimpleText = styled.div`
  font-size: 1rem;
`;
export const Bolded = styled.div`
  font-weight: 700;
`;
export const Colored = styled.div`
  text-color:${props=>props.theme.THEME_COLOR}
  
`;
export const Underlined = styled.div`
    border: border-bottom: 2px solid black;         
`;
export const GrayColored = styled.div`
    text-color: ${props=>props.theme.GRAY_COLOR};        
`;