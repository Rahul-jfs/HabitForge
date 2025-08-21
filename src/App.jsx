import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { AuthProvider } from "./utils/AuthProvider";
import { HabitProvider } from "./utils/HabitProvider";
import Dashboard from "./components/Dashboard";
import ThemeProvider from "./utils/ThemeProvider";
import { useAuth } from "./utils/AuthContext";

const Protected = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <HabitProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route
                path="/dashboard"
                element={
                  <Protected>
                    <Dashboard />
                  </Protected>
                }
              />
            </Routes>
          </BrowserRouter>
        </HabitProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
