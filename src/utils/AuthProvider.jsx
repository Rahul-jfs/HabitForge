import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() =>
    JSON.parse(localStorage.getItem("currentUser"))
  );    

  const login = (phone, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existing = users.find((u) => u.phone === phone);
    if (existing) {
      if (existing.password === password) {
        localStorage.setItem("currentUser", JSON.stringify(existing));
        setCurrentUser(existing);
        return { success: true };
      }
      return { success: false, error: "Wrong password" };
    } else {
      const newUser = { phone, password };
      const updatedUsers = [...users, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      setCurrentUser(newUser);
      return { success: true };
    }
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
