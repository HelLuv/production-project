import { classNames } from 'shared/lib/classNames/classNames';
import { PropsWithClassName, ValuesOf } from 'shared/types';
import { ArticleView } from 'entities/Article';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { memo } from 'react';
import { VIEWS } from '../model/constants';
import cls from './ArticleViewSelector.module.scss';

type ArticleViewSelectorProps = PropsWithClassName & {
    view?: ValuesOf<typeof ArticleView>;
    onSelect: (view: ValuesOf<typeof ArticleView>) => void;
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view: currentView, onSelect } = props;

    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {VIEWS.map(({ view, icon }) => (
                <Button
                    key={view}
                    className={classNames(
                        cls.button,
                        { [cls.active]: view === currentView },
                    )}
                    onClick={() => onSelect(view)}
                >
                    <Icon icon={icon} className={cls.icon} />
                </Button>
            ))}
        </div>
    );
});

ArticleViewSelector.displayName = 'ArticleViewSelector';
