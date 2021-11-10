import React, {useEffect, useRef, useState} from 'react';
import {
    AreaInputMessage,
    Avatar, ButtonMessage,
    ChatHeader,
    Container,
    Content,
    FlexCenter,
    HeaderName, HeaderPage,
    HeaderStatus, InputMessage,
    MessageContainer, ModalProfile
} from "./styles";
import HeaderMobile from "../../../../components/HeaderMobile";
import Message from "../../../../components/Message";
import {Slide} from "@mui/material";
import FriendProfile from "../FriendProfile";

interface Props {
    close?: () => void;
}

const Conversation: React.FC<Props> = ({close}) => {
    const [modalProfile, setModalProfile] = useState(false);
    const [match, setMatch] = useState<number>(0);

    const messageRef = useRef<any>(null)

    const scrollToBottom = () => {
        messageRef.current.scrollTop = messageRef.current.scrollHeight;

    }

    useEffect(scrollToBottom, []);

    useEffect(() => {
        function changeMatch() {
            setMatch(window.innerHeight);
        }

        changeMatch();

        window.addEventListener('resize', changeMatch);
        return () => {
            window.removeEventListener('resize', changeMatch);
        };
    }, []);


    return (
        <Container height={match}>
            <HeaderPage>
                <HeaderMobile close={close}/>
            </HeaderPage>
            <Content>
                <ChatHeader>
                    <FlexCenter>
                        <Avatar/>
                        <div>
                            <HeaderName>Natália</HeaderName>
                            <HeaderStatus>Estudante</HeaderStatus>
                        </div>
                    </FlexCenter>
                </ChatHeader>
                {/*<Input label={"Buscar nesta conversa"}/>*/}
            </Content>

            <MessageContainer ref={messageRef}>
                <Content>
                    <Message
                        hours={"10:55"}
                        message={"Olá, meu nome é Natália, estou interessada no anúncio de venda do carro. Com quem eu falo?"}
                    />
                    <Message
                        hours={"11:00"}
                        message={"Boa tarde, você viu o anúncio no site da Webmotors?"}
                        owner
                    />
                    <Message
                        hours={"11:10"}
                        message={"Sim, lá mesmo."}
                    />
                    <Message
                        hours={"11:11"}
                        message={"Quero saber se a documentação está regularizada."}
                    />
                    <Message
                        hours={"11:11"}
                        message={"Está sim, sem multas, IPVA pago e sem danos. Quer agendar para ver o veículo?."}
                        owner
                    />

                    <Message
                        hours={"11:15"}
                        message={"Vamos agendar."}
                    />
                </Content>
            </MessageContainer>


            <AreaInputMessage>
                <InputMessage/>
                <ButtonMessage>Enviar</ButtonMessage>
            </AreaInputMessage>

            <ModalProfile
                onClose={() => setModalProfile(false)}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                open={modalProfile}
            >
                <Slide>
                    <>
                        <FriendProfile close={() => setModalProfile(false)}/>
                    </>
                </Slide>
            </ModalProfile>
        </Container>
    );
};

export default Conversation;
