import React  from 'react';
import {Container, ConversationInfo, Hours, Message, Name, ProfileIMG} from "./styles";

interface Props {
    name: string;
    message: string;
    hours: string;
    click: () => void;
}

const ConversationCard: React.FC<Props> = ({name, message, hours, click}) => {
  return (
      <Container onClick={click}>
        <ProfileIMG />
          <ConversationInfo>
              <Name>{name}</Name>
              <Message>{message}</Message>
          </ConversationInfo>
          <Hours>{hours}</Hours>
      </Container>
  );
};

export default ConversationCard;
