import styles from "./counter.module.css";
import React, { useState } from "react";

const Counter = () => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair

  const [count, setCount] = useState(0);

  const buttonClick = (e) =>
  {
    if(e.target.name == "inc")
    {
      setCount(count +1);
    }
    else
    {
      setCount(count -1);
    }
  }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" name="inc" onClick={buttonClick}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" name="dec" onClick={buttonClick}>-</button>
    </div>
  );
};

export default Counter;
