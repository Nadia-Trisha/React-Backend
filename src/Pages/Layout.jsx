import React from 'react'

import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import {Outlet} from 'react-router-dom'
import Sidebar from '../Component/Sidebar'

export default function() {
  return (
    <div id="wrapper">
       <Sidebar></Sidebar>
       {/* hello */}
    
    {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">

              {/* <!-- Main Content --> */}
            <div id="content">
              {/* <!-- Topbar --> */}
                <Navbar></Navbar>
                <Outlet></Outlet>
                </div>
            {/* <!-- End of Main Content --> */}

           
            <Footer/>
           

        </div>
        {/* <!-- End of Content Wrapper --> */}

    </div>
  )
}
