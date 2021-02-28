import { observer } from "mobx-react";
import TaskList from "./component/TaskList";
import TaskForm from "./component/TaskForm";

function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default observer(App);
