import { assign, createMachine } from 'xstate'

// function that creates machine
export const routerMachine = createMachine(
  {
    // id (name) for our machine
    id: 'router',
    // initial state. State in Xstate is a string. It represents not
    // just data but particular condition of the entity
    initial: 'HOME_PAGE',
    // Context is a data store. We can pass data to the machine when we change its string state.
    // Very similer to Redux state or state in useState. The only difference is that our
    // components depends not context but on string state.
    // here we set initial context
    context: { prevPage: 'HOME_PAGE' },
    // States that our entity can be in. Each state can have substates.
    // In this case, I used router to demostrate it. We have 3 pages (parent states), and HOME_PAGE has subpages (substates)
    // Maybe, would be better to use some entity from real life, like dog that can be in different states (sleeping, eating, playing)
    states: {
      HOME_PAGE: {
        initial: 'FOLLOWING_PAGE',
        states: {
          FORYOU_PAGE: {
            // 'on' holds transitions. In other words, it holds events that can change state
            // In this case, events changes our HOME_PAGE state
            // These events inside of substates can be used only if root state is HOME_PAGE
            on: {
              // This particular event changes HOME_PAGE's substate to FOLLOWING_PAGE, so we see that subpage
              OPEN_FOLLOWING_PAGE: {
                target: 'FOLLOWING_PAGE',
                // set guards and actions
                guard: 'isValid',
                actions: 'prevPage'
                // here we can update machine's context
              }
            }
          },
          FOLLOWING_PAGE: {
            on: {
              // This event changes HOME_PAGE's substate to FORYOU_PAGE, so we see FORYOU_PAGE subpage of HOME_PAGE
              OPEN_FORYOU_PAGE: { target: 'FORYOU_PAGE' }
            }
          }
        }
      },
      // These are other states that our root can have
      PROFILE_PAGE: {},
      SETTINGS_PAGE: {}
    },
    // on holds transitions. In other words, it holds events that can change state
    // We can declare it inside of some particular state, but here I do it in root so it can be accessed by different states and substates
    // In this case, we have 3 events that can change state and set particular page
    // Notice, that we need to use #router. prefix to access particular state
    on: {
      OPEN_HOME_PAGE: { target: '#router.HOME_PAGE', actions: 'prevPage' },
      OPEN_PROFILE_PAGE: {
        target: '#router.PROFILE_PAGE',
        actions: 'prevPage'
      },
      OPEN_SETTINGS_PAGE: {
        target: '#router.SETTINGS_PAGE',
        actions: 'prevPage'
      }
    }
  },
  // here we pass options
  {
    guards: {
      // isValid guard we use above
      isValid: ({ context }) => {
        return context.prevPage !== null
      }
    },
    // actions are used to change machine's context
    actions: {
      // event.data holds passed in 'send' data
      prevPage: assign((context, event) => {
        return { prevPage: 'FOLLOWING_PAGE' }
      })
    }
  }
)
