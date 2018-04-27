import styled from "styled-components";

export const ArrowWrapper = styled.div`
    display: none;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 700px;
  align-items: center;
  justify-content: center;
  &:hover { 
        ${ArrowWrapper} {
            display: block !important;            
        }
    }
`;
