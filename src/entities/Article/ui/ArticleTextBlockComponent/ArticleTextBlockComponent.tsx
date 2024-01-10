import { useTranslation } from 'react-i18next';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { PropsWithClassName } from 'shared/types';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextVariant } from 'shared/ui/Text';
import cls from './ArticleTextBlockComponent.module.scss';

type ArticleTextBlockComponentProps = PropsWithClassName & {
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const { className, block: { title, paragraphs } } = props;
    const { t } = useTranslation();

    return (
        <VStack gap={8} className={className} align="stretch">
            {title && (
                <Text variant={TextVariant.Title} size={TextSize.Large} className={cls.title}>
                    {title}
                </Text>
            )}

            {paragraphs.map((paragraph) => (
                <Text key={paragraph} className={cls.paragraph}>
                    {paragraph}
                </Text>
            ))}
        </VStack>
    );
};
