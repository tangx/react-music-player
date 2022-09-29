import React, { useState } from 'react'
import AudioCon from './AudioCon'
import CenterCon from './CenterCon'
import SearchBar from './SearchBar'
import VideoCon from './VideoCon'
import { Song, Music } from './types/Song.types'
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

interface GetMusicRespData {
  code: number
  data: Music[]
}

export default function Player() {
  const [songs, setSongs] = useState<Song[]>([] as Song[])
  const [musicURL, setMusicURL] = useState<string>("")

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

  function getMusic(id: number) {
    const target = `https://autumnfish.cn/song/url?id=${id}`
    // console.log("music target =>", target);


    axios.get<GetMusicRespData>(target)
      .then(
        (resp) => {
          // console.log(resp.data);
          const { data } = resp.data
          if (data.length < 1) {
            console.log("music not found");
            return
          }

          const music = data[0]
          // console.log("music info:", music);
          setMusicURL(music.url)
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
        <CenterCon songs={songs} getMusic={getMusic} />
        <AudioCon musicURL={musicURL} />
        {/* <VideoCon /> */}
      </div>
    </div>
  )
}
