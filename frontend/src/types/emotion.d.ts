import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary100: string;
      primary200: string;
      primary600: string;
      primary700: string;
      orange: string;
      mint: string;
      background: string;
      white: string;
      black500: string;
      black900: string;
    };
    paddings: {
      globalPadding: string;
    };
  }
}
