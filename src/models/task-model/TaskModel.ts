import { ConfigWork } from "../task-state-model/TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  compliteDate: number | null;
  interruptDate: number | null;
  type: keyof ConfigWork;
}