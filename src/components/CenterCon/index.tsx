import React from 'react'
import CommentWrapper from './CommentWrapper'
import PlayerCon from './PlayerCon'
import SongWrapper from './SongWrapper'
import { Song } from '../types/Song.types'
import { HotComment } from '../types/HotComment.types'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

interface CenterConProps {
  playMV: (mvid: number) => void
}
export default function CenterCon(props: CenterConProps) {

  return (
    <div className='center_con'>
      <SongWrapper
        playMV={props.playMV}
      />
      <PlayerCon />
      <CommentWrapper />
    </div>
  )
}

