/* eslint-disable react/jsx-no-constructed-context-values */
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import ProtectedRoute from './components/protected-route/protected-route'
import NotFound from './Pages/not-found/index'
import HomePage from './Pages/Home/Home'
import PlaylistOfTheDay from './Pages/PlaylistOfTheDay/PlaylistOfTheDay'
import MyPlaylist from './Pages/MyPlaylist/MyPlaylist'
import Hits from './Pages/Hits/Hits'
import Indi from './Pages/Indi/Indi'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'

import {
  ThemeContext,
  themes,
  useThemeContext,
} from './components/context/theme'

function AppRoutes() {
  const user = localStorage.getItem('user')
  console.log(user)

  const { theme } = useThemeContext()
  const [currentTheme, setCurrentTheme] = useState(themes.light)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.light)
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
          <Route
            path="/home"
            element={
              <HomePage
                style={{
                  backgroundColor: theme.background,
                  color: theme.color,
                }}
              />
            }
          />
          <Route path="/playlist/my" element={<MyPlaylist />} />
          <Route path="/playlist/of-the-day" element={<PlaylistOfTheDay />} />
          <Route path="/playlist/hits" element={<Hits />} />
          <Route path="/playlist/indi" element={<Indi />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeContext.Provider>
  )
}

export default AppRoutes
