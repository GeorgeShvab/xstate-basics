import { createContext, FC, ReactNode } from 'react'
import { createActorContext } from '@xstate/react'
import { routerMachine } from './machines/router'

export const RouterMachine = createActorContext(routerMachine)

export const RouterProvider: FC<{ children: ReactNode }> = (props) => {
  return <RouterMachine.Provider>{props.children}</RouterMachine.Provider>
}
