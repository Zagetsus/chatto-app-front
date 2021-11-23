import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
    AreaInputMessage,
    ButtonMessage,
    Container,
    Content, Empty,
    InputMessage,
    MessageContainer
} from "./styles";
import HeaderMobile from "../../../../components/HeaderMobile";
import Message from "../../../../components/Message";
import ChatHeader from '../../../../components/ChatHeader';
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import {api} from "../../../../services/api";
import {useToast} from "../../../../hooks/useToast";

interface Props {
    close?: () => void;
    username: string;
    setProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const Conversation: React.FC<Props> = ({close, username, setProfile}) => {
    const [info, setInfo] = useState<any>();
    const [messageValue, setMessageValue] = useState('');
    const messageRef = useRef<any>(null);

    const {height} = useWindowDimensions();
    const {toast} = useToast();

    const getMessages = useCallback(async () => {
        try {
            const {data} = await api.get(`messages/${username}`);
            setInfo(data)
        } catch (e) {
            toast({
                type: 'error',
                description: 'Ocorreu um erro inesperado!'
            })
        }
    }, [toast, username]);

    const setMessage = useCallback(async (e) => {
        try {
            e.preventDefault()
            await api.post('messages', {
                to_id: info.id,
                body: messageValue,
            });

            setMessageValue('');
        } catch (e) {

        }
    }, [info, messageValue]);

    const scrollToBottom = () => {
        messageRef.current.scrollTop = messageRef.current.scrollHeight;

    }

    useEffect(() => {
        if (!info) return;
        scrollToBottom()

    }, [info]);

    useEffect(() => {
        if (!username) return;

        getMessages().then()

        // eslint-disable-next-line
    }, [username]);

    return (
        <Container height={height}>
            <HeaderMobile close={close}/>
            {
                info &&
                <Content>
                    <ChatHeader name={info.name} status={"Estudante"} setProfile={setProfile}/>
                </Content>
            }

            {
                info &&
                <MessageContainer ref={messageRef}>
                    <Content>
                        {info.messages.map((item: any, key: number) => (
                            <Message
                                key={key}
                                hours={item.hours}
                                message={item.body}
                                owner={item.owner}
                            />
                        ))
                        }
                    </Content>
                </MessageContainer>
            }

            {
                !info &&
                <Empty>
                    <p>Selecione um contato para começar a conversar.</p>
                </Empty>
            }


            <AreaInputMessage onSubmit={setMessage}>
                <InputMessage disabled={!username} value={messageValue}
                              onChange={(e) => setMessageValue(e.target.value)}/>
                <ButtonMessage disabled={!messageValue || !username} type={'submit'}>Enviar</ButtonMessage>
            </AreaInputMessage>

        </Container>
    );
};

export default Conversation;
