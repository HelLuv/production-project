import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { PropsWithChildren } from 'shared/types';

type RequireAuthProps = PropsWithChildren & {
    roles?: any;
}

export const RequireAuth = (props: RequireAuthProps) => {
    const { roles, children } = props;
    const authData = useSelector(getUserAuthData);
    const location = useLocation();

    if (!authData) {
        return <Navigate to={AppRoutes.MAIN} state={{ from: location }} replace />;
    }

    return children;
};
