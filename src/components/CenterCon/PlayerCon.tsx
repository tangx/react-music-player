import React from 'react'
import player_bar from '../../images/player_bar.png'
import disc from '../../images/disc.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'


interface PlayerConProps {
}

export default function PlayerCon(props: PlayerConProps) {

  // 根据状态返回 className
  const isPlaying = useSelector((state: RootState) => {
    return state.playing
  })

  const coverURL = useSelector((state: RootState) => {
    return state.music === null ? "#" : state.music.coverURL
  })

  const classIsPlaying = isPlaying ? "player_con playing" : "player_con"
  return (
    <div className={classIsPlaying}>
      <img src={player_bar} alt="" className='play_bar' />
      <img src={disc} alt="" className='disc autoRotate' />
      <img src={coverURL} alt="" className="cover autoRotate" />
    </div>
  )
}
