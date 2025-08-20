import { useEffect, useState } from "react";

import HabitForm from "./HabitForm";
import HabitCard from "./HabitCard";

const HomePage = () => {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem("habits");
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const handleDelete = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  return (
    <div>
      <div className="m-2 p-2 flex justify-between">
        <h1 className="font-bold text-2xl">Welcome</h1>
        {habits.length === 0 ? null : (
          <button
            className="bg-red-600 px-4 py-1 rounded text-white cursor-pointer hover:bg-red-700"
            onClick={() => {
              setHabits([]);
              localStorage.removeItem("habits");
            }}
          >
            Clear Habits
          </button>
        )}
      </div>
      <div>
        <HabitForm setHabits={setHabits} />
      </div>

      <HabitCard handleDelete={handleDelete} habits={habits} />
    </div>
  );
};

export default HomePage;
