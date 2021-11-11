import React  from 'react';
import {Slide} from "@mui/material";
import {ButtonModal, ModalAdd, ModalContent, ModalTitle} from "./styles";
import Input from "../../Input";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddFriends: React.FC<Props> = ({open, setOpen}) => {
  return (
      <ModalAdd
          open={open}
          onClose={() => setOpen(false)}
      >
          <Slide in={open} direction="up">
              <ModalContent>
                  <ModalTitle>Adicione um contato</ModalTitle>

                  <Input description="Digite o nome de usuário ou e-mail do contato" label="ID do contato"/>

                  <ButtonModal expand>Adicionar aos meus contatos</ButtonModal>
              </ModalContent>
          </Slide>
      </ModalAdd>
  );
};

export default ModalAddFriends;
