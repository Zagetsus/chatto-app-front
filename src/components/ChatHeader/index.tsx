import React from 'react';
import {Container, Avatar, FlexCenter, HeaderName, HeaderStatus, HeaderButton} from "./styles";

interface Props {
    name: string;
    status: string;

    setProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatHeader: React.FC<Props> = ({name, status, setProfile}) => {
  return (
      <Container>
          <FlexCenter>
              <Avatar/>
              <div>
                  <HeaderName>{name}</HeaderName>
                  <HeaderStatus>{status}</HeaderStatus>
              </div>
          </FlexCenter>
          <HeaderButton onClick={() => setProfile(true)}>
              VER PERFIL
          </HeaderButton>
      </Container>
  );
};

export default ChatHeader;
