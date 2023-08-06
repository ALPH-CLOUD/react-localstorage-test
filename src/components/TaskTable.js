import { TaskRow } from "./TaskRow";

export const TaskTable = ({tasks, toggleTask, showCompleted =false}) => {

  // Verificar si tasks es undefined o null antes de usar map
  if (!tasks) {
    return <div>No hay tareas disponibles.</div>;
  }

  const taskTableRows = (doneValue) => {

    return (
      tasks.filter(task => task.done === doneValue)
      .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
    ))
    )
  }

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
    <thead>
      <tr className="table-primary">
        <th>Tasks</th>
      </tr>
    </thead>
    <tbody>
      {
        taskTableRows(showCompleted)
      }
    </tbody>
  </table>
  )
}
