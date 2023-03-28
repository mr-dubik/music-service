import './App.css'
import NavMenu from './components/NavMenu/NavMenu'
import CentrBlock from './CentrBlock/CentrBlock'
import SideBar from './SideBar/SideBar'
import Bar from './Bar/Bar'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <NavMenu />
            <CentrBlock />
            <SideBar />
          </main>
          <Bar />
          <footer className="footer" />
        </div>
      </div>
    </div>
  )
}

export default App
