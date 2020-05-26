import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../store/User/UserContext';
import { Button } from 'antd'
import styles from './index.less'
export interface Demo1Props {

}

const Demo1: React.SFC<Demo1Props> = () => {
    const { userStore, dispatchForUser } = useContext(UserContext)
    const [name, setName] = useState('')
    useEffect(() => {
        setName(userStore.name)
    }, [userStore])
    return (
        <div className={styles.demo1}>
            <div>demo1</div>
            <div>{name}</div>
            <Button onClick={() => {
                dispatchForUser({ type: 'LOGIN_IN', playload: { name: '哈哈哈', isLogin: true } })
            }}>名字改为：'哈哈哈'</Button>
        </div>
    );
}

export default Demo1;