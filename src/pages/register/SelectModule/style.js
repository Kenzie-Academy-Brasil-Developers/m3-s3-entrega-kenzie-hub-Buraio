import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  min-height: 40px;
  padding: 0 16px;
  margin-top: 22px;
  background-color: var(--gray-2);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: var(--font-size-2);

  &:focus {
    border: 1px solid var(--gray-0);
  }

  & > option {
    color: #fff;
  }
`;

export default StyledSelect;
