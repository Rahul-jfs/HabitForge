import { useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router";
import ThemeButton from "./ThemeButton";
import { useTheme } from "../utils/ThemeContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { darkMode } = useTheme();

  const handleLogin = (e) => {
    e.preventDefault();
    if (phone.length !== 10 || password.length !== 4) {
      setError("Enter valid 10-digit phone and 4-digit password");
      return;
    }
    const result = login(phone, password);
    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.error);
    }
  };

  return (
    <div>
      <div
        className={`min-h-screen flex items-center justify-center bg-gray-100 p-6  ${
          darkMode ? "dark" : ""
        }`}
      >
        <form
          onSubmit={handleLogin}
          className={`bg-white p-6 rounded shadow-md w-full max-w-md ${
            darkMode ? "dark containerDark" : ""
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Login / Sign Up</h2>
          <input
            type="text"
            placeholder="Phone (10 digits)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            placeholder="4-digit Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Enter
          </button>
        </form>
      </div>
      <div className="absolute top-5 right-5">
        <ThemeButton />
      </div>
    </div>
  );
}
