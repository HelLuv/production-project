import { ArticleView } from 'entities/Article';
import GridIcon from 'shared/assets/icons/grid.svg';
import ListIcon from 'shared/assets/icons/list.svg';

export const VIEWS = [
    {
        view: ArticleView.Grid,
        icon: GridIcon,
    },
    {
        view: ArticleView.List,
        icon: ListIcon,
    },
];
