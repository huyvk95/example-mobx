export type TTask = { id: number; value: string };
export type TTaskStore = {
  tasks: TTask[];
  addTask: (task: string) => void;
  removeTask: (id: number) => void;
  totalTask: number;
};
