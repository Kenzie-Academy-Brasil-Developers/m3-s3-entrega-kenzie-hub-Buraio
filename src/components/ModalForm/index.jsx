import { useContext, useEffect, useState } from "react";
import { TechContext } from "../../contexts/techContext";
import StyledButton from "../Button/style";
import Input from "../Input";
import SelectTechStatus from "../SelectTechStatus";

const ModalForm = () => {
  const { activeModal, techObj, setTechObj, createNewTech } = useContext(TechContext);

  const [techTitle, setTechTitle] = useState("");
  const [techStatus, setTechStatus] = useState("");

  const getModalType = (event) => {

    event.preventDefault();

    activeModal === "create" ?
    createNewTech()
    :
    'pao'

  }

  useEffect(() => {
    setTechObj({ title: techTitle, status: techStatus });
    console.log(techObj);
  }, [techTitle, techStatus]);

  return (
    <form onSubmit={getModalType}>
      <Input
        id="techNameInput"
        type="text"
        placeholder="Nome da tecnologia"
        inputName="Nome"
        onChange={(event) => setTechTitle(event.target.value)}
      />
      <SelectTechStatus
        onChange={(event) => setTechStatus(event.target.value)}
      />
      {activeModal === "create" ? (
        <StyledButton>Cadastrar Tecnologia</StyledButton>
      ) : (
        <div>
          <StyledButton>Salvar alterações</StyledButton>
          <button className="deleteTech">Excluir</button>
        </div>
      )}
    </form>
  );
};

export default ModalForm;
