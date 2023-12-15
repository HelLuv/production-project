declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export = styles
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  // eslint-disable-next-line no-undef
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;
declare const __API_URL__: string;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T
}
