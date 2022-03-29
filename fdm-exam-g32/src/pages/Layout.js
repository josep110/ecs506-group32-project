
import React from "react";
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
    <>
      <nav >
      <div classname="navbar">
        <h1>FDM Examination Platform</h1>
        <ul>
          <li>
            <Link  to="/Help">Help</Link>
          </li>
          <li>
            <Link  to="/Forum">Forum</Link>
          </li>    
        </ul>      
      </div>
      </nav>
      <Outlet />
    </>
    )
}

export default Layout;