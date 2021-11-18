import React, {useCallback} from 'react';
import {Slide} from "@mui/material";
import {ButtonModal, ModalAdd, ModalContent, ModalTitle} from "./styles";
import Input from "../../Input";
import useForm from "../../../hooks/useForm";
import {useAuth} from "../../../hooks/useAuth";
import {api} from "../../../services/api";
import {handleErrors} from "../../../helpers/utils";
import {useToast} from "../../../hooks/useToast";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddFriends: React.FC<Props> = ({open, setOpen}) => {
    const {form, error, setError, onChange, validateForm, onBlur} = useForm({
        username: {
            type: 'username',
            required: true
        }
    })

    const { user } = useAuth();
    const { toast } = useToast();

    const handleSubmit = useCallback(async (e) => {
        try {
            e.preventDefault();

            if (!validateForm()) return false;

            await api.post('friends', {
                userId: user._id,
                friendUsername: form.username,
            });

            setOpen(false)

            toast({
                type: "success",
                description: "Usuário adicionado com sucesso!"
            })
        } catch (e: any) {
            if (e.response) {
                console.log(e.response.data)
                setError(handleErrors(e.response.data, error));
            }
        }
    }, [error, form.username, setError, setOpen, toast, user._id, validateForm]);

    return (
        <ModalAdd
            open={open}
            onClose={() => setOpen(false)}
        >
            <Slide in={open} direction="up">
                <ModalContent onSubmit={handleSubmit}>
                    <ModalTitle>Adicione um contato</ModalTitle>

                    <Input
                        value={form.username}
                        typeAlert={error.username ? 'error' : undefined}
                        alertMessage={error.username ?? ""}
                        onChange={(e) => onChange('username', e)}
                        onBlur={() => onBlur('username')}
                        description="Digite o nome de usuário ou e-mail do contato"
                        label="ID do contato"
                    />

                    <ButtonModal type="submit" expand>Adicionar aos meus contatos</ButtonModal>
                </ModalContent>
            </Slide>
        </ModalAdd>
    );
};

export default ModalAddFriends;
