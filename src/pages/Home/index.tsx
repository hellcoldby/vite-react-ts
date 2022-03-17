import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './index.module.less';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

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

    return (
        <div className={styles.screen_box}>
            <h1>Home</h1>
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
