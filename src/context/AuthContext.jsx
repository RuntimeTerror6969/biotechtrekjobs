import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

const DUMMY_USERS = [
  {
    email: "test@test.com",
    password: "password123",
  },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const register = (email, password) => {
    if (DUMMY_USERS.find((u) => u.email === email)) {
      alert("Email already registered");
      return false;
    }
    DUMMY_USERS.push({ email, password });
    return true;
  };
  const login = (email, password) => {
    const validUser = DUMMY_USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (validUser) {
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
