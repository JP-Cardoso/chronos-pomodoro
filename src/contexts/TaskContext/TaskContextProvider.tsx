import { useEffect, useReducer, useRef } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { TaskActionsEnum } from "./taskActions";
import { loadBeep } from "../../util/audio/loadBeep";

export type TaskContextProviderProps = {
  children: React.ReactNode,
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const playBeebRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {

      if (playBeebRef.current) {
        playBeebRef.current();
        playBeebRef.current = null;
      }

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
    if (!state.activeTask) {
      worker.terminete();
    };

    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`
    worker.postMessage(state);

  }, [state, worker]);

  useEffect(() => {
    if (state.activeTask && playBeebRef.current === null) {
      playBeebRef.current = loadBeep();
    } else {
      playBeebRef.current = null;
    }
  }, [state.activeTask])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
