import HomePage from './pages/HomePage'

export const routes = [
  {
    component: <HomePage />,
    id: 'HOME_PAGE',
    label: 'Home'
  },
  {
    component: <div>PORFILE</div>,
    id: 'PROFILE_PAGE',
    label: 'Profile'
  },
  {
    component: <div>SETTINGS</div>,
    id: 'SETTINGS_PAGE',
    label: 'Settings'
  }
]
