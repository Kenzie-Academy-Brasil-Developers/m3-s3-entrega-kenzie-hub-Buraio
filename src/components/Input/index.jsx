import React from "react";
import styled from "styled-components";


const StyledInput = styled.input`
  width: 100%;
  min-height: 40px;
  padding: 0 16px;
  margin-top: 22px;
  background-color: var(--gray-2);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: var(--font-size-2);

  &::placeholder {
    color: var(--gray-1);
  }

  &:focus {
    border: 1px solid var(--gray-0);
  }
`;

const Input = ({ id, type, placeholder, inputName, register, error }) => {
  return (
    <>
      <label htmlFor={id}>
        {inputName}
        <StyledInput
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
        ></StyledInput>
        <span>{error}</span>
      </label>
    </>
  );
};

export default Input;
