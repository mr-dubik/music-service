import { useState } from 'react'
import styled from 'styled-components'
import Burger from '../Burger/Burger'
import Logo from '../../img/logo.png'
import './Style.css'

function NavMenu() {
  const Div = styled.div``
  const [visible, setVisible] = useState(true)

  const toggleVisible = () => setVisible(!visible)

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={Logo} alt="logo" />
      </div>
      <Div onClick={toggleVisible}>
        <Burger />
      </Div>
      {!visible && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Войти
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavMenu
