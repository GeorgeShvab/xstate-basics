import { FC, ReactNode } from 'react'

const Page: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        height: '400px',
        width: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: '48px'
      }}
    >
      {children}
    </div>
  )
}

export default Page
