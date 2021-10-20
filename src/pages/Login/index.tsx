import React from "react";
import Input from "../../components/Input";
import {
    ButtonContainer,
    Container,
    Content,
    ForgotPassword,
    Form,
    InputContainer,
    LogoContainer,
    TitleContainer
} from "./styles";
import {ReactComponent as Logo} from "../../assets/svg/logo.svg";
import Button from "../../components/Button";
import {Divider, DividerContainer, DividerText, SocialContainer} from "../Welcome/styles";
import {ReactComponent as Face} from "../../assets/svg/face.svg";
import {ReactComponent as Google} from "../../assets/svg/google.svg";

const Login: React.FC = () => {
    return (
        <Container>
            <Content>
                <LogoContainer>
                    <Logo/>
                </LogoContainer>

                <TitleContainer>
                    <h1>Entrar</h1>
                    <h2>Faça o login para conversar.</h2>
                </TitleContainer>

                <Form>
                    <InputContainer>
                        <Input label={'Nome de Usuário'}/>
                    </InputContainer>

                    <InputContainer>
                        <Input type={'password'} label={'Senha'}/>
                    </InputContainer>

                    <ForgotPassword>Esqueci minha senha</ForgotPassword>

                    <ButtonContainer>
                        <Button expand>Entrar</Button>
                    </ButtonContainer>
                </Form>

                <DividerContainer>
                    <Divider/>
                    <DividerText>Ou entre com:</DividerText>
                    <Divider/>
                </DividerContainer>

                <SocialContainer>
                    <Face/>
                    <Google/>
                </SocialContainer>
            </Content>
        </Container>
    )
}

export default Login
