import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import Users from './user/pages/Users';
import './App.css';

const theme = {};

const App: React.FC = () => {
    return (
        // <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Users />
                </Route>
                {/* if nothing is matched redirect to '/' */}
                <Redirect to="/" />
            </Switch>
        </Router>
        // </ThemeProvider>
    );
};

export default App;
