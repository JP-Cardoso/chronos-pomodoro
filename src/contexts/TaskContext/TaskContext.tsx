import { createContext } from "react";
import { TaskStateModel } from "../../models/task-state-model/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

export type TaskContextProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export const initContextValue = {
  state: initialTaskState,
  setState: () => { },
}

export const TaskContext = createContext<TaskContextProps>(initContextValue)