import './Style.css'
import { useEffect, useState, useRef } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ReactComponent as IconLike } from '../../img/icon/like.svg'
import { ReactComponent as IconNote } from '../../img/icon/note.svg'
import { ReactComponent as IconPrev } from '../../img/icon/prev.svg'
import { ReactComponent as IconPlay } from '../../img/icon/play.svg'
import { ReactComponent as IconPause } from '../../img/icon/pause.svg'
import { ReactComponent as IconNext } from '../../img/icon/next.svg'
import { ReactComponent as IconRepeat } from '../../img/icon/repeat.svg'
import { ReactComponent as IconShuffle } from '../../img/icon/shuffle.svg'
import { ReactComponent as IconVolume } from '../../img/icon/volume.svg'
import { ReactComponent as IconDislike } from '../../img/icon/dislike.svg'
import track from '../../sound/Bobby_Marleni_-_Dropin.mp3'

function Bar() {
  const [isLoading, setLoading] = useState(true)
  const audioRef = useRef(new Audio(track))
  const progressRef = useRef()

  const [isPlay, setPlay] = useState(false)
  const [isIconPlayPause, setIconPlayPause] = useState(<IconPlay />)
  const audioPlay = () => {
    const audio = audioRef.current

    if (isPlay) {
      audio.pause()
      setPlay(false)
      setIconPlayPause(<IconPlay />)
    } else {
      audio.play()
      setPlay(true)
      setIconPlayPause(<IconPause />)
    }
  }

  useEffect(() => {
    audioRef.current.ontimeupdate = () => {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 1000
      progressRef.current.value = progress
    }
  }, [audioRef, progressRef])

  const progressChange = () => {
    audioRef.current.currentTime =
      (progressRef.current.value / 1000) * audioRef.current.duration
  }

  const volumeChange = () => {
    const volume = document.getElementById('volume')
    audioRef.current.volume = volume.value
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading)
    return (
      <div className="bar">
        <div className="bar__content">
          <div className="bar__player-progress" />
          <div className="bar__player-block">
            <div className="bar__player player">
              <div className="player__controls">
                <div className="player__btn-prev">
                  <svg className="player__btn-prev-svg" alt="prev">
                    <IconPrev />
                  </svg>
                </div>
                <div className="player__btn-play _btn">
                  <svg className="player__btn-play-svg" alt="play">
                    <IconPlay />
                  </svg>
                </div>
                <div className="player__btn-next">
                  <svg className="player__btn-next-svg" alt="next">
                    <IconNext />
                  </svg>
                </div>
                <div className="player__btn-repeat _btn-icon">
                  <svg className="player__btn-repeat-svg" alt="repeat">
                    <IconRepeat />
                  </svg>
                </div>
                <div className="player__btn-shuffle _btn-icon">
                  <svg className="player__btn-shuffle-svg" alt="shuffle">
                    <IconShuffle />
                  </svg>
                </div>
              </div>

              <div className="player__track-play track-play">
                <SkeletonTheme baseColor="#bbb4b4" highlightColor="#444">
                  <div className="track-play__contain_flex">
                    <Skeleton width={51} height={51} />
                    <div className="track-play__flex">
                      <div className="track-play__author">
                        <Skeleton />
                      </div>
                      <div className="track-play__album">
                        <Skeleton />
                      </div>
                    </div>
                  </div>
                </SkeletonTheme>

                <div className="track-play__like-dis">
                  <div className="track-play__like _btn-icon">
                    <svg className="track-play__like-svg" alt="like">
                      <IconLike />
                    </svg>
                  </div>
                  <div className="track-play__dislike _btn-icon">
                    <svg className="track-play__dislike-svg" alt="dislike">
                      <IconDislike />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bar__volume-block volume">
              <div className="volume__content">
                <div className="volume__image">
                  <svg className="volume__svg" alt="volume">
                    <IconVolume />
                  </svg>
                </div>
                <div className="volume__progress _btn">
                  <input
                    className="volume__progress-line _btn"
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  return (
    <div className="bar">
      <div className="bar__content">
        <input
          className="bar__player-progress"
          type="range"
          ref={progressRef}
          defaultValue={0}
          max={1000}
          onChange={progressChange}
        />
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <div className="player__btn-prev">
                <svg className="player__btn-prev-svg" alt="prev">
                  <IconPrev />
                </svg>
              </div>
              <div className="player__btn-play _btn">
                <svg
                  className="player__btn-play-svg"
                  alt="play"
                  onClick={audioPlay}
                >
                  {isIconPlayPause}
                </svg>
              </div>
              <div className="player__btn-next">
                <svg className="player__btn-next-svg" alt="next">
                  <IconNext />
                </svg>
              </div>
              <div className="player__btn-repeat _btn-icon">
                <svg className="player__btn-repeat-svg" alt="repeat">
                  <IconRepeat />
                </svg>
              </div>
              <div className="player__btn-shuffle _btn-icon">
                <svg className="player__btn-shuffle-svg" alt="shuffle">
                  <IconShuffle />
                </svg>
              </div>
            </div>

            <div className="player__track-play track-play">
              <div className="track-play__contain">
                <div className="track-play__image">
                  <svg className="track-play__svg" alt="music">
                    <IconNote />
                  </svg>
                </div>
                <div className="track-play__author">
                  <a className="track-play__author-link" href="http://">
                    Ты та...
                  </a>
                </div>
                <div className="track-play__album">
                  <a className="track-play__album-link" href="http://">
                    Баста
                  </a>
                </div>
              </div>

              <div className="track-play__like-dis">
                <div className="track-play__like _btn-icon">
                  <svg className="track-play__like-svg" alt="like">
                    <IconLike />
                  </svg>
                </div>
                <div className="track-play__dislike _btn-icon">
                  <svg className="track-play__dislike-svg" alt="dislike">
                    <IconDislike />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bar__volume-block volume">
            <div className="volume__content">
              <div className="volume__image">
                <svg className="volume__svg" alt="volume">
                  <IconVolume />
                </svg>
              </div>
              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  id="volume"
                  type="range"
                  name="range"
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={volumeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bar
