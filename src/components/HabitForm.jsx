import { useState } from "react";

import { useHabit } from "../utils/HabitContext";

const HabitForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("#22c55e");

  const { addHabit } = useHabit();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || category === "") {
      return;
    }
    addHabit({ name, category, color });
    setName("");
    setCategory("");
    setColor("#22c55e");
  };

  return (
    <form
      className="shadow-lg rounded m-3 p-3 flex gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Habit Name"
        className="flex-1 border rounded-md p-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
    </form>
  );
};

export default HabitForm;
