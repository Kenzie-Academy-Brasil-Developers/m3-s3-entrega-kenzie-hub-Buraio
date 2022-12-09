import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header";
import TechCard from "../../components/TechCard";
import { UserContext } from "../../contexts/userContext";
import StyledDashContainer from "./style";
const DashboardPage = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  const { name, techs, course_module } = user;

  return user ? (
    <>
      <Header pagePath="/" linkName="Sair" />
      <StyledDashContainer>
        <div>
          <h2>Olá, {name}!</h2>
          <p>{course_module}</p>
        </div>

        <div>
          <h3>Tecnologias</h3>
          <button>+</button>
        </div>

        <ul>
          {techs.map((tech) => (
            <TechCard />
          ))}
          <TechCard></TechCard>
        </ul>
      </StyledDashContainer>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default DashboardPage;
