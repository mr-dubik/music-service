import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/not-found/index'
import HomePage from './Pages/Home/Home'
import PlaylistOfTheDay from './Pages/PlaylistOfTheDay/PlaylistOfTheDay'
import MyPlaylist from './Pages/MyPlaylist/MyPlaylist'
import Hits from './Pages/Hits/Hits'
import Indi from './Pages/Indi/Indi'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/playlist/my" element={<MyPlaylist />} />
      <Route path="/playlist/of-the-day" element={<PlaylistOfTheDay />} />
      <Route path="/playlist/hits" element={<Hits />} />
      <Route path="/playlist/indi" element={<Indi />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
