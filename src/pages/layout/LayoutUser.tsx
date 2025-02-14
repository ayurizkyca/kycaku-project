import React, { ReactNode } from 'react'
import Navbar from '../../component/Navbar'

interface Props {
  children: ReactNode;
}

const LayoutUser: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default LayoutUser