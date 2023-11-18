import React, {useState} from 'react';
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };


  return (
    <div>
      <button className={classes.btn} onClick={increment}>+</button>
      <h3>{count}</h3>
      <button className={classes.btn} onClick={decrement}>-</button>
    </div>
  );
};