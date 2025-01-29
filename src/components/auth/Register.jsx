import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext"; // Import the ThemeContext to use dark mode state

const Register = () => {
  const { darkMode } = useTheme(); // Get the darkMode state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "candidate", // Default role
  });
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div
      className={`max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full p-2 border rounded ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
            required
          />
        </div>
        <div className="mb-4">
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
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className={`w-full p-2 border rounded ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            }`}
            required
          >
            <option value="candidate">candidate</option>
            <option value="employer">employer</option>
            <option value="admin">admin</option>
          </select>
        </div>
        <button
          type="submit"
          className={`w-full p-2 rounded ${
            darkMode
              ? "bg-blue-700 text-white hover:bg-blue-800"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
