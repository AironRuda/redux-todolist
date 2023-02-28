import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/task/taskSlice";

const TaskList = () => {
  // de todo el estado, solo espero el estado de las tareas "tasks"
  const tasks = useSelector((state) => state.tasks);
  // console.log(tasks);

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    // console.log(id);
    
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <header>
        <h1>total tasks {tasks.length}</h1>
        <Link to="create-task">create task</Link>
      </header>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={()=>{handleDelete(task.id)}}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
