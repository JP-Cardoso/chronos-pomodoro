import { SaveIcon } from "lucide-react";
import Container from "../../components/Container";
import DefaultButton from "../../components/DefaultButton";
import DefaultInput from "../../components/DefaultInput";
import Heading from "../../components/Heading";
import MainTemplete from "../../template/MainTemplete";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../_adapters/Toastify/showMessage";
import { TaskActionsEnum } from "../../contexts/TaskContext/taskActions";

export default function SettingsPage() {

  useEffect(() => {
    document.title = "Configurações - Chronos Pomodoro";
  }, [])

  const { state, dispatch } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);


  function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    const formErrors: Array<string> = [];

    const workTime: number = Number(workTimeInputRef.current?.value);
    const shortBreakTime: number = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime: number = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || !workTime || workTime === 0) {
      formErrors.push("Por favor use apenas números para foco");
    }

    if (isNaN(shortBreakTime) || !shortBreakTime || shortBreakTime === 0) {
      formErrors.push("Por favor use apenas números para descanso curto");
    }

    if (isNaN(longBreakTime) || !longBreakTime || longBreakTime === 0) {
      formErrors.push("Por favor use apenas números para descanso longo");
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para foco');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso curto');
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('Digite valores entre 1 e 60 para descanso longo');
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error: string) => {
        showMessage.error(error)
      });
      return;
    }
    dispatch({
      type: TaskActionsEnum.CHANGE_SETTINGS,
      payload: { workTime, shortBreakTime, longBreakTime },
    });

    showMessage.success("Configurações salvas")
  }

  return (
    <MainTemplete>

      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para tempo de foco, descanso curto e descanso longo
        </p>
      </Container>

      <Container>
        <form action="" className="form" onSubmit={(e) => handleSaveSettings(e)}>
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labelText="Foco"
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type="number"
              max={99}
              maxLength={2}
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              labelText="Descanso curto"
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
              type="number"
              max={30}
              maxLength={2}
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              labelText="Descanso longo"
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
              type="number"
              max={60}
              maxLength={2}
            />
          </div>
          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplete>
  )
}