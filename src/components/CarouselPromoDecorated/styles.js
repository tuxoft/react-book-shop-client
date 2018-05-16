import styled from "styled-components";

export const ArrowWrapper = styled.div`
    display: none;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 20px 20px;
  height: 380px;
  width: 1000px;
  align-items: center;
  justify-content: center;
  &:hover { 
        ${ArrowWrapper} {
            display: block !important;            
        }
    }
`;
