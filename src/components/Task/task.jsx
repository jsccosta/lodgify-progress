import "./styles.scss";

import { Checkbox } from "../Checkbox/checkbox";
import { findNestedObj } from "../../helpers";

export const Task = ({ task, setTaskGroupings, taskGroupings }) => {
  return (
    <div className="task">
      <Checkbox
        id={task.description}
        isChecked={task.checked}
        onChangeHandler={(incomingCheck) => {
          const currentVal = findNestedObj(taskGroupings, task.description);

          const taskGroupingsCopy = structuredClone(taskGroupings);
          taskGroupingsCopy
            .find((task) => task.name === currentVal.name)
            .tasks.find(
              (task) => task.description === currentVal.task.description
            ).checked = incomingCheck;

          setTaskGroupings([...taskGroupingsCopy]);
        }}
      />
      <label htmlFor={task.description}>{task.description}</label>
    </div>
  );
};
