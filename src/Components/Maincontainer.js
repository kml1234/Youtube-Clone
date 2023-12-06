import React from 'react'

import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'


function Maincontainer() {
  
  
  return (
    <div className="mt-0">
     
       <VideoContainer />
    </div>
  )
}

export default Maincontainer
