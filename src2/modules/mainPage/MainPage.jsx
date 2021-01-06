import React from 'react';
import Login from '../login';
import Messenger from '../messenger';

const MainPage = props => {
    const { isUserLoged } = props;

    return (
        <>
            {!isUserLoged ? <Login /> : <Messenger />}
        </>
    )
}

export default React.memo(MainPage);