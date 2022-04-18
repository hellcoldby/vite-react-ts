import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './index.module.less';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import render from '../../components/chart/surface.js';
import MyEdit from '../../components/Moncao';

interface IProps {
    children?: React.ReactNode;
    curOrder: number;
    setNavIndex: any;
    testSaga: any;
    updateTest: any;
}

function Home(props: IProps) {
    useEffect(() => {
        console.log(props);
        props.updateTest();
        props.testSaga();
    }, [props]);
    const ball = useRef(null);
    const editor = useRef(null);

    useEffect(()=>{
        ball.current && render(ball.current);
        let mon:any = null;
        if( editor.current ){
            mon = MyEdit(editor.current);
            mon.onDidChangeModelContent(() => {
                console.log(mon.getValue());
                render(ball.current, JSON.parse( mon.getValue()));
            });
            
        }
        return ()=> mon?.dispose();
    },[]);

    return (
        <div className={styles.screen_box}>
            
            <div className={styles.box} ref={ball}></div>
            <div className={styles.code} ref={editor}>
            
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateTest: () => dispatch({ type: 'test2/changeName', payload: { name: '更新测试' } }),
    testSaga: () => dispatch({ type: 'test2/fetch', payload: { saga: 'test_saga_fetch' } }),
});

const mapStateToProps = (state) => {
    console.log(state);
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
