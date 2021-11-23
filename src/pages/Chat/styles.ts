import styled from "styled-components";

interface Props {
    open: boolean;
}

export const Container = styled.section`
  display: flex;
`;

export const MenuContainer = styled.div`
  width: 100%;

  @media (min-width: 1279px) {
    max-width: 403px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05),
    inset 0px 2px 2px rgba(0, 0, 0, 0.01);
    z-index: 5;
  }
`;

export const MessageContainer = styled.div`
  display: none;
  flex: 1;
  @media (min-width: 1280px) {
    display: block;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05),
    inset 0px 2px 2px rgba(0, 0, 0, 0.01);
    z-index: 3;
  }
`;

export const OtherContainer = styled.div<Props>`
  display: none;
  max-width: 272px;
  width: ${({open}) => open ? '279px' : '0px' };
  max-height: calc(100vh - 73px);
  
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const Wrapper = styled.div``;
