import React from 'react'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'

import Maincontainer from './Maincontainer'
import ButtonList from './ButtonList'

export default function Body() {
  return (
    < div className="grid grid-flow-col">
      <Sidebar/>
      <Outlet/>

      </div>
     
    
  )
}
