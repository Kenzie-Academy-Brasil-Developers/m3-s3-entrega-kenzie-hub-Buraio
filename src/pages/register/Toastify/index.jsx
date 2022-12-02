import { toast } from "react-toastify";

const Toastify = ({ type }) => {
  if (type === "success") {
    toast.success("Conta criada com sucesso!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  }

  if (type === "error") {
    toast.error("Ops! Algo deu errado", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  }
};

export default Toastify;