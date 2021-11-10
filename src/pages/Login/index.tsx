import React, {useCallback} from "react";
import Input from "../../components/Input";
import {
    ButtonContainer,
    Container,
    Content,
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
import useForm from "../../hooks/useForm";
import {useToast} from "../../hooks/useToast";
import {useAuth} from "../../hooks/useAuth";

const Login: React.FC = () => {
    const {form, error, onChange, validateForm, onBlur} = useForm({
        username: {
            type: 'username',
            required: true,
        },
        password: {
            type: 'password',
            required: true,
        }
    });

    const { toast } = useToast();
    const { signIn } = useAuth();

    const handleSubmit = useCallback((e) => {
      try {
          e.preventDefault()

          if (!validateForm()) {
              toast({
                  type: 'error',
                  description: 'Por favor, insira corretamente os seus dados.'
              })
              return false;
          }


          const {username, password} = form;

          signIn({username, password})
      } catch (e: any) {
          console.log(e);
      }
    }, [form, signIn, toast, validateForm]);

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

                <Form onSubmit={handleSubmit}>
                    <InputContainer>
                        <Input
                            value={form.username}
                            onChange={(e) => onChange("username", e)}
                            onBlur={() => onBlur("username")}
                            typeAlert={error.username ? 'error' : undefined }
                            alertMessage={error.username ?? ""}
                            id={"username"}
                            label={'Nome de Usuário'}
                        />
                    </InputContainer>

                    <InputContainer>
                        <Input
                            value={form.password}
                            onChange={(e) => onChange("password", e)}
                            onBlur={() => onBlur("password")}
                            typeAlert={error.password ? 'error' : undefined }
                            alertMessage={error.password ?? ""}
                            id={"password"}
                            type={'password'}
                            label={'Senha'}
                        />
                    </InputContainer>

                    <ButtonContainer>
                        <Button type={"submit"} expand>Entrar</Button>
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
