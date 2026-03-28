import { useState } from "react";

type Task = {
  text: string;
  done: boolean;
};

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [brainDump, setBrainDump] = useState<string[]>([]);
  const [dumpInput, setDumpInput] = useState("");

  const addTask = () => {
    if (!taskInput.trim()) return;
    setTasks([...tasks, { text: taskInput, done: false }]);
    setTaskInput("");
  };

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const addDump = () => {
    if (!dumpInput.trim()) return;
    setBrainDump([...brainDump, dumpInput]);
    setDumpInput("");
  };

  const quickActions = [
    "Weekplanning",
    "WhatsApp",
    "Preek",
    "Meeting",
    "Focus",
  ];

  const menu = [
    "Dashboard",
    "Vandaag",
    "Agenda",
    "Taken",
    "Preken",
    "Leiderschap",
    "Performeals",
    "Persoonlijk",
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <aside className="hidden w-64 border-r border-slate-200 bg-white p-6 md:block">
        <h2 className="mb-6 text-xl font-semibold">PA</h2>
        <nav className="space-y-3">
          {menu.map((item) => (
            <div
              key={item}
              className="cursor-pointer rounded-xl px-3 py-2 text-sm hover:bg-slate-100"
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 space-y-6 p-6 md:p-10">
        <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-semibold">Matthew’s PA Dashboard</h1>
          <p className="mt-2 text-slate-600">Overzicht, focus en actie.</p>
        </header>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">Praat met je PA</h2>
          <div className="flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Typ hier wat je nodig hebt..."
              className="flex-1 rounded-xl border px-4 py-3"
            />
            <button className="rounded-xl bg-slate-900 px-5 text-white">
              Go
            </button>
          </div>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Snelle acties</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {quickActions.map((a) => (
              <div
                key={a}
                className="rounded-xl bg-slate-100 p-3 text-center text-sm"
              >
                {a}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Taken</h2>
            <div className="mb-3 flex gap-2">
              <input
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Nieuwe taak..."
                className="flex-1 rounded-xl border px-3 py-2"
              />
              <button
                onClick={addTask}
                className="rounded-xl bg-slate-900 px-3 text-white"
              >
                +
              </button>
            </div>
            <div className="space-y-2">
              {tasks.map((t, i) => (
                <div
                  key={i}
                  onClick={() => toggleTask(i)}
                  className={`cursor-pointer rounded-xl border p-3 ${
                    t.done ? "line-through text-slate-400" : ""
                  }`}
                >
                  {t.text}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Braindump</h2>
            <div className="mb-3 flex gap-2">
              <input
                value={dumpInput}
                onChange={(e) => setDumpInput(e.target.value)}
                placeholder="Dump je gedachten..."
                className="flex-1 rounded-xl border px-3 py-2"
              />
              <button
                onClick={addDump}
                className="rounded-xl bg-slate-900 px-3 text-white"
              >
                +
              </button>
            </div>
            <div className="space-y-2 text-sm">
              {brainDump.map((d, i) => (
                <div key={i} className="rounded-xl border bg-slate-50 p-2">
                  {d}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Weekplanning</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map((day) => (
                <div
                  key={day}
                  className="rounded-xl border bg-slate-50 p-3 text-center"
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Agenda</h2>
          <p className="text-sm text-slate-500">
            (Koppel straks Google Calendar)
          </p>
        </section>
      </main>
    </div>
  );
}