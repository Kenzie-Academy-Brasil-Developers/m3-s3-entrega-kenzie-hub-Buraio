import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 12px;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & h1 {
    text-align: center;
  }

  @media (min-width: 500px) {

    max-width: 370px;
    margin: 50px auto;

  }
`;

export default StyledContainer;
