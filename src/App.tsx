import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyles from "./styles/GlobalStyles";
import RoutesChatto from "./routes";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles/>
            <RoutesChatto />
        </BrowserRouter>
    );
}

export default App;
