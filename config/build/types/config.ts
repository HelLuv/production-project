export type BuildMode = 'production' | 'development';

export const Project = {
    Frontend: 'frontend',
    Storybook: 'storybook',
    Jest: 'jest',
} as const;

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  url: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiURL: string;
  project: typeof Project[keyof typeof Project];
}
