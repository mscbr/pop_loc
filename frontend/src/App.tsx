import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import { primary, secondary, accent2, accentFont } from './shared/Styles';
import './App.css';

import Navigation from './shared/components/navigation/Navigation';
import Events from './events/pages/Events';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${primary};
        color: ${secondary};
        font-family: 'EB Garamond', serif;
        font-size: x-large;
        letter-spacing: 1px;
    }
    a {
        text-decoration: none;
        color: ${accent2};
        &:hover {
            color: ${accentFont};
            transition: 0.2s;
        }
    }
    @media (max-width: 1000px) {
        body { font-size: large; }
      }
    @media (max-width: 540px) {
        body { font-size: medium; }
    }
`;

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact>
                        <Events />
                    </Route>
                    {/* if nothing is matched redirect to '/' */}
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    );
};

export default App;
