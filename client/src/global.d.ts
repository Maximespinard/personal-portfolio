declare module '*.css';

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  export default ReactComponent;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.js' {
  const value: string;
  export default value;
}
