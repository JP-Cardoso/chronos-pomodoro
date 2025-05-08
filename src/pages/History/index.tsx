import styles from "./styles.module.css";

import { TrashIcon } from "lucide-react";
import Container from "../../components/Container";
import DefaultButton from "../../components/DefaultButton";
import Heading from "../../components/Heading";
import MainTemplete from "../../template/MainTemplete";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../util/date/formatDate";
import { getTaskStatus, taskTypeDictionary } from "../../util/tasks/getTaskStatus";
import { sortTasks, SortTasksOptions } from "../../util/tasks/sortedTasks";
import { useEffect, useState } from "react";
import { TaskActionsEnum } from "../../contexts/TaskContext/taskActions";
import { showMessage } from "../../_adapters/Toastify/showMessage";

export default function HistoryPage() {

  useEffect(() => {
    document.title = "Histórico - Chronos Pomodoro";
  }, [])

  const { state, dispatch } = useTaskContext();
  const [confirmClearHistory, setConfirmHistory] = useState<boolean>(false);

  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(() => {
    return {
      tasks: sortTasks({ tasks: state.tasks }),
      field: "startDate",
      direction: "desc",
    }
  });

  const hasTasks = state.tasks.length > 0;

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {

    const newDiraction = sortTasksOptions.direction === "desc" ? "asc" : "desc";

    setSortTasksOptions({
      tasks: sortTasks({
        direction: newDiraction,
        tasks: sortTasksOptions.tasks,
        field
      }),
      direction: newDiraction,
      field,
    })
  }

  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.confirm("Tem certeza?", (confirmation) => {
      setConfirmHistory(confirmation)
    });
  }

  useEffect(() => {
    setSortTasksOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  useEffect(() => {
    if (!confirmClearHistory) return;
    dispatch({ type: TaskActionsEnum.RESET_STATE });

    setConfirmHistory(false);
  }, [confirmClearHistory, dispatch]);

  useEffect(() => {
    showMessage.dismiss();
  }, [])

  return (
    <MainTemplete>

      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color="red"
              aria-label="Apagar todo o histórico"
              title="Apagar histórico"
              onClick={() => handleResetHistory()}
            />
          </span>
        </Heading>
      </Container>

      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th className={styles.thSort} onClick={() => handleSortTasks({ field: 'name' })}>Tarefa</th>
                  <th className={styles.thSort} onClick={() => handleSortTasks({ field: 'duration' })}>Duração</th>
                  <th className={styles.thSort} onClick={() => handleSortTasks({ field: 'startDate' })}>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {sortTasksOptions?.tasks?.map((task) => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary(task.type)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
        {!hasTasks && (
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Ainda não existem tarefas criadas.
          </p>
        )}
      </Container>
    </MainTemplete>
  )
}