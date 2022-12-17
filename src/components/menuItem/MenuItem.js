import React from 'react'
import "./MenuItem.css"

const MenuItem = ({title}) => {
  return (
    <div className='menu'>
      <div className="content">
        <h1 className='title'>{title}</h1>
        <span className='subTitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
