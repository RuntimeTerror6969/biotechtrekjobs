import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const AuthForm = () => {
  const { darkMode } = useTheme();
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "candidate",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      try {
        const success = await register(
          formData.name,
          formData.email,
          formData.password,
          formData.role
        );
        if (success) {
          alert("Registration successful! Please login.");
          setIsRegistering(false);
        }
      } catch (error) {
        alert("Registration failed. Please try again.");
      }
    } else {
      try {
        const success = await login(formData.email, formData.password);
        if (success) navigate("/jobs");
      } catch (error) {
        alert("Invalid credentials.");
      }
    }
  };

  return (
    <div
      className={`max-w-md mx-auto p-6 rounded-lg shadow-lg ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } ${!isRegistering ? "mb-20" : ""}`} // Conditionally add margin-bottom for login
    >
      <h2 className="text-2xl font-bold mb-6 mt-20">
        {isRegistering ? "Register" : "Login"}
      </h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full p-2 border rounded ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
              }`}
              required
            />
          </div>
        )}
        <div className="mb-2">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`w-full p-2 border rounded ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className={`w-full p-2 border rounded ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
            required
          />
        </div>
        {isRegistering && (
          <>
            <div className="mb-4">
              <label className="block mb-2">Confirm Password</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className={`w-full p-2 border rounded ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
                }`}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Role</label>
              <select
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className={`w-full p-2 border rounded ${
                  darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
                }`}
                required
              >
                <option value="candidate">Candidate</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </>
        )}
        <button
          type="submit"
          className={`w-full p-2 rounded ${
            darkMode
              ? "bg-blue-700 text-white hover:bg-blue-800"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isRegistering ? "Register" : "Login"}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="text-blue-500 hover:underline"
        >
          {isRegistering ? "Login" : "Register"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
