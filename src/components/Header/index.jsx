import React from "react";
import logoImg from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const StyledHeader = styled.header`
  width: 100%;
  padding: 25px 12px 30px;
  border-bottom: 1px solid var(--gray-3);

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  & > div > a {
    padding: 0 25px;
    background-color: var(--gray-3);
    border-radius: 4px;
    font-size: var(--font-size-2);
    font-weight: 600;
    display: flex;
    align-items: center;
  }
`;

export default Header;
