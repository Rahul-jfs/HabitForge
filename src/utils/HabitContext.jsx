import { createContext, useContext } from "react";

export const HabitContext = createContext();

export const useHabit = () => useContext(HabitContext);
