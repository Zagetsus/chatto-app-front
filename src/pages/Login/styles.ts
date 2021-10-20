import styled from "styled-components";

export const Container =  styled.section`
  padding-top: 64px;
  
  @media(min-width: 607px){
    padding-top: 180px;
  }
  
  @media(min-width: 1279px){
    padding-top: 103px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--container);
  margin: 0 auto;
  
  @media(min-width: 607px){
    max-width: 320px;
  }
`;

export const TitleContainer = styled.div`
  display: none;
  width: 100%;
  margin-bottom: 62px;
  
  h1 {
    font-size: 30px;
    line-height: 20px;
    color: var(--primary);
    opacity: 0.8;
    width: 100%;
    margin-bottom: 12px;

    @media(min-width: 607px){
      margin-bottom: 14px;
    }
  }
  
  h2 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
    color: #090909;

    opacity: 0.8;
  }
  
  @media(min-width: 607px) {
    display: block;
  }
`

export const LogoContainer = styled.div`
  margin-bottom: 64px;
  
  @media(min-width: 607px){
    display: none;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 7px;
`;

export const ForgotPassword = styled.p`
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  color: var(--grey);
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 62px 0 36px;
`

export const Form = styled.form`
  width: 100%;
`;
