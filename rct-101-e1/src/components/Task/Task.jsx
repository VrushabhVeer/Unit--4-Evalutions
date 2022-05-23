import React, { useState } from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter";
import { v4 as uuid} from "uuid";
import AddTask from "../AddTask/AddTask";

const Task = () => {
const [task , setTask] = useState([]);

const handleAdd = (title) => {
  const payload = {
    title,
    sattus:false,
    id: uuid()
  }
  setTask([...Task, payload])
}

const handleDelete =(id)=>{
    let deletTask = task.filter(task => task.id !==id);
    setTask(deletTask);
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">
      </div>
      {<Counter/>}
      <button data-cy="task-remove-button" onClick={() =>handleDelete(task.id)}>X</button>
    </li>
  );
};

export default Task;
