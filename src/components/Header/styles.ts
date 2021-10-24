import styled from "styled-components";

import { ReactComponent as CloseIconSvg } from "../../assets/svg/icons/close.svg";
import { ReactComponent as MinusIconSvg } from "../../assets/svg/icons/min.svg";
import { ReactComponent as PlusIconSvg } from "../../assets/svg/icons/plus.svg";

import { ReactComponent as LogoExtendsSvg } from "../../assets/svg/logo-extends.svg";

import { ReactComponent as SearchIconSvg } from "../../assets/svg/icons/search.svg";
import { ReactComponent as PersonCircleSvg } from "../../assets/svg/icons/person-circle.svg";
import { ReactComponent as SettingsIconSvg } from "../../assets/svg/icons/setings.svg";

export const Container = styled.div`
  height: 73px;
  width: 100%;
  background-color: white;
  align-items: center;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05),
    inset 0px 2px 2px rgba(0, 0, 0, 0.01);
  display: flex;
  padding: 30px;
  @media (max-width: 1278px) {
    display: none;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex: 1;
`;

export const LogoContainer = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex: 1;
  justify-content: flex-end;
`;

export const CloseIcon = styled(CloseIconSvg)`
  height: 12px;
  width: 12px;
  cursor: pointer;
`;

export const MinusIcon = styled(MinusIconSvg)`
  height: 13px;
  width: 13px;
  cursor: pointer;
`;

export const PlusIcon = styled(PlusIconSvg)`
  height: 16.5px;
  width: 16.5px;
  cursor: pointer;
`;

export const LogoIconExtends = styled(LogoExtendsSvg)`
  height: 40px;
`;

export const SearchIcon = styled(SearchIconSvg)`
  cursor: pointer;
`;

export const PersonCircleIcon = styled(PersonCircleSvg)`
  cursor: pointer;
`;

export const SettingsIcon = styled(SettingsIconSvg)`
  cursor: pointer;
`;
