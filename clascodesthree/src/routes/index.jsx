import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/home'
import AddPage from '../pages/home/addpage'
const RoutesCom = () => {
  return (
    <div>
      <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/addpage' element={<AddPage/>}/>
      </Routes>
    </div>
  )
}

export default RoutesCom
