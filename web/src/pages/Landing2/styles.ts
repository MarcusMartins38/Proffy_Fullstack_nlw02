import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background: var(--color-primary);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6rem;

  padding: 4rem 10rem 0 10rem;

  h3 {
    display: flex;
    align-items: center;

    color: var(--color-text-in-primary);

    img {
      border-radius: 50%;
      width: 4rem;
      height: 4rem;

      margin-right: 1.6rem;
    }
  }

  button {
    width: 4rem;
    height: 4rem;
    border-radius: 8px;
    border: 0;

    background: var(--color-primary-dark);
    transition: background 0.5s;

    cursor: pointer;

    &:hover {
      background: var(--color-primary-darker);
    }
  }
`;
export const MiddleLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10rem;

  h2 {
    width: 320px;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
    color: var(--color-text-in-primary);
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--color-input-background);

  height: 36vh;
  width: 100%;

  padding: 0 10rem;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 500px;
  width: 100%;
  margin-right: 5.3rem;
`;

export const ButtonsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;

  margin-right: -5.3rem;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;

    &:nth-child(1) {
      background: var(--color-primary-lighter);

      &:hover {
        background: var(--color-primary-light);
      }
    }

    &:nth-child(2) {
      background: var(--color-secundary);

      &:hover {
        background: var(--color-secundary-dark);
      }
    }

    img {
      margin-right: 2.4rem;
    }
  }
`;
