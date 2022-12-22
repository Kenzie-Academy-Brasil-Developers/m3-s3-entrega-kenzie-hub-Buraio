import styled from "styled-components";

const StyledModal = styled.div`
  width: 370px;
  padding: 0 22px 32px;
  background-color: var(--gray-3);
  border-radius: 4px;

  & > header {
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > header > h2 {
    font-size: 14px;
  }

  & > header > button {
    color: var(--gray-1);
    font-size: var(--font-size-1);
  }

  & > form label {
    width: 100%;
    margin-bottom: 20px;
    display: inline-block;
    font-size: var(--font-size-2);
    color: var(--gray-0);
  }
`;

export default StyledModal;
