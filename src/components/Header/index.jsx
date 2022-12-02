import React from "react";
import logoImg from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = ({ pagePath, linkName }) => {
  return (
    <header>
      <div>
        <h1>
          <img src={logoImg} alt="" />
        </h1>

        <Link to={pagePath}>{linkName}</Link>
      </div>
    </header>
  );
};

const StyledHeader = styled(Header)`

  width: 100%;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

`;

export default StyledHeader;