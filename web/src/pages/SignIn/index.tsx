import React, { useState } from "react";

import Input from "../../components/Input";

import {
  Container,
  Background,
  Content,
  LoginContainer,
  PasswordDiv,
  Footer,
} from "./styles";

import heartIcon from "../../assets/images/icons/purple-heart.svg";
import correct from "../../assets/images/icons/correct.svg";
import showPasswordIcon from "../../assets/images/icons/showPassword.svg";
import hidePasswordIcon from "../../assets/images/icons/hidePassword.svg";

const SignIn: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Container>
      <Background></Background>

      <Content>
        <LoginContainer>
          <h1>Fazer login</h1>

          <form>
            <Input placeholder="E-mail" name="email" />

            <Input
              type={isChecked ? "text" : "password"}
              placeholder="Senha"
              name="senha"
            >
              <div id="inputDiv">
                <input
                  id="inputCheck"
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <img
                  onClick={() => setIsChecked(!isChecked)}
                  src={isChecked ? hidePasswordIcon : showPasswordIcon}
                  alt="Show Password or Hide"
                />
              </div>
            </Input>

            <PasswordDiv>
              <div>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                {rememberMe && (
                  <img
                    onClick={() => setRememberMe(!rememberMe)}
                    src={correct}
                  />
                )}
                <label>Lembrar-me</label>
              </div>
              <a href="/">Esqueci minha senha!</a>
            </PasswordDiv>

            <button type="button">Entrar</button>
          </form>
        </LoginContainer>

        <Footer>
          <p>
            Não tem conta?
            <br /> <a href="">Cadastre-se</a>
          </p>

          <span>
            É de graça <img src={heartIcon} alt="purple heart" />
          </span>
        </Footer>
      </Content>
    </Container>
  );
};

export default SignIn;
