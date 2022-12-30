import { useState } from 'react'
import { useTaskContext } from './hooks/context'

export default function AddTask() {
  const [task, setTask] = useState('')
  const { dispatch } = useTaskContext()

  const handleAdd = () => {
    dispatch({
      type: 'add',
      payload: {
        taskName: task,
        done: false
      }
    })
  }

  return (
    <>
      <input
        type="text"
        placeholder="add a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" name="add" onClick={handleAdd}>
        add
      </button>
    </>
  )
}
