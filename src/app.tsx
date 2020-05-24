import React from 'react';

import ReactDom from 'react-dom';

import styles from './app.less'

import { Button } from "antd"

import Demo from "@com/demo";

const App = () => {
    return (
        <div>
            <div className={styles.run}>跑起来～</div>
            <Button type="primary">123</Button>
            <Demo />
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('app'))


