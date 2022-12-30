import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer
} from 'react'

import tasksReducer, {
  TaskStateProps,
  initialState,
  ActionProps
} from './reducer'

interface TaskContextProvider {
  children: ReactNode
}

interface TasksContext {
  state: TaskStateProps
  dispatch: Dispatch<ActionProps>
}

export const initialTaskContext: TasksContext = {
  state: { tasks: [] },
  dispatch: () => null
}

export const TaskContext = createContext(initialTaskContext)

export const useTaskContext = (): TasksContext => useContext(TaskContext)

export function TaskContextProvider({ children }: TaskContextProvider) {
  const [state, dispatch] = useReducer(tasksReducer, initialState)

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}
