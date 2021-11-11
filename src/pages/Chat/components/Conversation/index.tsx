import React, {useEffect, useRef, useState} from 'react';
import {
    AreaInputMessage,
    ButtonMessage,
    Container,
    Content,
    InputMessage,
    MessageContainer
} from "./styles";
import HeaderMobile from "../../../../components/HeaderMobile";
import Message from "../../../../components/Message";
import ChatHeader from '../../../../components/ChatHeader';
import ModalProfile from '../../../../components/Modals/ModalProfile';
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

interface Props {
    close?: () => void;
}

const Conversation: React.FC<Props> = ({close}) => {
    const [modalProfile, setModalProfile] = useState(false);

    const messageRef = useRef<any>(null);

    const { height } = useWindowDimensions();

    const scrollToBottom = () => {
        messageRef.current.scrollTop = messageRef.current.scrollHeight;

    }

    useEffect(scrollToBottom, []);


    return (
        <Container height={height}>
            <HeaderMobile close={close}/>
            <Content>
                <ChatHeader name={"Natália"} status={"Estudante"}/>
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

            <ModalProfile open={modalProfile} setOpen={setModalProfile}/>
        </Container>
    );
};

export default Conversation;
