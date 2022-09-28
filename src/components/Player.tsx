import React from 'react'
import CenterCon from './CenterCon'
import SearchBar from './SearchBar'

export default function
  () {
  return (
    <div className='wrap'>
      <div className="play_wrap" id="player">
        <SearchBar />
        <CenterCon />
      </div>
    </div>
  )
}
