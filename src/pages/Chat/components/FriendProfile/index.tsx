import React, {useCallback, useEffect, useState} from 'react';
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
import {api} from "../../../../services/api";

interface Props {
    close: () => void;
    username: string;
}

const FriendProfile: React.FC<Props> = ({close, username}) => {
    const [profile, setProfile] = useState<any>({});

    const getProfile = useCallback(async () => {
      try {
          const { data } = await api.get(`/users/${username}`)
          setProfile(data)
      } catch (e) {

      }
    }, [username]);

    useEffect(() => {
      getProfile().then();
        // eslint-disable-next-line
    }, [username]);

    return (
        <Container>
            <ButtonBack onClick={close}>
                <ArrowBackIosNewIcon style={{marginRight: 12}} htmlColor={"#00A7B1"}/>
                VOLTAR
            </ButtonBack>
            <Content>
                <ProfileInfo>
                    <ProfileIMG/>
                    <Name>{profile.name}</Name>
                    <Status>{profile.status}</Status>
                </ProfileInfo>

                <Infos>
                    <InfosContent>
                        <InfoTitle>Nickname</InfoTitle>
                        <InfoText>{profile.username}</InfoText>
                    </InfosContent>
                    <InfosContent>
                        <InfoTitle>Celular</InfoTitle>
                        <InfoText>{profile.phone}</InfoText>
                    </InfosContent>
                    <InfosContent>
                        <InfoTitle>E-mail</InfoTitle>
                        <InfoText>{profile.email}</InfoText>
                    </InfosContent>
                    <InfosContent>
                        <InfoTitle>Status</InfoTitle>
                        <InfoText>{profile.status}</InfoText>
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
