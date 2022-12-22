import StyledModal from "./style";
import ModalBackground from "./modalBackground";
import { useContext } from "react";
import { TechContext } from "../../contexts/techContext";
import ModalForm from "../ModalForm";

const Modal = () => {
  const { activeModal, setActiveModal } = useContext(TechContext);

  return (
    <ModalBackground>
      <StyledModal>{ activeModal === "create" ?
      <>
        <header>
          <h2>Cadastrar tecnologia</h2>
          <button onClick={() => {
            setActiveModal(false)
          }}>X</button>
        </header>
        <ModalForm/>
      </>
      :
      <p></p>
    }</StyledModal>
    </ModalBackground>
  );
};

export default Modal;
