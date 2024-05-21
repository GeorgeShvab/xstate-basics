import { RouterMachine } from '../Provider'

// routes inside HOME_PAGE subrouter
const routes = [
  {
    component: <div>FOLLOWING</div>,
    id: 'FOLLOWING_PAGE',
    label: 'FOLLOWING'
  },
  {
    component: <div>FOR YOU</div>,
    id: 'FORYOU_PAGE',
    label: 'FOR YOU'
  }
]

const HomePage = () => {
  // To send events, we use useActorRef hook
  const { send } = RouterMachine.useActorRef()

  // To access machine's state, we use useSelector hook
  const state = RouterMachine.useSelector((state) => state.value)

  const handleTabClick = (id: string) => {
    // Send an event to the machine, pass data as data
    send({ type: 'OPEN_' + id, data: 'Some data' })
  }

  const pageId = state['HOME_PAGE']

  return (
    <div>
      <div>HOME</div>
      <nav>
        <ul>
          {routes.map((item) => (
            <li
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              style={{}}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
      {routes.find((item) => item.id === pageId)?.component}
    </div>
  )
}

export default HomePage
