import { useState } from "react";
import { v4 as uuid } from "uuid";

const HabitForm = ({ setHabits }) => {
  const [habit, setHabit] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("#22c55e");

  const handleSubmit = () => {
    if (habit === "" || category === "") {
      return;
    }
    const newHabit = {
      id: uuid(),
      name: habit,
      category: category,
      color: color,
    };
    setHabits((prev) => [...prev, newHabit]);

    setHabit("");
    setCategory("");
    setColor("#22c55e");
  };

  return (
    <div className="shadow-lg rounded m-3 p-3 flex gap-2">
      <input
        type="text"
        placeholder="Habit Name"
        className="flex-1 border rounded-md p-1"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        className="flex-1 border rounded-md p-1"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="color"
        name="color"
        className="border w-16 h-10 rounded-md"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Add Habit
      </button>
    </div>
  );
};

export default HabitForm;
