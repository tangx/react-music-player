import React from 'react'

interface AudioConProps {
  musicURL: string
}

export default function AudioCon(props: AudioConProps) {
  return (
    <div className='audio_con'>
      <audio src={props.musicURL} className='myaudio'
        controls loop autoPlay
      ></audio>
    </div>
  )
}
