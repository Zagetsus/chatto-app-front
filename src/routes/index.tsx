import React, { FunctionComponent } from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Welcome from "../pages/Welcome";

interface OwnProps {}

type Props = OwnProps;

const RoutesChatto: FunctionComponent<Props> = (props) => {
  return (
      <Routes>
        <Route path={'/'} element={<Welcome />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
  );
};

export default RoutesChatto;
