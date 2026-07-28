declare module 'react' {
  export interface FormEvent<T = Element> {
    preventDefault(): void;
    currentTarget: T;
  }

  export function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): void;
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
  export function useState<S>(initialState: S | (() => S)): [S, (value: S | ((prev: S) => S)) => void];

  const React: {
    StrictMode: unknown;
  };

  export default React;
}

declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment): {
    render(children: unknown): void;
  };
}

declare module 'react/jsx-runtime' {
  export const Fragment: unknown;
  export function jsx(type: unknown, props: Record<string, unknown>, key?: string): unknown;
  export function jsxs(type: unknown, props: Record<string, unknown>, key?: string): unknown;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
