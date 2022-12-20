import styled from "styled-components";

const StyledModal = styled.div`
  width: 370px;
  padding: 0 22px 32px;
  background-color: var(--gray-4);
  border-radius: 4px;

  & > header {
    height: 50px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default StyledModal;
