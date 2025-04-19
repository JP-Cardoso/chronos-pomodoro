import { createContext } from "react";
import { TaskStateModel } from "../../models/task-state-model/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import { TaskActionsModel } from "./taskActions";

export type TaskContextProps = {
  state: TaskStateModel,
  dispatch: React.Dispatch<TaskActionsModel>;
}

export const initContextValue = {
  state: initialTaskState,
  dispatch: () => { },
}

export const TaskContext = createContext<TaskContextProps>(initContextValue)