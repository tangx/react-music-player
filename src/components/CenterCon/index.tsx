import React from 'react'
import CommentWrapper from './CommentWrapper'
import PlayerCon from './PlayerCon'
import SongWrapper from './SongWrapper'

export default function CenterCon() {
  return (
    <div className='center_con'>
      <SongWrapper />
      <PlayerCon />
      <CommentWrapper />
    </div>
  )
}
