import React, { useContext } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import TechCard from "../../components/TechCard";
import { TechContext } from "../../contexts/techContext";
import { UserContext } from "../../contexts/userContext";
import StyledDashContainer from "./style";

const DashboardPage = () => {
  const { user, loading } = useContext(UserContext);
  const { activeModal, setActiveModal } = useContext(TechContext);

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
          <button
            onClick={() => {
              setActiveModal("create");
            }}
          >
            +
          </button>
        </div>

        <ul>
          {techs.map(({ id, title, status }, index) => (
            <TechCard key={index} id={id} title={title} status={status} />
          ))}
        </ul>
      </StyledDashContainer>

      {activeModal !== false && <Modal />}

      
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default DashboardPage;
