import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { routerConfig } from '../model/routerConfig';

const routes = Object.values(routerConfig);

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {routes.map(({
                path, authOnly, element, ...restProps
            }) => (
                authOnly ? (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <RequireAuth
                                roles=""
                            >
                                {element}
                            </RequireAuth>
                        )}
                        {...restProps}
                    />
                ) : (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                        {...restProps}
                    />
                )))}
        </Routes>
    </Suspense>
);

export default AppRouter;
