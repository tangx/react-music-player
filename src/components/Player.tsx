import React, { useState } from 'react'
import AudioCon from './AudioCon'
import CenterCon from './CenterCon'
import SearchBar from './SearchBar'
import VideoCon from './VideoCon'
import { Song } from './types/Song.types'
import SearchMusic from './scripts/SearchMusic'

export default function Player() {
  const [songs, setSongs] = useState<Song[]>([] as Song[])

  function searchMusic(name: string) {
    // console.log(name);
    SearchMusic(name)
  }

  return (
    <div className='wrap'>
      <div className="play_wrap" id="player">
        <SearchBar searchMusic={searchMusic} />
        <CenterCon />
        <AudioCon />
        {/* <VideoCon /> */}
      </div>
    </div>
  )
}
