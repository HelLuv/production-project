import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors';
import { Navigate, useLocation } from 'react-router-dom';
import { PropsWithChildren } from 'shared/types';
import { AppRoute } from 'app/providers/router';

type RequireAuthProps = PropsWithChildren & {
    roles?: any;
}

export const RequireAuth = (props: RequireAuthProps) => {
    const { roles, children } = props;
    const authData = useSelector(getUserAuthData);
    const location = useLocation();

    if (!authData) {
        return <Navigate to={AppRoute.Main()} state={{ from: location }} replace />;
    }

    return children;
};
