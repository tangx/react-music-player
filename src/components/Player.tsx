import axios from 'axios'

import React, { useState } from 'react'
import AudioCon from './AudioCon'
import CenterCon from './CenterCon'
import SearchBar from './SearchBar'
import VideoCon from './VideoCon'
import { Song, Music, MusicDetail } from './types/Song.types'

import { HotComment } from './types/HotComment.types'

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

  return (
    <div className='wrap'>
      <div className="play_wrap" id="player">
        <SearchBar searchMusic={searchMusic} />
        <CenterCon songs={songs} getMusic={getMusic}
          picURL={picURL}
          hotComments={hotComments}
          isPlaying={isPlaying}
        />
        <AudioCon musicURL={musicURL}
          handlePlay={handlePlay}
          handlePause={handlePause}
        />

        {/* <VideoCon /> */}
      </div>
    </div>
  )
}
