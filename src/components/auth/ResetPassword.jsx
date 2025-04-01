import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import api from "../../services/api";

const ResetPassword = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const { token } = useParams();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post(`/auth/reset-password/${token}`, {
        password: formData.password,
      });
      setMessage(response.data.msg);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.msg || "Error resetting password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
      {message && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
          {message}
        </div>
      )}
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">New Password</label>
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
          <label className="block mb-2">Confirm New Password</label>
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
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-2 rounded ${
            darkMode
              ? "bg-blue-700 text-white hover:bg-blue-800"
              : "bg-blue-500 text-white hover:bg-blue-600"
          } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
      <p className="mt-4 text-center">
        Remember your password?{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-blue-500 hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default ResetPassword; 