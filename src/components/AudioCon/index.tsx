import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setPlayingState } from '../../redux/actions/playing'

interface AudioConProps {
}




export default function AudioCon(props: AudioConProps) {
  // console.log(props);
  const dispatch = useDispatch()

  function handlePlay() {
    dispatch(setPlayingState(true))
  }

  function handlePause() {
    dispatch(setPlayingState(false))
  }

  const musicURL = useSelector((state: RootState) => {
    return state.music === null ? "#" : state.music.musicURL
  })

  return (
    <div className='audio_con'>
      <audio src={musicURL} className='myaudio'
        controls loop autoPlay
        onPlay={handlePlay}
        onPause={handlePause}
      ></audio>
    </div>
  )
}
