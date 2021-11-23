import styled from "styled-components";
interface Props {
    height: number
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  height: ${({height}) => `${height}px`};
  top: 0;
  background-color: #ffffff;
  
  @media(min-width:1279px){
    height: ${({height}) => `${height - 73}px`};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: var(--container);
  width: 100%;
  margin: 12px auto;
  flex: 1;

  @media (min-width: 1279px) {
    max-width: 100%;
    padding: 0 30px;
  }
`;

export const MessageContainer = styled.div`
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  
  @media(min-width: 1279px) {
    &::-webkit-scrollbar {
      display: initial;
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export const Empty = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  
  height: 100%;
  
  @media(min-width: 1279px){
    display: flex;
  }
`;

export const AreaInputMessage = styled.form`
  display: flex;
  align-items: center;
  
  width: 100%;
  height: 88px;
  background: #f4f4f4;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05),
    inset 1px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 16px 16px 0 0;
  padding: 21px 12px 26px 19px;
  
  @media(min-width: 1279px){
    padding: 26px 52px 36px 32px;
  }
  
`;

export const InputMessage = styled.input`
  width: 265px;
  height: 41px;
  background: var(--white);
  outline: none;

  padding: 10px;
  box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  
  @media(min-width: 1279px){
    width: 100%;
  }
`;

export const ButtonMessage = styled.button`
  height: 41px;
  background-color: var(--primary);
  margin-left: 32px;
  border-radius: 8px;
  color: var(--white);
  padding: 6px 26px;
  cursor: pointer;
  
  &:disabled {
    background: #B6B7BD;
    cursor: default;
  }
`
