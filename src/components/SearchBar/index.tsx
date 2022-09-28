import React from 'react'
import player_title from './player_title.png'

export default function SearchBar() {
  return (
    <div className="search_bar">
      <img src={player_title} alt="" />
      <input type="text" />
    </div>
  )
}
