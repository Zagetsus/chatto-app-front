import styled from "styled-components";
import {Modal} from "@mui/material";
import Button from "../../Button";

export const ModalAdd = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  @media(min-width: 607px){
    align-items: center;
    justify-content: center;
  }
`

export const ModalContent = styled.form`
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