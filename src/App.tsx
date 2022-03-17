import { useState, useRef } from 'react';
import styles from './App.module.less';
import Home from '@pages/Home';

function App() {
    return (
        <div className={styles.root}>
            <h1>首页</h1>;
            <Home />
        </div>
    );
}

export default App;
