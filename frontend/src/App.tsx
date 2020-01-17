import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Users from './user/pages/Users';
import { primary, secondary, accent } from './shared/Styles';
import './App.css';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${primary};
        color: ${secondary};
    }
`;

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Users />
                    </Route>
                    {/* if nothing is matched redirect to '/' */}
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    );
};

export default App;
