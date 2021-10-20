import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px;
`;

export const ProfileIMG = styled.div`
  min-width: 52px;
  min-height: 52px;
  border-radius: 50%;
  background: #E9E9E9;
  margin-right: 12px;
`;

export const ConversationInfo = styled.div`
  flex: 1;
  margin-right: 4px;
  height: 60px;
`;

export const Name = styled.h3`
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  color: #09101D;
  opacity: 0.8;
`;

export const Message = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #09101D;
  opacity: 0.8;
`;

export const Hours = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  color: #5F5F5F;
  opacity: 0.8
`;
