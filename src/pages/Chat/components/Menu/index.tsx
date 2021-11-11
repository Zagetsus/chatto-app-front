import React, {useState} from 'react';
import {
    Container,
    Content,
    MessageContainer,
    StoryContainer,
    Subtitle,
    Title
} from "./styles";
import Input from "../../../../components/Input";
import Avatar from "../../../../components/Avatar";
import ConversationCard from "../../../../components/ConversationCard";
import useMedia from "../../../../hooks/useMedia";
import ModalAddFriends from "../../../../components/Modals/ModalAddFriends";
import ModalConversation from "../../../../components/Modals/ModalConversation";

const Menu: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [messageModal, setMessageModal] = useState(false)
    const mobile = useMedia("(max-width: 1279px");

    const handleMessage = () => {
        if(mobile) {
            setMessageModal(!messageModal)
        }
    }
    return (
        <Container>
            <Content>
                <Title>Conversas</Title>

                <Input label="Busca"/>

                <StoryContainer>
                    <Avatar click={() => setOpen(true)} title="+ Adicionar contato" add/>
                    <Avatar click={() => setOpen(true)} title="Natália"/>
                </StoryContainer>

                <Subtitle>Recentes</Subtitle>

                <MessageContainer>
                    <ConversationCard click={handleMessage} name={"José Carlos"} message={"qual é a data de entrega?"}
                                      hours={"11:30"}/>
                    <ConversationCard click={handleMessage} name={"Natália"}
                                      message={"odeiooo segunda-feira... vamos deixar para outro dia"} hours={"11:30"}/>
                </MessageContainer>

                {/*<Empty>*/}
                {/*    <EmptyContact/>*/}
                {/*</Empty>*/}
            </Content>

            <ModalAddFriends open={open} setOpen={setOpen} />

            <ModalConversation open={messageModal} setOpen={setMessageModal}/>
        </Container>
    );
};

export default Menu;
