import { useActor, useMachine, useSelector } from '@xstate/react'
import { FC, useEffect } from 'react'
import { routerMachine } from '../machines/router'
import { routes } from '../routes'
import { RouterMachine } from '../Provider'

const Nav = () => {
  const { send } = RouterMachine.useActorRef()

  const state = RouterMachine.useSelector((state) => state.value)

  const handleTabClick = (id: string) => {
    console.log({ type: 'OPEN_' + id })
    send({ type: 'OPEN_' + id, data: 'dfds' })
  }

  return (
    <nav>
      <ul>
        {routes.map((item) => (
          <li
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            style={
              {
                //color: state.match(item.id) ? 'black' : 'grey'
              }
            }
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
