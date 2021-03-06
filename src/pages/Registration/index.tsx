import React, {useCallback} from 'react';
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
import useForm from "../../hooks/useForm";
import {api} from "../../services/api";
import {useToast} from "../../hooks/useToast";
import {handleErrors} from "../../helpers/utils";
import {useAuth} from "../../hooks/useAuth";

const Registration: React.FC = () => {
    const {form, error, onChange, setError, validateForm, onBlur} = useForm({
        name: {
            type: 'fullname',
            required: true,
        },
        email: {
            type: 'email',
            required: true,
        },
        username: {
            type: 'username',
            required: true,
        },
        password: {
            type: 'password',
            required: true,
        },
        confirmPassword: {
            type: 'password',
            required: true,
        }
    });

    const {toast} = useToast();
    const {signIn} = useAuth();

    const handleSubmit = useCallback(async (e) => {
        try {
            e.preventDefault();

            if (!validateForm()) {
                toast({
                    type: 'error',
                    description: 'Por favor, insira corretamente os seus dados.'
                })
                return false;
            }

            if (form.password !== form.confirmPassword) {
                error.confirmPassword = 'As senhas precisam ser iguais';
                setError({...error});

                toast({
                    type: 'error',
                    description: 'Por favor, insira corretamente os seus dados.'
                })

                return false;
            }

            const {email, name, username, password} = form;

            await api.post('users', {
                username,
                name,
                email,
                password
            });

            toast({
                type: 'success',
                description: 'Usu??rio cadastrado com sucesso'
            })

            signIn({username, password})

        } catch (e: any) {
            setError(handleErrors(e, error));
        }
    }, [error, form, setError, signIn, toast, validateForm]);

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

                <Form onSubmit={handleSubmit}>
                    <TitleContainer>
                        <Title>Criar uma conta</Title>
                        <Subtitle>Preencha os dados abaixo para come??ar.</Subtitle>
                    </TitleContainer>

                    <InputContainer>
                        <Input
                            value={form.username}
                            onChange={(e) => onChange('username', e)}
                            onBlur={() => onBlur('username')}
                            typeAlert={error.username ? "error" : undefined}
                            alertMessage={error.username ?? ""}
                            id={"username"}
                            description="Este ser?? seu login de acesso"
                            label={'Nome de Usu??rio'}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            value={form.name}
                            onChange={(e) => onChange('name', e)}
                            onBlur={() => onBlur('name')}
                            typeAlert={error.name ? "error" : undefined}
                            alertMessage={error.name ?? ""}
                            id={"fullname"}
                            label={'Nome Completo'}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            value={form.email}
                            onChange={(e) => onChange("email", e)}
                            onBlur={() => onBlur("email")}
                            typeAlert={error.email ? "error" : undefined}
                            alertMessage={error.email ?? ""}
                            id={"email"}
                            type="email"
                            description="Digite seu melhor e-mail"
                            label={'E-mail'}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            value={form.password}
                            onChange={(e) => onChange("password", e)}
                            onBlur={() => onBlur("password")}
                            typeAlert={error.password ? "error" : undefined}
                            alertMessage={error.password ?? ""}
                            id={"password"}
                            type="password"
                            label={'Senha'}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            value={form.confirmPassword}
                            onChange={(e) => onChange("confirmPassword", e)}
                            onBlur={() => onBlur("confirmPassword")}
                            typeAlert={error.confirmPassword ? "error" : undefined}
                            alertMessage={error.confirmPassword ?? ""}
                            id={"confirmPassword"}
                            type="password"
                            label={'Confirme sua senha'}
                        />
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
