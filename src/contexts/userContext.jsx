import React, { useEffect, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import kenzieHubApi from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const setScroll = () => {
    useEffect(() => scrollTo(0, 0), []);
  };

  const verifyToken = () => {
    const token = localStorage.getItem("@token");

    if (token) {
      localStorage.clear();
    }
  };

  const registerData = async (data) => {
    try {
      await kenzieHubApi.post("users", data);

      toast.success("Sucesso, redirecionando para a página de login");

      setTimeout(() => {
        navigate("/");
      }, 6000);
    } catch (error) {
      toast.error(error.response);
    }
  };

  const loginData = async (data) => {
    try {
      const request = await kenzieHubApi.post("sessions", data);

      localStorage.clear();
      localStorage.setItem("@token", request.data.token);
      localStorage.setItem("@userId", request.data.user.id);

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  const redirectPage = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <UserContext.Provider
      value={{ setScroll, navigate, registerData, loginData, redirectPage, verifyToken }}
    >
      {children}
    </UserContext.Provider>
  );
};
