import styled from "styled-components";

interface Props {
    owner?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${({owner}) => owner ? "flex-end" : "flex-start"};
  margin-bottom: 24px;
`;

export const BubbleRow = styled.div<Props>`
  display: flex;
  justify-content: ${({owner}) => owner ? "flex-end" : "flex-start"};
`;


export const Bubble = styled.div<Props>`
  min-width: 60px;
  max-width: 247px;
  padding: 17px 17px 18px 22px;
  background: ${({owner}) => owner ? "#F0F0F0" : "rgba(0, 167, 177, 0.15)"};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: ${({owner}) => owner ? "24px 24px 0px 24px" : "24px 24px 24px 0px"};

`;

export const BubbleText = styled.p<Props>`
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: #214042;
  opacity: 0.8;
`;

export const Hours = styled.p`
  margin-top: 6px;
  font-weight: 600;
  font-size: 10px;
  line-height: 20px;
  color: #09101D;
  opacity: 0.8;
`;
