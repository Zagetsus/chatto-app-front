import React from 'react';
import {
    Button,
    ButtonBack,
    Container,
    Content,
    Infos,
    InfosContent, InfoText,
    InfoTitle,
    Name,
    ProfileIMG,
    ProfileInfo,
    Status
} from "./styles";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {ReactComponent as Block} from "../../../../assets/svg/icons/block.svg";
import {ReactComponent as Trash} from "../../../../assets/svg/icons/trash.svg";

interface Props {
    close: () => void
};

const FriendProfile: React.FC<Props> = ({close}) => {
    return (
        <Container>
            <ButtonBack onClick={close}>
                <ArrowBackIosNewIcon style={{marginRight: 12}} htmlColor={"#00A7B1"}/>
                VOLTAR
            </ButtonBack>
            <Content>
                <ProfileInfo>
                    <ProfileIMG/>
                    <Name>Bruno</Name>
                    <Status>Ocupado</Status>
                </ProfileInfo>

                <Infos>
                    <InfosContent>
                        <InfoTitle>Nickname</InfoTitle>
                        <InfoText>brunoengenheiro8</InfoText>
                    </InfosContent>
                    <InfosContent>
                        <InfoTitle>Celular</InfoTitle>
                        <InfoText>+ 55 11 9 3567-9089</InfoText>
                    </InfosContent>
                    <InfosContent>
                        <InfoTitle>E-mail</InfoTitle>
                        <InfoText>brunoeng@gmail.com</InfoText>
                    </InfosContent>
                    <InfosContent>
                        <InfoTitle>Status</InfoTitle>
                        <InfoText>Ocupado</InfoText>
                    </InfosContent>
                </Infos>

                    <Button>
                        <Block />
                        Bloquear contato
                    </Button>
                    <Button>
                        <Trash />
                        Excluir contato
                    </Button>
            </Content>
        </Container>
    );
};

export default FriendProfile;
