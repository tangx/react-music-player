import React from 'react'
import player_title from './player_title.png'
import { Song } from '../types/Song.types'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { updateSongs } from '../../redux/actions/songs'



interface SearchBarProps {
  // searchMusic: (name: string) => void,
}


interface RespData {
  code: number
  result: {
    hasMore: boolean
    songCount: number
    songs: Song[]
  }
}


export default function SearchBar(props: SearchBarProps) {

  const dispatch = useDispatch()

  function searchMusic(name: string) {
    const target = `https://autumnfish.cn/search?keywords=${name}`

    axios.get<RespData>(target)
      .then(
        (resp) => {
          console.log("==>", resp.data);
          // console.log("@@=>", resp.data.result.songs);
          const songs = resp.data.result.songs

          dispatch(updateSongs(songs))
          // console.log(songs);

        },
        (err) => {

          console.log(err);
          dispatch(updateSongs([]))
        }
      )
  }



  function handleInputKeyup(e: React.KeyboardEvent) {
    // 捕获 enter 事件
    if (e.code !== "Enter") {
      return
    }
    // console.log(e);

    // 将 target 转换为 HTMLInputElement 元素
    const target = e.target as HTMLInputElement

    // 获取 input 框的值
    const name = target.value

    searchMusic(name)
  }

  return (
    <div className="search_bar">
      <img src={player_title} alt="" />
      <input onKeyUp={handleInputKeyup} type="text" />
    </div>
  )
}
