import React from 'react';
import {Container, Content, Logo} from "./styles";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

interface Props {
    close: () => void;
}

const HeaderMobile: React.FC<Props> = ({ close }) => {
    return (
        <Container>
            <Content>
                <ArrowBackIosOutlinedIcon onClick={close} htmlColor={"var(--primary)"}/>
                <Logo/>
                <div style={{width: 24}}/>
            </Content>
        </Container>
    );
};

export default HeaderMobile;
