import React from 'react'
import { NavLink , Outlet } from 'react-router-dom'

const Layout = ({handleSubmit , setInput}) => {
  return (
    <div>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li>
              <form onSubmit={handleSubmit} >
                <input type='text'
                  onChange={(e)=>setInput(e.target.value)} />
                <button type='submit'>click me</button>
              </form>
            </li>
            <li><NavLink to='/favorites'>Favorites</NavLink></li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Layout