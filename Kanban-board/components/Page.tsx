import { FC, ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-highlight: #b4da55;
    --color-dark: #232628;
    --color-light: #f6f7f7;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body .light {
    background: var(--color-light);
    color: var(--color-dark);
  }

  body .dark {
    background: var(--color-dark);
    color: var(--color-light);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export interface PageProps {
  children?: ReactNode;
}

export const Page: FC<PageProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <header>{/*<!-- main heading here -->*/}</header>
      <nav>{/*<!-- main navigation here -->*/}</nav>
      <main>
        {/* page layout */}
        {children}
      </main>
      <footer>{/*<!-- footer content here -->*/}</footer>
    </>
  );
};
