import styled from "styled-components";

export const Container = styled.section`
  display: flex
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 100vh;

  @media (min-width: 1279px) {
    max-width: 403px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05), inset 0px 2px 2px rgba(0, 0, 0, 0.01);
    z-index: 2;
  }
`;

export const MessageContainer = styled.div`
  flex: 1;
`;
