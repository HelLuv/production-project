import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { Profile, ProfileSchema } from './model/types/profile';

export { profileReducer, profileActions } from './model/slice/profileSlice';

export {
    fetchProfileData,
};

export {
    ProfileCard,
};
