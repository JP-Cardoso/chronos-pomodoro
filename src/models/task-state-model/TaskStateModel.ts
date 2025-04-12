import { TaskModel } from "../task-model/TaskModel";

export type ConfigWork = {
  workTime: number,
  shortBreakTime: number,
  longBreakModel: number
}

export type TaskStateModel = {
  tasks: Array<TaskModel>;
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: ConfigWork;
}