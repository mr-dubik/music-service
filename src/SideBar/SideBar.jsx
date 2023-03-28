import './Style.css'
import Playlist01 from '../img/playlist01.png'
import Playlist02 from '../img/playlist02.png'
import Playlist03 from '../img/playlist03.png'

function SideBar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar" />
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="!#">
              <img
                className="sidebar__img"
                src={Playlist01}
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="!#">
              <img
                className="sidebar__img"
                src={Playlist02}
                alt="day's playlist"
              />
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="!#">
              <img
                className="sidebar__img"
                src={Playlist03}
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
