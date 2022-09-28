import React from 'react'
import AudioCon from './AudioCon'
import CenterCon from './CenterCon'
import SearchBar from './SearchBar'
import VideoCon from './VideoCon'

export default function Player() {
  return (
    <div className='wrap'>
      <div className="play_wrap" id="player">
        <SearchBar />
        <CenterCon />
        <AudioCon />
        <VideoCon />
      </div>
    </div>
  )
}
