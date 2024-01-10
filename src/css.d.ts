declare module "csstype" {
    interface Properties {
      [`--${string}`]: string;
    }
  }