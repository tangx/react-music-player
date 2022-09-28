import React from 'react'
import CommentWrapper from './CommentWrapper'
import PlayerCon from './PlayerCon'
import SongWrapper from './SongWrapper'
import { Song } from '../types/Song.types'

interface CenterConProps {
  songs: Song[]
}
export default function CenterCon(props: CenterConProps) {
  // console.log("center===>", props.songs);

  return (
    <div className='center_con'>
      <SongWrapper songs={props.songs} />
      <PlayerCon />
      <CommentWrapper />
    </div>
  )
}
