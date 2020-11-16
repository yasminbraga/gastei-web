import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html, body, #root {
    height: 100%;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
  form {
    background-color: #FFF;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    max-width: 420px;
  }

  form h1 {
    margin-bottom: 1rem;
  }

  input {
    padding: .75rem 1rem;
    border-radius: 5px;
    background-color: #f0f0fd;
    color: #333333;
    font-weight: 500;
    border: 1px solid #bbb4;
    width: 100%;
    margin-bottom: .75rem;
  }

  button {
    padding: .75rem 1rem;
    border-radius: 5px;
    background-color: #2a60f0;
    color: #fff;
    font-weight: bold;
    border: 1px solid #bbb4;
    width: 100%;
  }

  .content {
    margin-left: 240px;
    margin-top: 1rem;
  }
`
export default GlobalStyle;