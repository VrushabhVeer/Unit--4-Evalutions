import React from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [title, setTitle] = React.useState("");

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text"
        placeholder="Add task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <button data-cy="add-task-button"
        onClick={() => (title, setTitle(""))}>
        +
      </button>
    </div>
  );
};

export default AddTask;
