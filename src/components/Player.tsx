import axios from 'axios'

import React, { useState } from 'react'
import AudioCon from './AudioCon'
import CenterCon from './CenterCon'
import SearchBar from './SearchBar'
import VideoCon from './VideoCon'
import { Song, Music, MusicDetail } from './types/Song.types'

import { HotComment } from './types/HotComment.types'
import { MvState } from './types/MV.types'

interface GetMusicRespData {
  code: number
  data: Music[]
}
interface GetMusicDetailRespData {
  code: number
  songs: MusicDetail[]
}

interface HotCommentRespData {
  code: 200
  hotComments: HotComment[]
  total: number
}


export default function Player() {
  const [songs, setSongs] = useState<Song[]>([])
  const [musicURL, setMusicURL] = useState<string>("")
  const [picURL, setPicURL] = useState<string>("")
  const [hotComments, setHotComments] = useState<HotComment[]>([])
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [mvState, setMvState] = useState<MvState>({ url: "", isMasked: false })



  function getMusic(id: number) {
    const target = `https://autumnfish.cn/song/url?id=${id}`
    // console.log("music target =>", target);


    // 获取播放地址
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

    // 获取专辑图片
    axios.get<GetMusicDetailRespData>(`https://autumnfish.cn/song/detail?ids=${id}`)
      .then(
        (resp) => {
          // console.log(resp.data);
          const { songs } = resp.data
          if (songs.length < 1) {
            console.log("music detail not found");
            return
          }

          const detail = songs[0]
          // console.log(detail.al.picUrl);
          setPicURL(detail.al.picUrl)

        },
        (err) => {
          console.log(err);
        }
      )

    // 获取评论
    axios.get<HotCommentRespData>(`https://autumnfish.cn/comment/hot?type=0&id=${id}`)
      .then(
        (resp) => {
          // console.log(resp.data.hotComments);

          setHotComments(resp.data.hotComments);

        },
        (err) => {
          console.log(err);
        }
      )
  }

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
        {/* <CenterCon songs={songs} getMusic={getMusic}
          picURL={picURL}
          hotComments={hotComments}
          isPlaying={isPlaying}
          playMV={playMV}
        /> */}
        {/* <AudioCon musicURL={musicURL}
          handlePlay={handlePlay}
          handlePause={handlePause}
        /> */}

        {/* <VideoCon mvState={mvState}
          exitMV={exitMV}
        /> */}
      </div>
    </div>
  )
}
