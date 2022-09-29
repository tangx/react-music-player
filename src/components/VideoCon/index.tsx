import React, { Fragment } from 'react'
import { MvState } from '../types/MV.types'

interface VideoConProps {
  mvState: MvState
  exitMV: () => void
}

export default function VideoCon(props: VideoConProps) {
  const { mvState } = props

  // console.log("mvState in VideoCon: ", mvState);

  if (mvState.isMasked) {
    return (
      <div className='video_con'>
        <video src={mvState.url} controls={true}></video>
        <div className='mask' onClick={props.exitMV}></div>
      </div>
    )
  }

  return (
    <Fragment />
  )
}
