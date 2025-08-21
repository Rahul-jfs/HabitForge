import { useHabit } from "../utils/HabitContext";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const HabitCard = ({ habit }) => {
  const { toggleDay, removeHabit } = useHabit();
  const streak = Object.values(habit.progress).filter(Boolean).length;

  return (
    <div
      className={`bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-center `}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: habit?.color }}
        ></div>
        <div>
          <p className="font-semibold">{habit?.name}</p>
          <p className="text-sm text-gray-500">{habit?.category}</p>
          <p className="text-xs text-green-600">Streak: {streak}</p>
        </div>
      </div>

      <div className="flex gap-2 items-center mt-3 md:mt-0">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => toggleDay(habit.id, day)}
            className={`w-8 h-8 rounded-full text-xs font-bold cursor-pointer ${
              habit.progress[day] ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            {day[0]}
          </button>
        ))}
        <div className="ml-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-full cursor-pointer"
            onClick={() => removeHabit(habit.id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
