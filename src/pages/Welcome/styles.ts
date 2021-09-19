import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
 
`
export const Content = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  height: 100%;
  
  @media(min-width: 1279px){
    max-width: 541px;
  }
`

export const TitleGroup = styled.div`
  margin-bottom: 103px;
`

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 400;
  color: var(--primary);
`

export const Text = styled.p`
  font-size: 18px;
  color: var(--grey-dark);
`

export const ButtonGroup = styled.div`
  margin-bottom: 56px;
  
  > button:first-child {
    margin-bottom: 16px;
  }
`

export const ForgotPassword = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  
  color: var(--grey);
  margin: 7px auto 0;
`;

export const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  
`

export const Divider = styled.div`
  flex: 1;
  height: 1px;
  background-color: #C8C8C8;

  @media(min-width: 1279px){
    max-width: 107px;
  }
`


export const DividerText = styled.div`
  padding: 0 12px;
  color: #090909;
  font-size: 14px;
  line-height: 18px;
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  > svg:first-child {
    margin-right: 48px;
  }
`;
