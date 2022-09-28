import React from 'react'
import player_bar from '../../images/player_bar.png'
import disc from '../../images/disc.png'
export default function PlayerCon() {
  return (
    <div className='player_con'>
      <img src={player_bar} alt="" className='play_bar' />
      <img src={disc} alt="" className='disc autoRotate' />
      <img src="placehodler" alt="" className="cover autoRotate" />
    </div>
  )
}
