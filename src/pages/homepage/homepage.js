import React from 'react'
import "./homepage.css"
import MenuItem from '../../components/menuItem/MenuItem'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className="shopping-menu">
            <MenuItem title={"HATS"}/>
            <MenuItem title={"JACKETS"}/>
            <MenuItem title={"SNEAKERS"}/>
            <MenuItem title={"WOMEN"}/>
            <MenuItem title={"MEN"}/>
        </div>
      
    </div>
  )
}

export default Homepage
