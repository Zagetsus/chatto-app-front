import styled from "styled-components";
import {ReactComponent as PersonAddCircle} from "../../assets/svg/icons/person-add-circle.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Person = styled(PersonAddCircle)`
  width: 48px;
  height: 48px;
  opacity: 20%;
  margin-bottom: 16px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  
  color: #09101D;
  opacity: 0.8;
`;
