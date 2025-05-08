import { TaskModel } from "../../models/task-model/TaskModel";
import { TaskStateModel } from "../../models/task-state-model/TaskStateModel";
import { formatSecondsToMinutes } from "../../util/formatSecondsToMinutes";
import { getNextCycle } from "../../util/getNextCycle";
import { initialTaskState } from "./initialTaskState";
import { TaskActionsEnum, TaskActionsModel } from "./taskActions";

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionsModel
): TaskStateModel {

  switch (action.type) {
    case TaskActionsEnum.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [
          ...state.tasks,
          newTask
        ],
      }
    }
    case TaskActionsEnum.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: state.tasks.map((task: TaskModel) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() }
          }
          return task;
        })
      };
    }
    case TaskActionsEnum.RESET_STATE: {
      return { ...initialTaskState };
    }
    case TaskActionsEnum.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(action.payload.secondsRemaining)
      };
    }
    case TaskActionsEnum.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: state.tasks.map((task: TaskModel) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, compliteDate: Date.now() }
          }
          return task;
        })
      };
    }
    case TaskActionsEnum.CHANGE_SETTINGS: {
      return { ...state, config: { ...action.payload } };
    }
  }

  return state;
}