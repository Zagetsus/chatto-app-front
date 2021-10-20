import styled from "styled-components";

export const Container = styled.section`
  padding: 37px 0 69px;

  @media (min-width: 607px) {
    padding: 31px 0 57.56px;
  }

  @media (min-width: 607px) {
    padding: 66px 0 105px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--container);
  margin: 0 auto;

  @media (min-width: 607px) {
    max-width: 320px;
  }

  @media (min-width: 1279px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1054px;
  }
`;

export const PromotionalContainer = styled.div`
  display: none;

  > svg {
    width: 258.27px;
    height: 192.44px;
  }

  @media (min-width: 607px) {
    display: block;
  }

  @media (min-width: 1279px) {
    > svg {
      width: 587.73px;
      height: 550.66px;
    }
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 21.35px;

  @media (min-width: 607px) {
    display: none;
  }
`;

export const LogoExtendsContainer = styled.div`
  display: none;
  margin-top: 43px;

  @media (min-width: 1279px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleMob = styled.p`
  width: 100%;
  font-size: 13px;
  line-height: 18px;
  color: #090909;


  @media (min-width: 607px) {
    display: none;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 45px;

  @media (min-width: 607px) {
    margin-top: 47px;
  }

  @media (min-width: 1279px) {
    margin-top: 0;
    max-width: 320px;
  }
`;

export const TitleContainer = styled.div`
  display: none;
  margin-bottom: 36px;

  @media (min-width: 607px) {
    display: block;
  };
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
  line-height: 20px;
  opacity: 0.8;
  color: var(--primary);
  text-align: center;
  margin-bottom: 12px;
  
  @media(min-width: 1279px){
    text-align: left;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #090909;
  opacity: 0.8;
  margin-bottom: 12px;

  @media(min-width: 1279px){
    text-align: left;
  }
`;

export const InputContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 46px 0 19px;
`;
