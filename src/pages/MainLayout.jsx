import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Header from './Header';
function MainLayout({dark , cilckDark}) {
  return (
    <div className={`${dark  ? "app2" : "app" } h-full ${dark ? "dark" : ""}` }>
      
      <Outlet/>
    </div>
  )
}

export default MainLayout