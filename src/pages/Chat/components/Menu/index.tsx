import React, {useState} from 'react';
import {
    ButtonModal,
    Container,
    Content,
    MessageContainer,
    ModalAdd,
    ModalContent, ModalMessage,
    ModalTitle,
    StoryContainer,
    Subtitle,
    Title
} from "./styles";
import Input from "../../../../components/Input";
import Avatar from "../../../../components/Avatar";
import {Slide} from "@mui/material";
import ConversationCard from "../../../../components/ConversationCard";
import Conversation from "../Conversation";
import useMedia from "../../../../hooks/useMedia";

const Menu: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [messageModal, setMessageModal] = useState(false)
    const mobile = useMedia("(max-width: 1279px");

    const handleMessage = () => {
        if(mobile) {
            setMessageModal(!messageModal)
        }
        console.log("entrou")
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

            <ModalAdd
                open={open}
                onClose={() => setOpen(false)}
            >
                <Slide in={open} direction="up">
                    <ModalContent>
                        <ModalTitle>Adicione um contato</ModalTitle>

                        <Input description="Digite o nome de usuário ou e-mail do contato" label="ID do contato"/>

                        <ButtonModal expand>Adicionar aos meus contatos</ButtonModal>
                    </ModalContent>
                </Slide>
            </ModalAdd>

            <ModalMessage
                open={messageModal}
                onClose={() => setMessageModal(false)}
            >
                <Slide in={messageModal} direction={"left"}>
                    <div>
                        <Conversation close={() => setMessageModal(false)}/>
                    </div>
                </Slide>
            </ModalMessage>
        </Container>
    );
};

export default Menu;
