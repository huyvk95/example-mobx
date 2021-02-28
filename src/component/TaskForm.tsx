import { SyntheticEvent, useState } from "react";
import { TTaskStore } from "../Type";
import useStore from "../Hook";

export default function TaskForm() {
  let { addTask }: TTaskStore = useStore();
  let [input, setInput] = useState("");

  const onChaneInput = (e: SyntheticEvent) => {
    setInput((e.currentTarget as any).value);
  };

  const onClickAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div>
      <input type="text" value={input} onChange={onChaneInput} />
      <button onClick={onClickAdd}>Add</button>
    </div>
  );
}
