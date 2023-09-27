
import React from 'react'
import {AiOutlineMenu}from "react-icons/ai"
import "./NavButton.css"
function NavButton({width,isOpen,setIsOpen}:any) {

  return (
    <button className={`nav_button ${width<1001?"show_btn":""}`} onClick={()=>setIsOpen(!isOpen)}>
      <AiOutlineMenu/>
    </button>
  )
}

export default NavButton
