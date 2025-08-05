const HabitCard = ({ habits, handleDelete }) => {
  return (
    <div className="m-2 p-2 flex flex-col gap-3">
      {habits.map((habit) => (
        <div
          className="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-center"
          key={habit.id}
        >
          <div className="flex items-center gap-2 ">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: habit.color }}
            ></div>
            <div>
              <p className="font-semibold">{habit.name}</p>
              <p className="text-sm text-gray-500">{habit.category}</p>
            </div>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded font-bold cursor-pointer hover:bg-red-600"
            onClick={() => handleDelete(habit.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default HabitCard;
