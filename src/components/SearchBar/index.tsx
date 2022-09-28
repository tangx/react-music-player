import React from 'react'
import player_title from './player_title.png'
import { searchMusic } from './searchMusic'

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

  console.log(name);
  const songs = searchMusic(name)
  console.log(songs);

}

export default function SearchBar() {
  return (
    <div className="search_bar">
      <img src={player_title} alt="" />
      <input onKeyUp={handleInputKeyup} type="text" />
    </div>
  )
}
