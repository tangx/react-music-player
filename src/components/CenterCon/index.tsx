import React from 'react'
import CommentWrapper from './CommentWrapper'
import PlayerCon from './PlayerCon'
import SongWrapper from './SongWrapper'
import { Song } from '../types/Song.types'

interface CenterConProps {
  songs: Song[]
  getMusic: (id: number) => void
}
export default function CenterCon(props: CenterConProps) {
  // console.log("center===>", props.songs);

  return (
    <div className='center_con'>
      <SongWrapper songs={props.songs} getMusic={props.getMusic} />
      <PlayerCon />
      <CommentWrapper />
    </div>
  )
}
