import Logo from '../../img/logo_black.png'

import './style.css'

function RegisterPage() {
  return (
    <div className="wrapper">
      <div className="wrapper__register">
        <img src={Logo} alt="Logo" />
        <div className="register__inputs">
          <input type="text" className="input__login" placeholder="Логин" />
          <div className="border" />
          <input
            type="password"
            className="input__password"
            placeholder="Пароль"
          />
          <div className="border" />
          <input
            type="password"
            className="input__password"
            placeholder="Повторите пароль"
          />
          <div className="border" />
        </div>

        <div className="register__buttons">
          <button type="button" className="register__button">
            Зарегестироваться
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
