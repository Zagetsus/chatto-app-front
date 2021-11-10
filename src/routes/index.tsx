import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import Registration from "../pages/Registration";
import Chat from "../pages/Chat";
import {Container} from "./styles";

const RoutesChatto: React.FC = () => {
    return (
        <Container>
            <Routes>
                <Route path={'/'} element={<Welcome/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/cadastro'} element={<Registration/>}/>
                <Route path={'/chat'} element={<Chat/>}/>
            </Routes>
        </Container>
    );
};

export default RoutesChatto;
