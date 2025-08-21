import { useAuth } from "../utils/AuthContext";
import { useHabit } from "../utils/HabitContext";
import HabitCard from "../components/HabitCard";
import HabitForm from "../components/HabitForm";
import { useNavigate } from "react-router";
// import { useTheme } from "../utils/ThemeContext";

export default function Dashboard() {
  const { logout, currentUser } = useAuth();
  const { habits, clearHabits } = useHabit();
  const navigate = useNavigate();
  //   const { darkMode, toggleMode } = useTheme();

  return (
    <div className={`p-4 bg-gray-50 min-h-screen`}>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Welcome, {currentUser.phone}</h1>
        <div className="space-x-2">
          {habits.length !== 0 ? (
            <button
              onClick={clearHabits}
              className={`text-sm bg-red-500 px-3 py-1 rounded`}
            >
              Clear Habits
            </button>
          ) : null}
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="text-sm bg-gray-700 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </header>
      <HabitForm />
      <div className="mt-6 space-y-4">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  );
}
