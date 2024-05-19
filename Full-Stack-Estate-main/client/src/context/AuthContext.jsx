import { createContext, useEffect, useState } from "react";
import apiRequest from "../lib/apiRequest";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const updateUser = (data) => {
    setCurrentUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const fetchCurrentUser = async () => {
    try {
      const response = await apiRequest.get("/auth/currentUser");
      const userData = response.data;
      updateUser(userData);
    } catch (err) {
      console.error("Failed to fetch current user:", err);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser, fetchCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
