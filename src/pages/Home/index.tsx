import React, { lazy } from 'react';

import { Switch, Route, Redirect, } from "react-router-dom";

const Demo1 = lazy(() => import(/* webpackChunkName: "Demo1" */ "@pages/Home/pages/demo1"))

const Demo2 = lazy(() => import(/* webpackChunkName: "Demo2" */ "@pages/Home/pages/demo2"))

const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */"@pages/NotFound"))

export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {
    return (
        <div>
            <div className="route">
                <Switch>
                    <Redirect from="/home" exact to="/home/demo1" />
                    <Route path="/home/demo1" exact component={Demo1} />
                    <Route path="/home/demo2" exact component={Demo2} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            <div>Home页面</div>
        </div>
    );
}

export default Home;