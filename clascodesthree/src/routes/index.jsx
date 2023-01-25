import React from 'react'
import {Routes, Route} from 'react-router-dom'
import DetailPage from '../pages/detail'
import HomePage from '../pages/home'
import AddPage from '../pages/home/addpage'
const RoutesCom = () => {
  return (
    <div>
      <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/addpage' element={<AddPage/>}/>
<Route path='/:_id' element={<DetailPage/>}/>
      </Routes>
    </div>
  )
}

export default RoutesCom
