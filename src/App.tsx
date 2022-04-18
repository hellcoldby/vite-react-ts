import { useState, useRef } from 'react';
import styles from './App.module.less';
import Home from '@pages/Home';
import{Link, Outlet} from "react-router-dom";

function App() {
    return (
        <div className={styles.root}>
            <nav>
                <h1>图形测试</h1>
            </nav>
            
            <aside className={styles.left}>
                <Link to="/home">home</Link>
                <Link to="/editor">editor</Link>
            </aside>
            <section>
                <Outlet />
            </section>
        </div>
    );
}

export default App;
