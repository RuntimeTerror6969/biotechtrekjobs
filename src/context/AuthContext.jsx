// import { createContext, useState, useContext } from "react";

// const AuthContext = createContext(null);

// const DUMMY_USERS = [
//   {
//     email: "test@test.com",
//     password: "password123",
//   },
// ];

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const register = (email, password) => {
//     if (DUMMY_USERS.find((u) => u.email === email)) {
//       alert("Email already registered");
//       return false;
//     }
//     DUMMY_USERS.push({ email, password });
//     return true;
//   };
//   const login = (email, password) => {
//     const validUser = DUMMY_USERS.find(
//       (u) => u.email === email && u.password === password
//     );
//     if (validUser) {
//       setUser({ email });
//       return true;
//     }
//     return false;
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, register }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate =useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = localStorage.getItem("userInfo");
    if (token && userInfo) {
      setUser(JSON.parse(userInfo));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      console.log("Login response:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          id: response.data.id,
          role: response.data.role,
        })
      );
      setUser({
        id: response.data.id,
        role: response.data.role,
      });
      console.log("User state updated:", user);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const register = async (name, email, password, role) => {
    try {
      await api.post("/auth/signup", { name, email, password, role });
      return true;
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
