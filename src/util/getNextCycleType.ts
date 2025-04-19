//FizzBuzz -> Fizz, Buzz, FizzBuzz

import { TaskModel } from "../models/task-model/TaskModel";

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return "longBreakTime";
  if (currentCycle % 2 === 0) return "shortBreakTime";
  return "workTime";
}