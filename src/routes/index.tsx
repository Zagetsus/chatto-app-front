import React, { FunctionComponent } from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import Registration from "../pages/Registration";
import Chat from "../pages/Chat";

interface OwnProps {}

type Props = OwnProps;

const RoutesChatto: FunctionComponent<Props> = (props) => {
  return (
      <Routes>
        <Route path={'/'} element={<Welcome />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/cadastro'} element={<Registration />} />
        <Route path={'/chat'} element={<Chat />} />
      </Routes>
  );
};

export default RoutesChatto;
