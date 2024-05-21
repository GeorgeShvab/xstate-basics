import { FC } from 'react'
import { routes } from './routes'
import { RouterMachine } from './Provider'

const Router: FC = () => {
  const state = RouterMachine.useSelector((state) => state.value)

  const pageId = typeof state === 'string' ? state : Object.keys(state)[0]

  return routes.find((item) => item.id === pageId)?.component
}

export default Router
