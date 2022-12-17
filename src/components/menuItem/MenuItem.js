import React from 'react'
import "./MenuItem.css"

const MenuItem = ({title,image,size}) => {
  return (
    <div className={`${size} menu`} >
        <div className="background-image"style={{backgroundImage:`url(${image})`}}/>
            <div className="content">
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subTitle'>SHOP NOW</span>
        </div>
    </div>
  )
}

export default MenuItem
