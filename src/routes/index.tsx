import React from 'react';
import {Routes} from "react-router-dom";
import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import Registration from "../pages/Registration";
import Chat from "../pages/Chat";
import {Container} from "./styles";
import ProtectedRoute from "./ProtectedRoute";

const RoutesChatto: React.FC = () => {
    return (
        <Container>
            <Routes>
                <ProtectedRoute
                    path={'/'}
                    element={<Welcome/>}
                    noLogged
                />
                <ProtectedRoute
                    path={'/login'}
                    element={<Login/>}
                    noLogged
                />
                <ProtectedRoute
                    path={'/cadastro'}
                    element={<Registration/>}
                    noLogged
                />
                <ProtectedRoute
                    path={'/chat'}
                    element={<Chat/>}
                />
            </Routes>
        </Container>
    );
};

export default RoutesChatto;
