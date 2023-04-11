import { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
              <NavLink className="menu__link" to="/">
                Главное
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink className="menu__link" to="/playlist/my">
                Мой плейлист
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink className="menu__link" to="/playlist/of-the-day">
                Плейлист дня
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink className="menu__link" to="/playlist/hits">
                100 танцевальных хитов
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink className="menu__link" to="/playlist/indi">
                Инди-заряд
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavMenu
