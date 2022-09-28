import React, { useState } from 'react'
import AudioCon from './AudioCon'
import CenterCon from './CenterCon'
import SearchBar from './SearchBar'
import VideoCon from './VideoCon'
import { Song } from './types/Song.types'
// import { RespData } from './scripts/SearchMusic'
import axios from 'axios'

interface RespData {
  code: number
  result: {
    hasMore: boolean
    songCount: number
    songs: Song[]
  }
}

export default function Player() {
  const [songs, setSongs] = useState<Song[]>([] as Song[])

  function searchMusic(name: string) {
    const target = `https://autumnfish.cn/search?keywords=${name}`

    axios.get<RespData>(target)
      .then(
        (resp) => {
          // console.log("==>", resp.data);
          // console.log("@@=>", resp.data.result.songs);
          // songs = resp.data.result.songs
          setSongs(resp.data.result.songs)
        },
        (err) => {
          console.log(err);
        }
      )
  }

  return (
    <div className='wrap'>
      <div className="play_wrap" id="player">
        <SearchBar searchMusic={searchMusic} />
        <CenterCon songs={songs} />
        <AudioCon />
        {/* <VideoCon /> */}
      </div>
    </div>
  )
}
