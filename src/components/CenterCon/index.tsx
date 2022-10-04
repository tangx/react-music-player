import React from 'react'
import CommentWrapper from './CommentWrapper'
import PlayerCon from './PlayerCon'
import SongWrapper from './SongWrapper'

interface CenterConProps {
}
export default function CenterCon(props: CenterConProps) {

  return (
    <div className='center_con'>
      <SongWrapper />
      <PlayerCon />
      <CommentWrapper />
    </div>
  )
}

