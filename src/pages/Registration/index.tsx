import React from 'react';
import {
    ButtonContainer,
    Container,
    Content,
    Form,
    InputContainer,
    LogoContainer, LogoExtendsContainer, PromotionalContainer,
    Subtitle,
    Title, TitleContainer,
    TitleMob
} from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {Divider, DividerContainer, DividerText, SocialContainer} from "../Welcome/styles";
import {ReactComponent as Face} from "../../assets/svg/face.svg";
import {ReactComponent as Google} from "../../assets/svg/google.svg";
import {ReactComponent as Logo} from "../../assets/svg/logo.svg";
import {ReactComponent as LogoExtends} from "../../assets/svg/logo-extends.svg";
import {ReactComponent as Promotional} from "../../assets/svg/rafiki.svg";

const Registration: React.FC = () => {
    return (
        <Container>
            <Content>
                <PromotionalContainer>
                    <Promotional/>

                    <LogoExtendsContainer>
                        <LogoExtends/>
                    </LogoExtendsContainer>
                </PromotionalContainer>

                <LogoContainer>
                    <Logo/>
                </LogoContainer>

                <TitleMob>Crie sua conta</TitleMob>

                <Form>
                    <TitleContainer>
                        <Title>Criar uma conta</Title>
                        <Subtitle>Preencha os dados abaixo para começar.</Subtitle>
                    </TitleContainer>

                    <InputContainer>
                        <Input description="Este será seu login de acesso" label={'Nome de Usuário'}/>
                    </InputContainer>
                    <InputContainer>
                        <Input typeAlert="error" alertMessage="campo obrigatório" label={'Nome Completo'}/>
                    </InputContainer>
                    <InputContainer>
                        <Input type="email" description="Digite seu melhor e-mail" label={'E-mail'}/>
                    </InputContainer>
                    <InputContainer>
                        <Input type="password" label={'Senha'}/>
                    </InputContainer>
                    <InputContainer>
                        <Input type="password" label={'Confirme sua senha'}/>
                    </InputContainer>

                    <ButtonContainer>
                        <Button expand>Criar conta</Button>
                    </ButtonContainer>

                    <DividerContainer>
                        <Divider/>
                        <DividerText>Ou entre com:</DividerText>
                        <Divider/>
                    </DividerContainer>

                    <SocialContainer>
                        <Face/>
                        <Google/>
                    </SocialContainer>
                </Form>
            </Content>
        </Container>
    );
};

export default Registration;
