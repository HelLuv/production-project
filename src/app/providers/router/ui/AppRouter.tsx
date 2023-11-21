import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
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
