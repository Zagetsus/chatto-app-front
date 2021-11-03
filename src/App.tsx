import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyles from "./styles/GlobalStyles";
import RoutesChatto from "./routes";
import AppProvider from "./AppProvider";

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <GlobalStyles/>
                <RoutesChatto/>
            </AppProvider>
        </BrowserRouter>

    );
}

export default App;
