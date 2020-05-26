import React, { lazy } from 'react';
import ReactDom from 'react-dom';
import Login from "@pages/Login"
import styles from './app.less'
const Home = lazy(() => import(/* webpackChunkName: "Home" */"@pages/Home"))

const MyRedirect = lazy(() => import(/* webpackChunkName: "MyRedirect" */"@pages/MyRedirect"))

const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */"@pages/NotFound"))

import { Switch, BrowserRouter as Router, Route, Redirect, } from "react-router-dom";

const App = () => {
    return (
        <div className={styles.home}>
            <Router>
                <Switch>
                    {/* <MyRedirect/> */}
                    <Route path="/login" exact component={Login} />
                    <Route path="/home" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('app'))


