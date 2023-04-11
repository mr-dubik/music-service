import './Style.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Playlist01 from '../../img/playlist01.png'
import Playlist02 from '../../img/playlist02.png'
import Playlist03 from '../../img/playlist03.png'
import SkeletonSideBar from '../Skeleton/SkeletonSideBar'

function SideBar() {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading)
    return (
      <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <SkeletonTheme
            baseColor="#bbb4b4"
            highlightColor="#444"
            className="skeleton"
          >
            <p className="sidebar__personal-name">
              <Skeleton width={100} />
            </p>
            <Skeleton className="sidebar__avatar" />
          </SkeletonTheme>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              <SkeletonSideBar />
            </div>
            <div className="sidebar__item">
              <SkeletonSideBar />
            </div>
            <div className="sidebar__item">
              <SkeletonSideBar />
            </div>
          </div>
        </div>
      </div>
    )

  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar" />
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <NavLink className="sidebar__link" to="/playlist/of-the-day">
              <img
                className="sidebar__img"
                src={Playlist01}
                alt="day's playlist"
              />
            </NavLink>
          </div>
          <div className="sidebar__item">
            <NavLink className="sidebar__link" to="/playlist/hits">
              <img
                className="sidebar__img"
                src={Playlist02}
                alt="day's playlist"
              />
            </NavLink>
          </div>
          <div className="sidebar__item">
            <NavLink className="sidebar__link" to="/playlist/indi">
              <img
                className="sidebar__img"
                src={Playlist03}
                alt="day's playlist"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
