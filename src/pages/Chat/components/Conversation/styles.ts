import styled from "styled-components";
import {Modal} from "@mui/material";
let intFrameHeight = window.innerHeight;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  background: var(--white);
  height: ${intFrameHeight + "px"};
  top: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width: var(--container);
  width: 100%;
  height: calc(100% - 350px);
  margin: 12px auto;
  flex: 1;
`;

export const ChatHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const HeaderName = styled.h3`
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  color: #09101D;
  opacity: 0.8;
`;

export const HeaderStatus = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #09101D;
  opacity: 0.8;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #E9E9E9;
  margin-right: 12px;
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 10px;
  line-height: 20px;
  
  color: #09101D;
  opacity: 0.8;
`;

export const MessageContainer = styled.div`
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AreaInputMessage = styled.div`
  width: 100%;
  height: 88px;
  background: #F4F4F4;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05), inset 1px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 16px 16px 0 0;
  padding: 21px 12px 26px 19px;
`

export const InputMessage = styled.input`
  width: 265px;
  height: 41px;
  background: var(--white);
  outline: none;

  padding: 10px;
  box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;


export const ModalProfile = styled(Modal)`

`;
