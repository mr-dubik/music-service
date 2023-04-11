import NavMenu from '../../components/NavMenu/NavMenu'
import CentrBlock from '../../components/CentrBlock/CentrBlock'
import SideBar from '../../components/SideBar/SideBar'
import Bar from '../../components/Bar/Bar'

function Indi() {
  const namePage = 'Инди-заряд'

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <CentrBlock namePage={namePage} />
          <SideBar />
        </main>
        <Bar />
        <footer className="footer" />
      </div>
    </div>
  )
}

export default Indi
