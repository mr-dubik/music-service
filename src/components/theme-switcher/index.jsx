import { useThemeContext } from '../context/theme'

function ThemeSwitcher() {
  const { toggleTheme } = useThemeContext()

  return (
    <button onClick={toggleTheme} type="button">
      Change Theme
    </button>
  )
}

export default ThemeSwitcher
