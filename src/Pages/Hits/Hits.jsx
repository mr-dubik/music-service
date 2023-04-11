import Bar from '../../components/Bar/Bar'
import CentrBlock from '../../components/CentrBlock/CentrBlock'
import NavMenu from '../../components/NavMenu/NavMenu'
import SideBar from '../../components/SideBar/SideBar'

function Hits() {
  const namePage = '100 танцевальных хитов'

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

export default Hits
