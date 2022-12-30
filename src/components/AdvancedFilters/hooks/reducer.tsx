export interface TaskProps {
  name: string
  done: boolean
}

export interface TaskStateProps {
  tasks: TaskProps[]
}

export interface PayloadProps {
  taskName: string
  done: boolean
}

export interface ActionProps {
  type: string
  payload: PayloadProps
}

export const initialState: TaskStateProps = {
  tasks: [
    { name: 'Philosopher’s Path', done: true },
    { name: 'Visit the temple', done: false },
    { name: 'Drink matcha', done: false }
  ]
}

export default function tasksReducer(
  state: TaskStateProps = initialState,
  action: ActionProps
): TaskStateProps {
  switch (action.type) {
    case 'add': {
      return {
        tasks: [
          ...state.tasks,
          {
            name: action.payload.taskName,
            done: action.payload.done
          }
        ]
      }
    }
    case 'delete': {
      return {
        tasks: state.tasks.filter((t) => t.name !== action.payload.taskName)
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
