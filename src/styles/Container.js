import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 800px;
  padding: 0 12px;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & h1 {
    text-align: center;
  }

  & > div > button {
    width: 33px;
    height: 33px;
    color: #fff;
    background-color: var(--gray-3);
    font-size: 22px;
    border-radius: 4px;
  }

  & > div {
    height: 120px;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 500px) {
    max-width: 370px;
    margin: 50px auto;
  }
`;

export default StyledContainer;
