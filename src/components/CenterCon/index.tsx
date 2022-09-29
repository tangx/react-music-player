import React from 'react'
import CommentWrapper from './CommentWrapper'
import PlayerCon from './PlayerCon'
import SongWrapper from './SongWrapper'
import { Song } from '../types/Song.types'
import { HotComment } from '../types/HotComment.types'

interface CenterConProps {
  songs: Song[]
  getMusic: (id: number) => void
  picURL: string
  hotComments: HotComment[]
  isPlaying: boolean
}
export default function CenterCon(props: CenterConProps) {
  // console.log("center===>", props.songs);

  return (
    <div className='center_con'>
      <SongWrapper songs={props.songs} getMusic={props.getMusic} />
      <PlayerCon picURL={props.picURL}
        isPlaying={props.isPlaying} />
      <CommentWrapper hotComments={props.hotComments} />
    </div>
  )
}

