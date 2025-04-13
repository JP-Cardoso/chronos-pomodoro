import { PlayCircleIcon } from "lucide-react";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import DefaultInput from "../DefaultInput";
import { useRef } from "react";
import { TaskModel } from "../../models/task-model/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";

type FormEvent = {} & React.FormEvent<HTMLFormElement>;


export default function MainForm() {
  const { state, setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);

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
      duration: 1,
      type: "workTime",
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle, 
        secondsRemaining, //conferir
        formattedSecondsRemaining: '00:00', //conferir
        tasks: [
          ...prevState.tasks,
          newTask
        ],
        config: { ...prevState.config }
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
          />
        </div>

        <div className="formRow">
          <p>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="formRow">
          <Cycles />
        </div>
        <div className="formRow">
          <DefaultButton
            icon={<PlayCircleIcon />}
            color='red'
          />
        </div>
      </form>
    </>
  );
}