import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { useRef } from "react";
import { TaskModel } from "../../models/task-model/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../util/getNextCycle";
import { getNextCycleType } from "../../util/getNextCycleType";
import { TaskActionsEnum } from "../../contexts/TaskContext/taskActions";
import Tips from "../TIps";
import { showMessage } from "../../_adapters/Toastify/showMessage";

type FormEvent = {} & React.FormEvent<HTMLFormElement>;

export default function MainForm() {
  const { state, dispatch } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastNameTask = state.tasks.at(-1)?.name || "";

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    showMessage.dismiss();

    if (!taskNameInput.current) return;

    const taskName = String(taskNameInput.current.value).trim();

    if (!taskName) {
      showMessage.warn("Digite o nome da tarefa!");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      compliteDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionsEnum.START_TASK, payload: newTask });
    showMessage.success("Tarefa iniciada!")
  }

  function handleInterruptTask() {
    showMessage.dismiss();
    showMessage.error("Tarefa interrompida!");
    dispatch({ type: TaskActionsEnum.INTERRUPT_TASK })
  }

  return (
    <>
      <form
        action=""
        className="form"
        onSubmit={(event) => handleCreateNewTask(event)}
      >
        <div className="formRow">
          <DefaultInput
            id='meuInput'
            type='text'
            labelText='task'
            placeholder='Digite algo'
            ref={taskNameInput}
            disabled={!!state.activeTask}
            defaultValue={lastNameTask}
          />
        </div>

        <div className="formRow">
          <Tips />
        </div>
        {state.currentCycle > 0 && (
          <div className="formRow">
            <Cycles />
          </div>
        )}
        <div className="formRow">
          {!state.activeTask && (
            <DefaultButton
              icon={<PlayCircleIcon />}
              type="submit"
              aria-label="Iniciar nova tarefa"
              title="Iniciar nova tarefa"
              key={'btn_submit'}
            />
          )}

          {!!state.activeTask && (
            <DefaultButton
              icon={<StopCircleIcon />}
              type="button"
              aria-label="Interromper tarefa atual"
              title="Interromper tarefa atual"
              color="red"
              onClick={() => handleInterruptTask()}
              key={'btn_button'}
            />
          )
          }
        </div>
      </form>
    </>
  );
}