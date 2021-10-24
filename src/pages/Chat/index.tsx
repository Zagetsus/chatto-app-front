import React from 'react';
import {Container, MenuContainer, MessageContainer} from "./styles";
import Menu from "./components/Menu";
import Conversation from "./components/Conversation";

const Chat = () => {
    return (
        <Container>
            <MenuContainer>
                <Menu/>
            </MenuContainer>

            <MessageContainer>
                <Conversation />
            </MessageContainer>
        </Container>
    );
};

export default Chat;
