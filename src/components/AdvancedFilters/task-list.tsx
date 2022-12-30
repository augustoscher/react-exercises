import { useTaskContext } from './hooks/context'

export default function TaskList() {
  const {
    state: { tasks }
  } = useTaskContext()

  return (
    <ul>
      {tasks.map((item, idx) => (
        <li key={idx}>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  )
}
