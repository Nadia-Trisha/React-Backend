import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Component/Sidebar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Pages/Layout'
import AdminHome from './Pages/AdminHome'



function App() {
  

  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}/>
           <Route index element={<AdminHome/>}>
              
            </Route>
            <Route/>
        </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
