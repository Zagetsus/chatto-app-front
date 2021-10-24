import React from "react";
import {
  Container,
  LeftWrapper,
  LogoContainer,
  RightWrapper,
  CloseIcon,
  MinusIcon,
  PlusIcon,
  LogoIconExtends,
  SearchIcon,
  PersonCircleIcon,
  SettingsIcon,
} from "./styles";

export interface Props {
  isLogged?: boolean;
}
const Header: React.FC<Props> = ({ isLogged }) => {
  return (
    <Container>
      <LeftWrapper>
        <CloseIcon />
        <MinusIcon />
        <PlusIcon />
      </LeftWrapper>
      <LogoContainer>
        <LogoIconExtends />
      </LogoContainer>
      <RightWrapper>
        {isLogged && (
          <>
            <SearchIcon />
            <PersonCircleIcon />
            <SettingsIcon />
          </>
        )}
      </RightWrapper>
    </Container>
  );
};

export default Header;
