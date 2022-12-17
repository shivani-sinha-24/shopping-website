import React from 'react'
import './ShoppingMenu.css'
import MenuItem from '../menuItem/MenuItem'

const ShoppingMenu = () => {
    const sections = [
        {
            title:'hats',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1
        },
        {
            title:'jackets',
            imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
            id:2
        },
        {
            title:'sneakers',
            imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
            id:3
        },
        {
            title:'women',
            imageUrl:'https://i.ibb.co/GCCdy8t/women.png',
            id:4,
            size:'large'
        },
        {
            title:'men',
            imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
            id:5,
            size:'large'
        }
    ]
  return (
    <div className="shopping-menu">
        {sections.map(section=><MenuItem title={section.title} image={section.imageUrl} size={section.size} key={section.id}/>)}
    </div>
  )
}

export default ShoppingMenu
