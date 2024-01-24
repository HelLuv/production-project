import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { PropsWithClassName, ValuesOf } from 'shared/types';
import { Article, ArticleView } from 'entities/Article';
import { AppLink, AppLinkProps } from 'shared/ui/AppLink/ui/AppLink';
import { AppRoute } from 'app/providers/router';
import { Card } from 'shared/ui/Card';
import { Avatar } from 'shared/ui/Avatar';
import { Text, TextVariant } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { useHover } from 'shared/hooks/useHover';
import { ArticleBlockType, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

type ArticleListItemProps = PropsWithClassName & {
    article: Article;
    view: ValuesOf<typeof ArticleView>;
    linksTarget?: AppLinkProps['target'];
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className,
        view,
        article,
        linksTarget,
    } = props;
    const { t } = useTranslation();
    const formattedTypes = article.types.join(' ');
    const articlePath = AppRoute.ArticleDetails(article.id);
    const [isHover, hoverProps] = useHover();

    if (view === ArticleView.List) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.Text) as
        | ArticleTextBlock
        | undefined;

        return (
            <Card className={classNames(cls.list, {}, [className])}>
                <div className={cls.header}>
                    <Avatar className={cls.avatar} size={30} src={article.user.avatar} />
                    <Text className={cls.username}>{article.user.username}</Text>
                    <Text className={cls.date}>{article.createdAt}</Text>
                </div>

                <Text variant={TextVariant.Title} className={cls.title}>
                    {article.title}
                </Text>

                <Text className={cls.types}>{formattedTypes}</Text>

                <div className={cls.imageWrapper}>
                    <img src={article.img} alt="" className={cls.image} />
                </div>

                {textBlock && <ArticleTextBlockComponent block={textBlock} />}

                <div className={cls.footer}>
                    <AppLink to={articlePath} target={linksTarget}>
                        <Button>
                            {t('article.read-more')}
                        </Button>
                    </AppLink>
                    <Text className={cls.views}>{article.views}</Text>
                    <Icon icon={EyeIcon} />
                </div>
            </Card>
        );
    }

    return (
        <Card
            className={classNames(className, {
                [cls.hover]: isHover,
            }, [cls.grid])}
            {...hoverProps}
        >
            <div className={cls.imageWrapper}>
                <AppLink to={articlePath} target={linksTarget}>
                    <img src={article.img} alt="" className={cls.image} />
                    <Text className={cls.date}>{article.createdAt}</Text>
                </AppLink>
            </div>
            <div className={cls.infoWrapper}>
                <Text className={cls.types}>{formattedTypes}</Text>
                <Text className={cls.views}>{article.views}</Text>
                <Icon icon={EyeIcon} />
            </div>
            <AppLink to={articlePath} target={linksTarget}>
                <Text className={cls.title}>{article.title}</Text>
            </AppLink>
        </Card>
    );
};
