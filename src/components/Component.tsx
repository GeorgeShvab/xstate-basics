import { useMachine } from '@xstate/react'
import { routerMachine } from '../machines/router'

const Component = () => {
  const [state, send] = useMachine(routerMachine)

  const handleTabClick = (id: string) => {
    send({ type: 'OPEN_' + id, data: 'sdfsd' })
  }

  return <div></div>
}

export default Component
