import React from 'react'
import line from '../../images/line.png'
import { Song, Music } from '../types/Song.types'
import axios from 'axios'

interface SongWrapperProps {
  songs: Song[]
  getMusic: (id: number) => void
}

interface MusicRespData {
  code: number
  data: Music[]
}


export default function SongWrapper(props: SongWrapperProps) {
  const { songs } = props
  return (
    <div className='song_wrapper'>
      <ul className='song_list'>
        {
          songs.map((song) => {
            return (
              <li key={song.id} >
                <a href="javascript:;"
                  onClick={() => { props.getMusic(song.id) }}
                ></a>
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
