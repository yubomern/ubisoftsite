import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleComplete } from "../features/todos/todoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = () => {
    if (!text || !date) return;
    dispatch(addTodo({ text, date, completed: false }));
    setText("");
    setDate("");
  };

  return (
    <section className="p-4 border rounded max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Todo List & Service Calendar
      </h2>

      {/* 🔹 FORM (Responsive) */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="Todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded w-full sm:w-auto"
        />

        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded w-full sm:w-auto"
        >
          Add
        </button>
      </div>

      {/* 🔹 LIST */}
      <ul className="mt-4 space-y-2">
        {todos.map((t, i) => (
          <li
            key={i}
            className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between p-2 border rounded"
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => dispatch(toggleComplete(i))}
              />
              <span className={t.completed ? "line-through text-gray-500" : ""}>
                {t.text}
              </span>
            </label>

            <div className="flex justify-between items-center sm:gap-4">
              <small className="text-gray-500">{t.date}</small>
              <button
                onClick={() => dispatch(removeTodo(i))}
                className="text-red-600 font-bold"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
