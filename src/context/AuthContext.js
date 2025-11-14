import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userType, setUserType] = useState(null); // "user" or "kitchen"
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (type) => {
    setUserType(type);
    setLoggedIn(true);
  };

  const logout = () => {
    setUserType(null);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
