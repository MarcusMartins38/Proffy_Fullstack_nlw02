import React, { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../hooks/auth";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import userImg from "../../assets/images/user.png";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import logOutIcon from "../../assets/images/icons/sair.svg";

import {
  Container,
  Header,
  MiddleLogos,
  Footer,
  Description,
  ButtonsArea,
} from "./styles";
import api from "../../services/api";

interface UserData {
  name: string;
  surname: string;
  avatar: string;
}

function Landing2() {
  const { signOut, user } = useContext(AuthContext);

  const [totalConnections, setTotalConnections] = useState(0);
  const [userData, setUserData] = useState<UserData>(() => {
    if (user) {
      return user as UserData;
    }

    return {} as UserData;
  });

  useEffect(() => {
    api.get("/connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  const handleLogOutButton = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <Header>
        <h3>
          <img
            alt="Perfil"
            src={!userData.avatar === true ? userData.avatar : userImg}
          />
          {userData.name} {userData.surname}
        </h3>

        <button onClick={handleLogOutButton}>
          <img src={logOutIcon} alt="Sair" />
        </button>
      </Header>

      <MiddleLogos>
        <div>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plaforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="Plataforma de estudos" />
      </MiddleLogos>

      <Footer>
        <Description>
          <p>
            Seja bem-vindo. <br />
            <strong>O que deseja fazer? </strong>
          </p>
          <p>
            Total de {totalConnections} conexões <br /> já realizadas
            <img src={purpleHeartIcon} alt="Coração roxo" />
          </p>
        </Description>

        <ButtonsArea>
          <Link to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </ButtonsArea>
      </Footer>
    </Container>
  );
}

export default Landing2;
