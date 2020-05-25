import React from 'react';

import ReactDom from 'react-dom';

import styles from './app.less'

import Login from "./pages/Login"
import Home from "./pages/Home"
import MyRedirect from './pages/MyRedirect';
import NotFound from './pages/NotFound';


import { Switch, BrowserRouter as Router, Route, Redirect, } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Switch>
                {/* <MyRedirect/> */}
                <Route path="/login" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route  component={NotFound} />
            </Switch>
        </Router>
    )
}

ReactDom.render(<App />, document.getElementById('app'))


