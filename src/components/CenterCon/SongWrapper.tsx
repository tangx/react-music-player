import React from 'react'
import line from '../../images/line.png'
import { Song, Music } from '../types/Song.types'
import axios from 'axios'

interface SongWrapperProps {
  songs: Song[]
}

interface MusicRespData {
  code: number
  data: Music[]
}

function playMusic(id: number) {
  // console.log("music id", id);

  const target = `https://autumnfish.cn/song/url?id=${id}`

  axios.get<MusicRespData>(target)
    .then(
      (resp) => {
        const { data } = resp.data
        if (data.length > 0) {
          console.log(resp.data.data[0]);
          return
        }

        console.log("music not found");
      },
      (err) => {
        console.log(err);
      }
    )
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
                  onClick={() => { playMusic(song.id) }}
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
