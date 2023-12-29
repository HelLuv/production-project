import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useEffect } from 'react';

const dynamicReducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

export const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    useDynamicReducers(dynamicReducers);

    return (
        <div className={classNames('', {}, [className])}>
            <ProfileCard />
        </div>
    );
};
