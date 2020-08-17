import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import Input from "../../components/Input";

import { Container, Background, Content, LoginContainer } from "./styles";

import backIcon from "../../assets/images/icons/back.svg";
import showPasswordIcon from "../../assets/images/icons/showPassword.svg";
import hidePasswordIcon from "../../assets/images/icons/hidePassword.svg";

const SignUp: React.FC = () => {
  const history = useHistory();

  const [isChecked, setIsChecked] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickButton = useCallback(() => {
    api
      .post("/users", {
        name,
        surname,
        email,
        password,
      })
      .then((response) => {
        alert("Cadastrado com Sucesso!");

        history.push("/");
      })
      .catch(() => {
        alert("Erro ao cadastrar.");
      });
  }, [email, history, name, password, surname]);

  return (
    <Container>
      <Content>
        <LoginContainer>
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>

          <h1>Cadastro</h1>
          <p>Preencha os dados abaixo para começar.</p>

          <form>
            <Input
              placeholder="Nome"
              name="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              placeholder="Sobrenome"
              name="sobrenome"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />

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

            <button type="button" onClick={handleClickButton}>
              Concluir Cadastro
            </button>
          </form>
        </LoginContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default SignUp;
