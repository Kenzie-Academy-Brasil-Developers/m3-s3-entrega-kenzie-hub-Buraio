import React from "react";
import StyledSelect from "./style";

const SelectModule = () => {
  return (
    <label htmlFor="selectModule">
      Selecionar Módulo
      <StyledSelect id="selectModule">
        <option value="">Selecione o Módulo</option>
        <option value="1">Primeiro Módulo</option>
        <option value="2">Segundo Módulo</option>
        <option value="3">Terceiro Módulo</option>
        <option value="4">Quarto Módulo</option>
        <option value="5">Quinto Módulo</option>
        <option value="6">Sexto Módulo</option>
      </StyledSelect>
    </label>
  );
};

export default SelectModule;
