import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Header from './shared/components/navigation/Header';
import { primary, secondary } from './shared/Styles';
import './App.css';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${primary};
        color: ${secondary};
        font-family: 'EB Garamond', serif;
    }
`;

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Header />
                    </Route>
                    {/* if nothing is matched redirect to '/' */}
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    );
};

export default App;
