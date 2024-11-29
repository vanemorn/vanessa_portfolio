// src/custom.d.ts

declare module '*.svg' {
    import { FunctionComponent, SVGProps } from 'react';
    const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
    export { ReactComponent };
    const src: string;
    export default src;
  }
  