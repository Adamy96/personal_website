import React from 'react';
import { Homepage } from '../../pages';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Homepage} />
            </Switch>
        </Router>
    );
}

export default Routes;