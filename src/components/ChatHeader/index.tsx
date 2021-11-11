import React from 'react';
import {Container, Avatar, FlexCenter, HeaderName, HeaderStatus} from "./styles";

interface Props {
    name: string;
    status: string;
}

const ChatHeader: React.FC<Props> = ({name, status}) => {
  return (
      <Container>
          <FlexCenter>
              <Avatar/>
              <div>
                  <HeaderName>{name}</HeaderName>
                  <HeaderStatus>{status}</HeaderStatus>
              </div>
          </FlexCenter>
      </Container>
  );
};

export default ChatHeader;
