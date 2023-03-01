import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/task/taskSlice";

const TaskList = () => {
  // de todo el estado, solo espero el estado de las tareas "tasks"
  const tasks = useSelector((state) => state.tasks);
  // console.log(tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // console.log(id);

    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>total tasks {tasks.length}</h1>
        <Link to="create-task" className="bg-indigo-600 p-2 rounded-sm text-sm">
          create task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex items-center">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-yellow-600 rounded-md mx-2 p-1"
                >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                  className="bg-red-600 rounded-md mx-2 p-1 self-center"
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
