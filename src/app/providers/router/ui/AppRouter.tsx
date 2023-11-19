import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(routeConfig).map((route) => (
                <Route
                    key={route.path}
                    {...route}
                    element={(<div className="page-wrapper">{route.element}</div>)}
                />
            ))}
            <Route path="/" element={<MainPage />} />
        </Routes>
    </Suspense>
);

export default AppRouter;
