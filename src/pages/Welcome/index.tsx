import React from 'react';
import {
    ButtonGroup,
    Content,
    Divider,
    DividerContainer,
    DividerText, ForgotPassword,
    SocialContainer,
    Text,
    Title,
    TitleGroup
} from "./styles";
import Button from "../../components/Button";
import {ReactComponent as Face} from '../../assets/svg/face.svg'
import {ReactComponent as Google} from '../../assets/svg/google.svg'
import {useNavigate} from "react-router-dom";

const Welcome: React.FC = () => {
    const navigate = useNavigate()

    return (
        <Content>
            <TitleGroup>
                <Title>Olá,</Title>
                <Text>
                    Faça login ou cria uma nova conta para começar.
                </Text>
            </TitleGroup>

            <ButtonGroup>
                <Button onClick={() => navigate('/cadastro')} outline expand>Criar conta</Button>
                <Button onClick={() => navigate('/login')} expand>Entrar</Button>
                <ForgotPassword to={''}>Esqueci minha senha</ForgotPassword>
            </ButtonGroup>

            <DividerContainer>
                <Divider/>
                <DividerText>Ou entre com:</DividerText>
                <Divider/>
            </DividerContainer>

            <SocialContainer>
                <Face />
                <Google />
            </SocialContainer>
        </Content>
    );
};

export default Welcome;
