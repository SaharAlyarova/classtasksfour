

import './App.css'
import FooterLay from './layouts/footer'
import HeaderLay from './layouts/header'
import RoutesCom from './routes'
import "./style.scss"
function App() {


  return (
    <div className="App">
      <HeaderLay/>
     <RoutesCom/>
     <FooterLay/>
    </div>
  )
}

export default App
