import Logo from '../../img/logo_black.png'

import './style.css'

function LoginPage() {
  return (
    <div className="wrapper">
      <div className="wrapper__login">
        <img src={Logo} alt="Logo" />
        <div className="login__inputs">
          <input type="text" className="input__login" placeholder="Логин" />
          <div className="border" />
          <input
            type="password"
            className="input__password"
            placeholder="Пароль"
          />
          <div className="border" />
        </div>

        <div className="login__buttons">
          <button type="button" className="login__button">
            Войти
          </button>
          <button type="button" className="register__button">
            Зарегестироваться
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
