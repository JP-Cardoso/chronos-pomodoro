import { useEffect, useReducer, useState } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContext } from "./TaskContext"

export type TaskContextProviderProps = {
  children: React.ReactNode,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [state, setState] = useState(initialTaskState);

  const [number, dispatch] = useReducer((state, action) => {
    console.log(state, action);

    switch (action) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "INITIAL_STATE":
        return 0
    }

    return state;
  }, 0);

  // useEffect(() => {

  //   console.log(state);

  // }, [state])

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <>
        <h1>O número é {number}</h1>
        <button onClick={() => dispatch("INCREMENT")}>Incrementar</button>
        <button onClick={() => dispatch("DECREMENT")}>Decrementar</button>
        <button onClick={() => dispatch("INITIAL_STATE")}>Reiniciar</button>
      </>
    </TaskContext.Provider>
  )
}
