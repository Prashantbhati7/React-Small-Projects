import { Navbar, Footer} from "../Components";

import React from 'react'
import { Outlet } from "react-router-dom";
function HomeLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default HomeLayout
