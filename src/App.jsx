import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React todos os dias as 19h",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Node",
      description: "Estudar Node todos os dias as 20h",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar JavaScript",
      description: "Estudar JavaScript todos os dias as 21h",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500" flex justitfy-center p-6>
      <div className="w-[500]">
        <h1 className="text-slate-100 text-3xl font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
