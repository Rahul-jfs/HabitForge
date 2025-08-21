import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { AuthProvider } from "./utils/AuthProvider";
import { HabitProvider } from "./utils/HabitProvider";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <AuthProvider>
      <HabitProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </HabitProvider>
    </AuthProvider>
  );
};

export default App;
