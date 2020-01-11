import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Users from './user/pages/Users';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Users />
                </Route>
                {/* if nothing is matched redirect to '/' */}
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default App;
