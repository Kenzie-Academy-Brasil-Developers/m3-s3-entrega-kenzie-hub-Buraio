import StyledSelect from "../SelectModule/style";

const SelectTechStatus = ({ onChange }) => {
  return (
    <>
      <label htmlFor="techStatusSelect">
        Status
        <StyledSelect id="techStatusSelect" onChange={onChange}>
          <option value="">Selecionar status</option>
          <option value="iniciante">Iniciante</option>
          <option value="intermediário">Intermediário</option>
          <option value="avançado">Avançado</option>
        </StyledSelect>
      </label>
    </>
  );
};

export default SelectTechStatus;
