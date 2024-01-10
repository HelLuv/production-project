import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { PropsWithClassName } from 'shared/types';
import { Code } from 'shared/ui/Code';
import cls from './ArticleCodeBlockComponent.module.scss';

type ArticleCodeBlockComponentProps = PropsWithClassName & {
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
            <Code>{block.code}</Code>
        </div>
    );
};
