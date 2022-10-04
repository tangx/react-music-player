import axios from 'axios'

import React, { useState } from 'react'
import AudioCon from './AudioCon'
import CenterCon from './CenterCon'
import SearchBar from './SearchBar'
import VideoCon from './VideoCon'
import { Song, SongDetail, SongCover } from './types/Song.types'

import { HotComment } from './types/HotComment.types'
import { MvState } from './types/MV.types'


export default function Player() {
  const [musicURL, setMusicURL] = useState<string>("")
  const [picURL, setPicURL] = useState<string>("")
  const [hotComments, setHotComments] = useState<HotComment[]>([])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [mvState, setMvState] = useState<MvState>({ url: "", isMasked: false })



  function handlePlay() {
    setIsPlaying(true)
  }
  function handlePause() {
    setIsPlaying(false)
  }


  interface GetMVRespData {
    code: number
    data: {
      url: string
      id: number
    }
  }

  //播放mv
  function playMV(mvid: number) {
    axios.get<GetMVRespData>(`https://autumnfish.cn/mv/url?id=${mvid}`)
      .then(
        (resp) => {
          const { data } = resp.data
          console.log(data.url);

          setMvState({ url: data.url, isMasked: true })
        },
        (err) => {
          console.log(err);
        }
      )
  }

  function exitMV() {
    setMvState({ ...mvState, isMasked: false })
  }

  return (
    <div className='wrap'>
      <div className="play_wrap" id="player">
        <h1>Redux music player</h1>
        <SearchBar />
        <CenterCon
          // getMusic={getMusic}
          picURL={picURL}
          hotComments={hotComments}
          isPlaying={isPlaying}
          playMV={playMV}
        />
        <AudioCon />

        {/* <VideoCon mvState={mvState}
          exitMV={exitMV}
        /> */}
      </div>
    </div>
  )
}
