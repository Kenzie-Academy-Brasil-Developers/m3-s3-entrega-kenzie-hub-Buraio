import React from "react";
import StyledSelect from "./style";

const SelectModule = ({ register, error }) => {
  return (
    <label htmlFor="selectModule">
      Selecionar Módulo
      <StyledSelect id="selectModule" {...register}>
        <option value="">Selecione o Módulo</option>
        <option value="Primeiro Módulo (Introdução ao Frontend)">
          Primeiro Módulo
        </option>
        <option value="Segundo Módulo (Avançando em Javascript)">
          Segundo Módulo
        </option>
        <option value="Terceiro Módulo (React)">Terceiro Módulo</option>
        <option value="Quarto Módulo (Introdução ao Backend)">
          Quarto Módulo
        </option>
        <option value="Quinto Módulo (Avançando em Backend)">
          Quinto Módulo
        </option>
        <option value="Sexto Módulo (Empregabilidade)">Sexto Módulo</option>
      </StyledSelect>
      <span>{error}</span>
    </label>
  );
};

export default SelectModule;
