declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module 'color';

declare module 'react-datepicker';

declare module NodeJS {
  interface ImportMeta {
    env: {
      [key: string]: string | string | undefined;
    };
  }
}