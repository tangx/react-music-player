import React from 'react'
import line from '../../images/line.png'
import { Song } from '../types/Song.types'

interface SongWrapperProps {
  songs: Song[]
}
export default function SongWrapper(props: SongWrapperProps) {
  const { songs } = props
  return (
    <div className='song_wrapper'>
      <ul className='song_list'>
        {
          songs.map((song) => {
            return (
              <li key={song.id}>
                <a href=""></a>
                <b>{song.name}</b>
                <span>
                  <i></i>
                </span>
              </li>
            )
          })
        }
      </ul >
      <img src={line} className="switch_btn" alt="" />
    </div >
  )
}
