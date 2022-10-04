import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMVState } from '../../redux/actions/mv'
import { RootState } from '../../redux/store'

interface VideoConProps {
}


export default function VideoCon(props: VideoConProps) {

  const dispatch = useDispatch()
  const mvState = useSelector((state: RootState) => {
    return state.mv
  })


  function exitPlayingMv() {
    dispatch(
      setMVState(
        { url: "", isMasked: false }
      )
    )
  }


  if (mvState && mvState.isMasked) {
    return (
      <div className='video_con'>
        <video src={mvState.url} controls={true}></video>
        <div className='mask' onClick={exitPlayingMv}></div>
      </div>
    )
  }

  return (
    <Fragment />
  )
}
