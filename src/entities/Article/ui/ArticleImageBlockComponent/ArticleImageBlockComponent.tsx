import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { PropsWithClassName } from 'shared/types';
import { Text } from 'shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';

type ArticleImageBlockComponentProps = PropsWithClassName & {
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const {
        className,
        block: {
            src, title,
        },
    } = props;

    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            <figure className={cls.figure}>
                <img className={cls.image} src={src} alt={title} />
                {title && (
                    <figcaption>
                        <Text>{title}</Text>
                    </figcaption>
                )}
            </figure>
        </div>
    );
};
