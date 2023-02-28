import { useSelector } from "react-redux";

const TaskList = () => {
  // de todo el estado, solo espero el estado de las tareas "tasks"
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
