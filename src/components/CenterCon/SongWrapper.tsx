import React from 'react'
import line from './line.png'

export default function SongWrapper() {
  return (
    <div className='song_wrapper'>
      <ul className='song_list'>
        <li>
          <a href="" ></a>
          <b>五月天</b>
          <span>
            <i></i>
          </span>
        </li>
        <li >
          <a href="" ></a>
          <b>六月天</b>
          <span>
            <i></i>
          </span>
        </li>
      </ul >
      <img src={line} className="switch_btn" alt="" />
    </div >
  )
}
