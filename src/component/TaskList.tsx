import { observer } from "mobx-react";
import useStore from "../Hook";
import { TTaskStore } from "../Type";

function TaskList() {
  let { tasks, removeTask }: TTaskStore = useStore();

  return (
    <ul>
      {tasks.map((o, i) => (
        <li key={i} style={{ display: "flex" }}>
          <p style={{ margin: "0px" }}>{o.value}</p>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              removeTask(o.id);
            }}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default observer(TaskList);
