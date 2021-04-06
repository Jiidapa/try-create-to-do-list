import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDo,
  updateTask,
  selectToDoList,
  removeTask,
} from "./toDoListSlice";
import styles from "./ToDoList.module.css";
import { ReactComponent as EmptyIcon } from "../../assets/empty-list2.svg";
import { ReactComponent as AddIcon } from "../../assets/plus.svg";

export default function ToDoList() {
  const [task, setTask] = useState<string>("");
  const dispatch = useDispatch();
  const list = useSelector(selectToDoList);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.layoutInput}>
          <div style={{ width: "100%" }}>
            <input
              placeholder="Add task"
              className={styles.inputAddTask}
              type="text"
              value={task}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTask(e.target.value)
              }
            />
          </div>
          <button
            className={styles.addButton}
            onClick={() => {
              dispatch(addToDo({ name: task }));
              setTask("");
            }}
          >
            <AddIcon className={styles.addIcon} />
          </button>
        </div>
        <div className={styles.content}>
          {list.length > 0 ? (
            <>
              {list.map((item: any, i: number) => (
                <div key={i} className={styles.layoutTask}>
                  <button
                    className={styles.buttonTask}
                    onClick={() => dispatch(updateTask({ index: i }))}
                    type="button"
                  >
                    {item.finish ? "✅" : "⭕️"}&nbsp;&nbsp;
                    {item.finish ? (
                      <s className={styles.textFinish}> {item.name}</s>
                    ) : (
                      <span> {item.name}</span>
                    )}{" "}
                  </button>

                  <button
                    className={styles.buttonDelete}
                    onClick={() => dispatch(removeTask({ index: i }))}
                    type="button"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </>
          ) : (
            <div className={styles.layoutEmptyList}>
              <div className={styles.emptyText}>Your list is empty</div>
              <div>
                <EmptyIcon className={styles.emptyListIcon} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
