import styled from "styled-components";
import {Modal} from "@mui/material";
import Button from "../../../../components/Button";

export const Container = styled.div`
  width: 100%;
  padding: 24px 0;
`;

export const Content = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  
  @media(min-width: 1279px){
    max-width: 100%;
    padding: 37px 40px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  color: var(--primary);
  opacity: 0.8;
  margin-bottom: 34px;
`;

export const StoryContainer = styled.div`
  display: flex;
  margin: 14px 0 36.21px;
  
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Subtitle = styled(Title)`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 0;
`;

export const Empty = styled.div`
  margin-top: 60px;
`;

export const ModalAdd = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  @media(min-width: 607px){
    align-items: center;
    justify-content: center;
  }
`

export const ModalContent = styled.div`
  background: var(--white);
  height: 350px;
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 24px 24px 0 0;
  padding: 69px 35px 0;
  outline: none;


  @media(min-width: 607px){
    width: 375px;
    border-radius: 24px;
  }
`

export const ModalTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  color: var(--primary);
  margin-bottom: 20px;
`;

export const ButtonModal = styled(Button)`
  margin-top: 64px;
`;

export const MessageContainer = styled.div`
  margin-top: 36px;
`;

export const MessageContent = styled.div`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const ModalMessage = styled(Modal)`
`
