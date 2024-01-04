import { FunctionComponent, SVGAttributes } from 'react';
import { AppLinkTheme } from 'shared/ui/AppLink';

export type SidebarItemType = {
    path: string;
    key: string;
    Icon: FunctionComponent<SVGAttributes<SVGElement>>;
    theme?: AppLinkTheme;
}

// export const SidebarItemsList: SidebarItemType[] = [
//     {
//         path: RoutePath.main,
//         key: 'Main page',
//         Icon: MainIcon,
//     },
//     {
//         path: RoutePath.about,
//         key: 'About page',
//         Icon: AboutIcon,
//     },
//     {
//         path: RoutePath.profile,
//         key: 'Profile page',
//         Icon: ProfileIcon,
//     },
//     {
//         path: 'https://google.com',
//         key: 'Leave website',
//         Icon: SignOutIcon,
//     },
// ];
