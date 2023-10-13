import NavMenu from '../../components/NavMenu/NavMenu'
import CentrBlock from '../../components/CentrBlock/CentrBlock'
import SideBar from '../../components/SideBar/SideBar'
import Bar from '../../components/Bar/Bar'
import { useThemeContext } from '../../components/context/theme'

function HomePage() {
  const namePage = 'Треки'
  const theme = useThemeContext()
  const colorTheme = theme.theme

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu colorTheme={colorTheme} />
          <CentrBlock namePage={namePage} colorTheme={colorTheme} />
          <SideBar colorTheme={colorTheme} />
        </main>
        <Bar colorTheme={colorTheme} />
        <footer className="footer" />
      </div>
    </div>
  )
}

export default HomePage
