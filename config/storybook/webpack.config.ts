import { Configuration, DefinePlugin } from 'webpack';
import path from 'path';
import { BuildPaths, Project } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildScssLoader';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '../../src'),
        html: '',
        build: '',
        entry: '',
        locales: '',
        buildLocales: '',
    };

    if (config.resolve) {
        config.resolve?.modules?.push(paths.src);
        config.resolve?.extensions?.push('.ts', '.tsx');
    }

    if (config.module && config.module.rules) {
        config.module.rules = config.module.rules.map((rule) => {
            if (typeof rule === 'object' && /svg/.test(rule?.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });

        config.module?.rules?.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.module?.rules?.push(buildCssLoaders(true));
    }

    if (config.plugins) {
        config.plugins.push(
            new DefinePlugin({
                __IS_DEV__: true,
                __API_URL__: JSON.stringify('http://storybook.mock.api.com'),
                __PROJECT__: JSON.stringify(Project.Storybook),
            }),
        );
    }

    return config;
};
