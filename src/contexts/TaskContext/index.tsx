import React, { createContext, useContext, useState } from "react";
import { TaskStateModel } from "../../models/task-state-model/TaskStateModel";

const INITIAL_STATE: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakModel: 15
  }
}

type TaskContextProps = {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const INIT_CONTEXT_VALUE = {
  state: INITIAL_STATE,
  setState: () => { },
}

export const TaskContext = createContext<TaskContextProps>(INIT_CONTEXT_VALUE)

type TaskContextProviderProps = {
  children: React.ReactNode,
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [state, setState] = useState(INITIAL_STATE)

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTaskContext() {
  return useContext(TaskContext);
}