import { to } from "cli-color/move";
import React from "react";

export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr key={task.name}>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        ></input>
      </td>
    </tr>
  );
};
