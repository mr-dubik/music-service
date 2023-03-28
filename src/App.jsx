import './App.css'
import NavMenu from './components/NavMenu/NavMenu'
import CentrBlock from './components/CentrBlock/CentrBlock'
import SideBar from './components/SideBar/SideBar'
import Bar from './components/Bar/Bar'

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
