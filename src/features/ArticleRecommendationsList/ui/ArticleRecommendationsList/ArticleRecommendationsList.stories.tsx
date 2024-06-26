import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { articleMock } from '@/entities/Article/testing';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    // parameters: {
    //   mockData: [
    //     {
    //       url: __API_URL__,
    //       method: 'GET',
    //       status: 200,
    //       response: [
    //         { ...articleMock, id: '1' },
    //         { ...articleMock, id: '2' },
    //         { ...articleMock, id: '3' },
    //       ],
    //     },
    //   ],
    // },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
    mockData: [
        {
            url: `${__API_URL__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...articleMock, id: '1' },
                { ...articleMock, id: '2' },
                { ...articleMock, id: '3' },
            ],
        },
    ],
};
