import React from 'react';

import { Switch, Route, Redirect, } from "react-router-dom";

import Demo1 from './pages/demo1';

import Demo2 from './pages/demo2';
import NotFound from '../NotFound';

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