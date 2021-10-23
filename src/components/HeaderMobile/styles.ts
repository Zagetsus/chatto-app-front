import styled from "styled-components";
import {ReactComponent as LogoExtends} from "../../assets/svg/logo-extends.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 50px;
  background: #FFFFFF;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05), inset 0px 2px 2px rgba(0, 0, 0, 0.01);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  max-width: var(--container);
  width: 100%;
  margin: 0 auto;

`;

export const Logo = styled(LogoExtends)`
  width: 84.18px;
  height: 33.17px;
`;
