import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export type ArticleDetailsPageSchema = {
   comments: ArticleDetailsCommentsSchema;
   recommendations: ArticleDetailsRecommendationsSchema;
};
