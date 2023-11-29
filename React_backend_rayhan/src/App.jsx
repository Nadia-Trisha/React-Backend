import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import Topbar from './Components/Topbar'

function App() {

  return (
    <>
      <div id='page-top'>
        <div id="wrapper">
          <Sidebar></Sidebar>

          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>
              <Outlet></Outlet>
            </div>
            <Footer></Footer>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
