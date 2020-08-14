import styled from "styled-components";

import ProffyBackground from "../../assets/images/ProffyBackground.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const Background = styled.div`
  background: url(${ProffyBackground}) no-repeat center;
  background-color: var(--color-primary);
  height: 100%;
  flex: 1;

  @media (max-width: 700px) {
    width: 100vw;
    min-height: 50vh;
    flex: 1;
    margin-bottom: 5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 50%;
  /* max-height: 560px; */
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 36rem;
  width: 35.2rem;
  color: var(--color-text-complement);
  margin: 128px 0;

  input {
    ::placeholder {
      color: var(--color-text-complement);
    }
  }

  h1 {
    color: var(--color-text-title);
    margin-bottom: 4rem;
  }

  form {
    div {
      display: flex;
      align-items: center;
      width: 100%;

      #inputDiv {
        position: absolute;

        #inputCheck {
          position: absolute;
          margin-left: 90%;

          max-width: 24px;
          max-height: 24px;
          opacity: 0;
        }

        img {
          position: absolute;
          margin-left: 90%;
        }
      }
    }
  }

  button {
    width: 100%;
    height: 56px;
    cursor: pointer;

    border: 0;
    border-bottom: 8px solid var(--color-secundary-dark);
    border-radius: 8px;
    font-weight: 600;

    color: var(--color-title-in-primary);
    background: var(--color-secundary);

    transition: border-bottom 0.5s;

    &:hover {
      border-bottom: 2px solid var(--color-secundary-dark);
    }
  }
`;

export const PasswordDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 2.4rem;
  padding-bottom: 4rem;

  div {
    display: flex;
    align-items: center;
    position: relative;

    input {
      width: 24px;
      height: 24px;

      margin-right: 16px;
    }

    img {
      padding-top: 6px;
      box-shadow: 0;

      position: absolute;
      background-color: var(--color-secundary);
      border-radius: 4px;

      width: 23px;
      height: 24px;
    }
  }

  a {
    width: 100%;

    text-decoration: none;
    color: var(--color-text-complement);
    transition: color 0.3s;

    &:hover {
      color: var(--color-primary-dark);
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 352px;

  p {
    font-size: 16px;
    line-height: 26px;
    a {
      color: var(--color-primary);
      font-weight: 600;
      transition: color 0.3s;

      &:hover {
        color: var(--color-primary-dark);
      }
    }
  }

  @media (max-width: 700px) {
    margin-bottom: 5rem;
  }
`;
