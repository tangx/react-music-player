import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { updateMusic } from '../../redux/actions/music'

interface AudioConProps {
}




export default function AudioCon(props: AudioConProps) {
  // console.log(props);
  const dispatch = useDispatch()
  const music = useSelector((state: RootState) => state.music)

  function handlePlay() {
    dispatch(updateMusic({
      ...music, isPlaying: true
    }))
  }

  function handlePause() {
    dispatch(updateMusic({
      ...music, isPlaying: false
    }))
  }


  return (
    <div className='audio_con'>
      <audio src={music.musicURL} className='myaudio'
        controls loop autoPlay
        onPlay={handlePlay}
        onPause={handlePause}
      ></audio>
    </div>
  )
}
