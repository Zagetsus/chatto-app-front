import styled from "styled-components";

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

export const MessageContainer = styled.div`
  margin-top: 36px;
`;

export const MessageContent = styled.div`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
