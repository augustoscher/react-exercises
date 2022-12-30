import { TaskContextProvider } from './hooks/context'
import AddTask from './add-task'
import TaskList from './task-list'

export default function AdvancedFilters() {
  return (
    <>
      <h1>Day off in Blumenau</h1>
      <TaskContextProvider>
        <AddTask />
        <TaskList />
      </TaskContextProvider>
    </>
  )
}
