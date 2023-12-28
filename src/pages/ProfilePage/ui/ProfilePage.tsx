import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, useDynamicReducers } from 'shared/hooks/useDynamicReducers';
import { profileReducer } from 'entities/Profile';

const dynamicReducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

export const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;

    useDynamicReducers(dynamicReducers);

    return (
        <div className={classNames('', {}, [className])}>
            PROFILE PAGE
        </div>
    );
};
