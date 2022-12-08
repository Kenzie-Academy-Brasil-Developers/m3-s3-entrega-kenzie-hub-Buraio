import { Link } from "react-router-dom";
import React from "react";
import StyledHeader from "./style";
import logoImg from "../../assets/Logo.svg";

const Header = ({ pagePath, linkName }) => {
  return (
    <StyledHeader>
      <div>
        <h1>
          <img src={logoImg} alt="" />
        </h1>

        <Link to={pagePath} onClick={() => localStorage.clear()}>
          {linkName}
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
