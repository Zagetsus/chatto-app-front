import styled from "styled-components";

interface Props {
    add?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const AvatarContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 48.29px;
  height: 48.29px;
  
  background: #FBFBFB;
  border-radius: 50%;
  border: ${({ add }) => add ? "2.26px dashed var(--primary)" : "none"};
`;

export const AvatarName = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  color: #5F5F5F;
  opacity: 0.8;
  margin-top: 6px;
`;
