import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/not-found/index'
import HomePage from './Pages/Home/Home'
import PlaylistOfTheDay from './Pages/PlaylistOfTheDay/PlaylistOfTheDay'
import MyPlaylist from './Pages/MyPlaylist/MyPlaylist'
import Hits from './Pages/Hits/Hits'
import Indi from './Pages/Indi/Indi'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/playlist/my" element={<MyPlaylist />} />
      <Route path="/playlist/of-the-day" element={<PlaylistOfTheDay />} />
      <Route path="/playlist/hits" element={<Hits />} />
      <Route path="/playlist/indi" element={<Indi />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
