import { useState, useRef } from 'react';
import styles from './App.module.less';
import Home from '@pages/Home';
import{Link, Outlet} from "react-router-dom";

function App() {
    return (
        <div className={styles.root}>
            <nav>
                <h1>首页</h1>;
                <Link to="/home">home</Link>
                <Link to="/editor">editor</Link>

            </nav>
            <hr />

            <Outlet />

            
        </div>
    );
}

export default App;
