import React from 'react';
import {AvatarContainer, AvatarName, Container} from "./styles";
import {ReactComponent as PersonIcon} from "../../assets/svg/icons/person-add.svg";

interface Props {
    add?: boolean;
    title: string;
    click: () => void
}

const Avatar: React.FC<Props> = ({add, title, click}) => {
    return (
        <Container onClick={click}>
            <AvatarContainer add={add}>
                {
                    add &&
                    <PersonIcon/>
                }
            </AvatarContainer>
            <AvatarName>{title}</AvatarName>
        </Container>
    );
};

export default Avatar;
