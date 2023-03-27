import React from 'react'
import Logo from '../images/logo.png'
import MenuBar from './MenuBar'



function Header() {
  return (
    <>
        <center>
        <MenuBar/>
        <div style={{
                height:'300px'}}>
        <img  draggable={false} onDragStart={false} src={Logo} media="(max-width: 608px)" sizes="600px" />
        </div>
        </center>
    </ >
  )
}

export default Header