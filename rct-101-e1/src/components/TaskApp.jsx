import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import { Counter } from "./Counter";

import styles from "./taskApp.module.css";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {<AddTask/>}
      {<Task/>}
    </div>
  );
};

export default TaskApp;
