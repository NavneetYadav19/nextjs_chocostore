import Link from "next/link"
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react"

export default function Topnav(){

  const menus = [
    {
      id: 1,
      menu: 'home',
    },{
      id: 2,
      menu: 'about',
    },{
      id: 3,
      menu: 'menu'
    },{
      id: 4,
      menu: 'contact',
    }
  ]

  const [menuActive, setMenuActive] = useState(menus[0])
  const onToggleMenus = (e, i) => {
    e.preventDefault()
    if(menus.length > i){
      setMenuActive(menus[i])
    }
  }

  const [sidenavActive, setSidenavActive] = useState(false)
  const onToggleSidenav = (e) => {
    e.preventDefault()
    if(typeof window !== 'undefined' && window.document){
      if(sidenavActive) document.documentElement.style.overflow = 'unset'
      else document.documentElement.style.overflow = 'hidden'
    }
    setSidenavActive(!sidenavActive)
  }

  return(
    <>
      
      <nav className="topnav">
        <div className="topnav-wrapper">
          <div className="logo">
            <div className="logo-wrapper">
            <img src="/assets/img/logo/chocologo.png" className="w-32 h-20 mb-4" alt="Logo" />
            </div>
          </div>
          <style jsx>{`
            .logo img {
              display: block;
              visibility: visible; 
            }
          `}</style>
          <div className="menu-container  hide-tablet">
            {menus.map((data, i) => (
              <div onClick={e => onToggleMenus(e, i)} key={`menu_${i}`} className={`menu ${menuActive.id === data.id? 'active': ''} uppercase font-semibold`}>
                <Link href="/">{data.menu}</Link>
              </div>
            ))}
           
          </div>
          <div className="options hide-tablet">
            <div className="social-list">
              <div className="social-item">
              <FaFacebook />
              </div>
              <div className="social-item">
              <FaInstagram />
              </div>
              <div className="social-item">
              <FaTwitter />
              </div>
              <div className="social-item">
              <FaWhatsapp />
              </div>
            </div>
          </div>
          <div className="sidenav-toggle w-12 show-tablet" onClick={onToggleSidenav}>
            <div className={`hamburger ${sidenavActive? 'active': ''}`}>
              <div></div><div></div><div></div>
            </div>
          </div>
        </div>
      </nav>
      <div className="topnav-spacer"></div>

      {/* Sidenav */}
      <nav className={`sidenav ${sidenavActive? 'active': ''}`}>
        <div className="wrapper">
          <div className="logo-container">
            <div className="sidenav-toggle" onClick={onToggleSidenav}>
              <div className={`hamburger ${sidenavActive? 'active': ''}`}>
                <div></div><div></div><div></div>
              </div>
            </div>
            <div className="logo">
            <img src="/assets/img/logo/chocologo.png" className="w-32 h-24 mb-4" alt="Logo" />
            </div>
            <div className="text-container ml-6">
              <h6 className="title uppercase font-semibold">Choco Store</h6>
              <p className="uppercase text-sm color-p font-light tracking-wider">
                Sun-Thu: 12PM - 6PM<br/>
                Fri-Sat: 12PM - 8PM
              </p>
            </div>
          </div>
          <div className="scroll-wrapper">
            <div className="menu-container gap-12">
              {menus.map((data, i) => (
                <div key={`menu_${i}`} className={`menu uppercase font-semibold`}>
                  <Link href="/">{data.menu}</Link>
                  <span className="text-shadow">{data.menu}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pattern">
            <div className="wrapper">
              <img src="assets/img/pattern/01.png" />
            </div>
          </div>
        </div>
      </nav>
      <div className="sidenav-filter" onClick={onToggleSidenav}></div>
    </>
  )
}