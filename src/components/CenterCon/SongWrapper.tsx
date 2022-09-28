import React from 'react'
import line from '../../images/line.png'
import { Song } from '../types/Song.types'

interface SongWrapperProps {
  songs: Song[]
}
export default function SongWrapper(props: SongWrapperProps) {
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
