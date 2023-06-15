import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../../img/logo_black.png'

import './style.css'

function LoginPage() {
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const clg = () => {
    console.log(inputLogin)
    console.log(inputPassword)
  }

  return (
    <div className="wrapper">
      <form className="wrapper__login">
        <img src={Logo} alt="Logo" />
        <div className="login__inputs">
          <input type="text" className="input__login" placeholder="Логин" onChange={(event) => setInputLogin(event.target.value)}/>
          <div className="border" />
          <input
            type="password"
            className="input__password"
            placeholder="Пароль"
            onChange={(event) => setInputPassword(event.target.value)}
          />
          <div className="border" />
        </div>

        <div className="login__buttons">
          <NavLink type="button" className="login__button" to='/home' onClick={clg}>
            Войти
          </NavLink>
          <NavLink type="button" className="register__button" to='/register'>
            Зарегестироваться
          </NavLink>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
