import React from 'react';
import {Container, Person, Title} from "./styles";

const EmptyContact: React.FC = () => {
  return (
      <Container>
          <Person />
          <Title>Adicione novos contatos para começar a conversar.</Title>
      </Container>
  );
};

export default EmptyContact;
