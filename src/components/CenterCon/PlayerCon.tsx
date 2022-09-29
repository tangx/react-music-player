import React from 'react'
import player_bar from '../../images/player_bar.png'
import disc from '../../images/disc.png'


interface PlayerConProps {
  picURL: string
  isPlaying: boolean
}
export default function PlayerCon(props: PlayerConProps) {

  // 根据状态返回 className

  const classIsPlaying = props.isPlaying ? "player_con playing" : "player_con"
  return (
    <div className={classIsPlaying}>
      <img src={player_bar} alt="" className='play_bar' />
      <img src={disc} alt="" className='disc autoRotate' />
      <img src={props.picURL} alt="" className="cover autoRotate" />
    </div>
  )
}
