import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  margin-top: 20px;
  padding: 42px 22px;
  background-color: var(--gray-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-size: var(--font-size-1);
  }
  
  & h2, label {
    margin-bottom: 22px;
  }

  & label {
    width: 100%;
    font-size: var(--font-size-2);
  }

  & p {
    font-size: var(--font-size-2);
    margin: 27px 0 17px;
    color: var(--gray-1);
  }
`;

const Form = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

export default Form;
