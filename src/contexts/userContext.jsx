import React, { useEffect, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import kenzieHubApi from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const setScroll = () => {
    useEffect(() => scrollTo(0, 0), []);
  };

  const redirectPage = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  useEffect(() => {
    const userData = async () => {
      const token = localStorage.getItem("@token");
      if (token) {
        try {
          const { data } = await kenzieHubApi.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(data);
        } catch (error) {
          console.error(error);
          localStorage.clear();
        } finally {
          setLoading(false);
        }
      }
    };

    userData();
  }, []);

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

      const { token, user: userData } = request.data;

      setUser(userData);
      localStorage.setItem("@token", token);
      localStorage.setItem("@userId", userData.id);

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        setScroll,
        navigate,
        registerData,
        loginData,
        redirectPage,
        user,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
