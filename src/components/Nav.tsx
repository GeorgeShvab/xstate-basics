import { routes } from '../routes'
import { RouterMachine } from '../Provider'

const Nav = () => {
  // To send events, we use send returned from useActorRef hook
  const { send } = RouterMachine.useActorRef()

  // To access machine's state, we use useSelector hook
  const state = RouterMachine.useSelector((state) => state.value)

  const handleTabClick = (id: string) => {
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

export default Nav
