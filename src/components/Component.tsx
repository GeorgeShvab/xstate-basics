import { useMachine } from '@xstate/react'
import { routerMachine } from '../machines/router'
import { routes } from '../routes'

// Just an example of how to use xState when we do not need a global state machine
const Component = () => {
  const [state, send] = useMachine(routerMachine)

  const handleTabClick = (id: string) => {
    console.log({ type: 'OPEN_' + id })
    send({ type: 'OPEN_' + id, data: 'dfds' })
  }

  return (
    <nav>
      <ul>
        {routes.map((item) => (
          <li key={item.id} onClick={() => handleTabClick(item.id)}>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Component
