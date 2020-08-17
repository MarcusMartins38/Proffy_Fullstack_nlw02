import React, { useState, useCallback, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Input from "../../components/Input";
import { AuthContext } from "../../hooks/auth";

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
import api from "../../services/api";

const SignIn: React.FC = () => {
  const { user, signIn } = useContext(AuthContext);
  const history = useHistory();

  const [isChecked, setIsChecked] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(user);

  const handleClickButton = useCallback(() => {
    signIn({ email, password });
  }, [email, password, signIn]);

  return (
    <Container>
      <Background />

      <Content>
        <LoginContainer>
          <h1>Fazer login</h1>

          <form>
            <Input
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type={isChecked ? "text" : "password"}
              placeholder="Senha"
              name="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              <Link to="/">Esqueci minha senha!</Link>
            </PasswordDiv>

            <button onClick={handleClickButton} type="button">
              Entrar
            </button>
          </form>
        </LoginContainer>

        <Footer>
          <p>
            Não tem conta?
            <br /> <Link to="/signup">Cadastre-se</Link>
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
