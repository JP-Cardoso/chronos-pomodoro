import { useEffect, useReducer } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionsEnum } from "./taskActions";

export type TaskContextProviderProps = {
  children: React.ReactNode,
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      console.log('Worker completed');
      dispatch({ type: TaskActionsEnum.COMPLETE_TASK });
      worker.terminete();
    } else {
      dispatch({
        type: TaskActionsEnum.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds }
      });
    }
  })

  useEffect(() => {
    console.log(state);

    if (!state.activeTask) {
      console.log('Worker terminado por falta de activeTask');
      worker.terminete();
    };

    worker.postMessage(state);

  }, [state, worker]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
