import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    paddings: {
      globalPadding: string;
    };
  }
}
