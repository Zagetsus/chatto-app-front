import React from "react";
import { Container, MenuContainer, MessageContainer, Wrapper } from "./styles";
import Menu from "./components/Menu";
import Conversation from "./components/Conversation";
import Header from "../../components/Header";

const Chat = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <MenuContainer>
          <Menu />
        </MenuContainer>
        <MessageContainer>
          <Conversation />
        </MessageContainer>
      </Container>
    </Wrapper>
  );
};

export default Chat;
