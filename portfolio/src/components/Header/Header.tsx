import React, { useEffect, useState } from 'react'
import NavList from './NavList'
import "./Header.css"
import {AiOutlineMenu} from "react-icons/ai"

const Header: React.FC = () => {
  const [screenSize, setScreenSize] = useState({width: window.innerWidth, height: window.innerHeight})
  const [navOn, setNavOn] = useState(false)

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize({width: window.innerWidth, height: window.innerHeight})
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  const navForMobile = (
    <nav className={`div__nav to_right`} >
        {
        <>
          <AiOutlineMenu onClick={()=>setNavOn(true)} size={30}/>
          <div className={`nav_background ${navOn?"on ":""}`} onClick={()=>setNavOn(false)}></div>
          <div className={`nav_mobile ${navOn?"on animeFromRight":""}`} >
            <NavList />
          </div>
        </>
        }
      </nav>
  )

  const navForPC = (
    <nav className={`div__nav `} >
        {
        (<NavList />)
        }
      </nav>
  )
  return (
    <header>
      <div className='div__logo'>
        <img src="/imgs/logo3.png" alt="Logo" width={"30%"} />
      </div>
      
        {
        screenSize.width > 400? navForPC : navForMobile
        }
      
    </header>
  )
}

export default Header
