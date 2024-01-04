import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserIsInitialized } from 'entities/User/model/selectors';
import { useMountEffect } from 'shared/hooks/useMountEffect';
import { userActions } from 'entities/User';

const App = () => {
    const dispatch = useDispatch();

    const userIsInitialized = useSelector(getUserIsInitialized);

    useMountEffect(() => {
        dispatch(userActions.initAuthData());
    });

    return (
        <div className={classNames('app', {})}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {userIsInitialized && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
