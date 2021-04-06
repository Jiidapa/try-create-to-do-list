import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDo,
  updateTask,
  selectToDoList,
  removeTask,
} from "./toDoListSlice";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
  const [task, setTask] = useState<string>("");
  const dispatch = useDispatch();
  const list = useSelector(selectToDoList);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div>
          <input
            type="text"
            value={task}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTask(e.target.value)
            }
          />
        </div>
        <button
          onClick={() => {
            dispatch(addToDo({ name: task }));
            setTask("");
          }}
        >
          add
        </button>
        <div>
          <div>Results:</div>
          {list.map((item: any, i: number) => (
            <div key={i}>
              {item.name}
              {item.finish.toString()}
              <button
                onClick={() => dispatch(updateTask({ index: i }))}
                type="button"
              >
                done
              </button>

              <button
                onClick={() => dispatch(removeTask({ index: i }))}
                type="button"
              >
                remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
