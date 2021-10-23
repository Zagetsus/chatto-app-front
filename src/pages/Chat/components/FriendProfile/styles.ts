import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white);
  padding: 65px 20px;
  overflow-y: auto;
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #09101D;

  opacity: 0.8;

  margin-bottom: 20px;
`;

export const Content = styled.div`
  max-width: 220px;
  margin: 0 auto;
`;

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 51px;
`;

export const ProfileIMG = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: #E9E9E9;
  margin-bottom: 16px;
`;

export const Name = styled.h3`
  font-weight: 800;
  font-size: 18px;
  line-height: 29px;
  color: #09101D;
  opacity: 0.8;
`;

export const Status = styled(Name)`
  font-weight: 600;
  font-size: 14px;
`;

export const Infos = styled.div`
  margin-bottom: 58px;
`;

export const InfosContent = styled.div`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const InfoTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 29px;
  color: #00A7B1;
`;

export const InfoText = styled(InfoTitle)`
  font-weight: 400;
  font-size: 14px;
  color: #09101D;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 29px;
  color: #09101D;
  opacity: 0.8;
  
  > svg {
    margin-right: 12px;
  }
`;
