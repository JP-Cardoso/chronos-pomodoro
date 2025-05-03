import { TaskModel } from "../../models/task-model/TaskModel";

type TaskType = 'workTime' | 'shortBreakTime' | 'longBreakTime';


export function getTaskStatus(
  task: TaskModel,
  activeTask: TaskModel | null
): string {
  if (task.compliteDate) return "Completa";
  if (task.interruptDate) return "Interrompida";
  if (task.id === activeTask?.id) return "Em progresso";
  return "Abandonada";
}

export function taskTypeDictionary(type: TaskType): string {
  const data = {
    workTime: "Foco",
    shortBreakTime: "Descanso curto",
    longBreakTime: "Descanso longo",
  }

  return data[type] || '-'
}