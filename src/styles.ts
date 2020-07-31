import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,body, #root {
    background: #2e3440;
    min-height:100vh;
    height:auto;

    display:flex;
    align-items:flex-start;
    justify-content:center;
  }
`;

export const Container = styled.article`
  width: 100%;
  color: #fff;
  font-family: sans-serif;

  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2rem;

    span {
      color: #007acc;
    }
  }

  span {
    text-align: center;
    color: red;
  }

  #container-addTask {
    display: flex;
    justify-content: center;
    flex-direction: column;

    input,
    button {
      margin: 0.5rem 0;
      height: 40px;
      border-radius: 4px;
      border: none;

      &:focus {
        border: 2px solid #007acc;
        box-shadow: 0 0 7px #007acc;
        outline: none;
      }
    }

    input {
      padding: 0 1rem;
      background: #434c5e;
      border: 1px solid gray;
      color: #ccc;

      &::placeholder {
        color: #ccc;
      }
    }

    button {
      background: #007acc;
      color: #fff;
      font-family: sans-serif;
      font-size: 0.9rem;
      cursor: pointer;
      transition: ease-in-out 0.5s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  ol {
    background: #434c5e;
    border-radius: 4px;
    border: 1px solid gray;
    padding: 1rem 0;

    display: flex;
    align-items: center;
    flex-direction: column;

    li {
      padding: 0.5rem 0;
    }

    h1 {
      margin: 0;
    }
  }
`;
