import { FunctionComponent, SVGAttributes } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import SignOutIcon from 'shared/assets/icons/sign-out.svg';
import { AppLinkTheme } from 'shared/ui/AppLink';

export type SidebarItemType = {
    path: string;
    key: string;
    Icon: FunctionComponent<SVGAttributes<SVGElement>>;
    theme?: AppLinkTheme;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        key: 'Main page',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        key: 'About page',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        key: 'Profile page',
        Icon: ProfileIcon,
    },
    {
        path: 'https://google.com',
        key: 'Leave website',
        Icon: SignOutIcon,
    },
];
