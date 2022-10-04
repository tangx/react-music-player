import axios from 'axios'

import React, { useState } from 'react'
import AudioCon from './AudioCon'
import CenterCon from './CenterCon'
import SearchBar from './SearchBar'
import VideoCon from './VideoCon'

import { MvState } from './types/MV.types'


export default function Player() {
  const [mvState, setMvState] = useState<MvState>({ url: "", isMasked: false })




  return (
    <div className='wrap'>
      <div className="play_wrap" id="player">
        <h1>Redux music player</h1>
        <SearchBar />
        <CenterCon />
        <AudioCon />

        <VideoCon />

      </div>
    </div>
  )
}
