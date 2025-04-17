import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { useRef } from "react";
import { TaskModel } from "../../models/task-model/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

type FormEvent = {} & React.FormEvent<HTMLFormElement>;


export default function MainForm() {
  const { state, setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (!taskNameInput.current) return;

    const taskName = String(taskNameInput.current.value).trim();

    if (!taskName) {
      alert("Digite o nome da tarefa");
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

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, //conferir
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), //conferir
        tasks: [
          ...prevState.tasks,
          newTask
        ],
        config: { ...prevState.config }
      }
    })
  }

  function handleInterruptTask() {
    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: prevState.tasks.map((task) => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        })
      }
    })
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
            // defaultValue='Valor preenchido'
            ref={taskNameInput}
            disabled={!!state.activeTask}
          />
        </div>

        <div className="formRow">
          <p>
            Lorem ipsum dolor sit amet.
          </p>
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