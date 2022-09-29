import React from 'react'

interface AudioConProps {
  musicURL: string
  handlePlay: () => void
  handlePause: () => void
}

export default function AudioCon(props: AudioConProps) {
  // console.log(props);

  return (
    <div className='audio_con'>
      <audio src={props.musicURL} className='myaudio'
        controls loop autoPlay
        onPlay={props.handlePlay}
        onPause={props.handlePause}
      ></audio>
    </div>
  )
}
