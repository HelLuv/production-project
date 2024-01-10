import { PropsWithClassName } from 'shared/types';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

type ArticleBlockComponentProps = PropsWithClassName & {
  block: ArticleBlock;
}

export const ArticleBlockComponent = (props: ArticleBlockComponentProps) => {
    const { className, block } = props;
    const { type } = block;
    switch (type) {
    case ArticleBlockType.Text:
        return <ArticleTextBlockComponent className={className} block={block} />;

    case ArticleBlockType.Code:
        return <ArticleCodeBlockComponent className={className} block={block} />;
    case ArticleBlockType.Image:
        return <ArticleImageBlockComponent className={className} block={block} />;

    default: {
        const exhaustiveCheck: never = type;
        return null;
    }
    }
};
