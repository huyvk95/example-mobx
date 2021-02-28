import {
  makeObservable,
  observable,
  action,
  computed,
  reaction,
  autorun,
  when,
} from "mobx";
import { TTaskStore } from "./Type";
import { TTask } from "./Type";

const TASKS_LOCAL = "TASKS";

class TaskStore implements TTaskStore {
  tasks: TTask[] = [];
  constructor() {
    makeObservable(this, {
      tasks: observable,
      totalTask: computed,
      addTask: action,
      removeTask: action,
    });

    autorun(() => console.log(`Task ${this.tasks.slice()}`));

    reaction(
      () => this.totalTask,
      (totalTask) => console.log(`You have total ${totalTask} tasks`)
    );

    when(
      () => this.totalTask >= 3,
      () => console.log(`You reached 3 tasks`)
    );

    this.loadTask();
  }

  addTask = (task: string) => {
    this.tasks.push({ id: Math.round(Math.random() * 1000), value: task });
    this.saveTask();
  };

  removeTask = (id: number) => {
    console.log("Remove task:", id);
    this.tasks = this.tasks.filter((o) => o.id !== id);
    this.saveTask();
  };

  loadTask = () => {
    let local = localStorage.getItem(TASKS_LOCAL) || "[]";
    this.tasks = JSON.parse(local);
  };

  saveTask = () => {
    localStorage.setItem(TASKS_LOCAL, JSON.stringify(this.tasks));
  };

  get totalTask() {
    return this.tasks.length;
  }
}

let taskStore = new TaskStore();

export default taskStore;
