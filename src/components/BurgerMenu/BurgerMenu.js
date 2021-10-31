import React from 'react'
import IconMenu from '@icons/icon_menu.svg'
import './BurgerMenu.css'
import { MobileMenu } from '@components/MobileMenu/MobileMenu'

const BurgerMenu = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      <figure className="BurgerMenu__container" onClick={handleToggle}>
        <img src={IconMenu} alt="menu" className="menu" />
      </figure>
      {toggle && <MobileMenu />}
    </>
)}

export { BurgerMenu }
