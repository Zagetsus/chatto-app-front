import React, {useEffect} from 'react';
import {
    AreaInputMessage,
    Avatar,
    ChatHeader,
    Container,
    Content,
    FlexCenter,
    HeaderButton,
    HeaderName,
    HeaderStatus, InputMessage,
    MessageContainer
} from "./styles";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import HeaderMobile from "../../../../components/HeaderMobile";
import Input from "../../../../components/Input";

interface Props {
    close: () => void;
}

const Conversation: React.FC<Props> = ({close}) => {
    return (
        <Container>
            <HeaderMobile close={close}/>
            <Content>
                <ChatHeader>
                    <FlexCenter>
                        <Avatar/>
                        <div>
                            <HeaderName>Natália</HeaderName>
                            <HeaderStatus>Estudante</HeaderStatus>
                        </div>
                    </FlexCenter>

                    <HeaderButton>
                        VER PERFIL
                        <ArrowForwardIosOutlinedIcon
                            style={{marginLeft: 10}}
                            htmlColor={"var(--primary)"}
                            fontSize={"small"}
                        />
                    </HeaderButton>
                </ChatHeader>
                <Input label={"Buscar nesta conversa"}/>

                <MessageContainer>

                </MessageContainer>
            </Content>

            <AreaInputMessage>
                <InputMessage/>
            </AreaInputMessage>
        </Container>
    );
};

export default Conversation;
