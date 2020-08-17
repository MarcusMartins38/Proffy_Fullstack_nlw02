import styled from "styled-components";

import ProffyBackground from "../../assets/images/ProffyBackground.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;

  overflow-y: hidden;

  @media (max-width: 700px) {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export const Background = styled.div`
  background: url(${ProffyBackground}) no-repeat center;
  background-color: var(--color-primary);
  height: 100%;
  flex: 1;

  @media (max-width: 700px) {
    width: 100vw;
    min-height: 100vh;
    flex: 1;
    margin-top: 5rem;
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

  height: 100%;
  width: 35.2rem;
  color: var(--color-text-complement);
  margin: 128px 0;

  a {
    align-self: flex-start;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }

  input {
    ::placeholder {
      color: var(--color-text-complement);
    }
  }

  h1 {
    padding-top: 14rem;
    color: var(--color-text-title);
  }

  p {
    margin-top: 2rem;
    margin-bottom: 4rem;
    max-width: 215px;
  }

  form {
    input {
      height: 70px;
      /* margin: -0.5px 0; */
    }
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
          cursor: pointer;
        }
      }
    }
  }

  button {
    width: 100%;
    height: 56px;
    cursor: pointer;

    margin-top: 4rem;
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
