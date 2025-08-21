import { useState } from "react";
// import { useAuth } from "./AuthContext";
import { v4 as uuid } from "uuid";
import { HabitContext } from "./HabitContext";

export const HabitProvider = ({ children }) => {
  // const { currentUser } = useAuth();
  const [habits, setHabits] = useState([]);

  const addHabit = ({ name, category, color }) => {
    const newHabit = {
      id: uuid(),
      name,
      category,
      color,
      progress: {
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
        Sun: false,
      },
    };
    setHabits((prev) => [...prev, newHabit]);
  };

  const toggleDay = (habitId, day) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habitId === habit.id
          ? {
              ...habit,
              progress: { ...habit.progress, [day]: !habit.progress[day] },
            }
          : habit
      )
    );
  };

  const removeHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  const clearHabits = () => {
    setHabits([]);
  };

  return (
    <HabitContext.Provider
      value={{ habits, addHabit, removeHabit, clearHabits, toggleDay }}
    >
      {children}
    </HabitContext.Provider>
  );
};
