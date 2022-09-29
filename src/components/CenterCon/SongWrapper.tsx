import React, { Fragment } from 'react'
import line from '../../images/line.png'
import { Song, Music } from '../types/Song.types'
import axios from 'axios'

interface SongWrapperProps {
  songs: Song[]
  getMusic: (id: number) => void
  playMV: (id: number) => void
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
                <a href="#"
                  onClick={() => { props.getMusic(song.id) }}
                ></a>
                <b>{song.name}</b>

                <MvSpan mvid={song.mvid} playMV={props.playMV} />
              </li>
            )
          })
        }
      </ul >
      <img src={line} className="switch_btn" alt="" />
    </div >
  )
}

interface MvSpanProps {
  mvid: number
  playMV: (id: number) => void
}

export function MvSpan(props: MvSpanProps) {
  if (props.mvid !== 0) {
    return (
      <span onClick={() => { props.playMV(props.mvid) }}>
        <i></i>
      </span>
    )
  }

  return (
    <Fragment />
  )
}
