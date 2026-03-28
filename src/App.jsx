import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (!taskInput.trim()) return;
    setTasks([...tasks, { text: taskInput, done: false }]);
    setTaskInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <h1 className="text-3xl font-semibold">Matthew&apos;s PA Dashboard</h1>
          <p className="text-slate-600 mt-2">Overzicht, focus en actie.</p>
        </header>

        <section className="bg-white rounded-3xl p-6 border shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Taken</h2>
          <div className="flex gap-2 mb-3">
            <input
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Nieuwe taak..."
              className="flex-1 border rounded-xl px-3 py-2"
            />
            <button onClick={addTask} className="bg-slate-900 text-white px-3 rounded-xl">
              +
            </button>
          </div>
          <div className="space-y-2">
            {tasks.map((t, i) => (
              <div
                key={i}
                onClick={() => toggleTask(i)}
                className={`p-3 rounded-xl border cursor-pointer ${t.done ? "line-through text-slate-400" : ""}`}
              >
                {t.text}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
