import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-success: #3FE864;
    --color-negative: #E83F5B;

    --gray-0: #F8F9FA;
    --gray-1: #868E96;
    --gray-2: #343B41;
    --gray-3: #212529;
    --gray-4: #121214;

    --font-family: "Inter", sans-serif;

    --font-size-1: 1rem;
    --font-size-2: 0.75rem;

    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 400;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, a {
    cursor: pointer;
  }

  button {
    border: none;
    background: transparent;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  ul, ol, li {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, label, select, option {
    font-family: var(--font-family);
  }

  body, .App {
    height: 100vh;
    background-color: #121214;
    color: #fff;
  }

  @media (min-width: 375px) {

    body {
      overflow-x: hidden;
    }

  }

`;

export default GlobalStyles;
