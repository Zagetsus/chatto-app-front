import React, { useState } from 'react';
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
import ModalAddFriends from "../../../../components/Modals/ModalAddFriends";
import {IFriends} from "../../../../interfaces/friends";

interface Props {
    friends: IFriends[];
    handleMessage: any;
}

const Menu: React.FC<Props> = ({friends, handleMessage}) => {
    const [open, setOpen] = useState(false)

    return (
        <Container>
            <Content>
                <Title>Conversas</Title>

                <Input label="Busca"/>

                <StoryContainer>
                    <Avatar click={() => setOpen(true)} title="+ Adicionar contato" add/>

                    {
                        friends.map((item, key) =>
                            <Avatar key={key} click={() => handleMessage(item.username)} title={item.name}/>
                        )
                    }

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

            <ModalAddFriends open={open} setOpen={setOpen}/>
        </Container>
    );
};

export default Menu;
