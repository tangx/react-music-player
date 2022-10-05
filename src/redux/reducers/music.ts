import { Music } from '../../components/types/Song.types'
import { MusicAction, EnumMusic } from '../actions/music'

const initState: Music = {
  musicURL: "",
  coverURL: "",
  isPlaying: false,
}
export default function (prestate: Music = initState, action: MusicAction) {

  switch (action.type) {
    case EnumMusic.UpdateMusic:
      return { ...action.data }

    default:
      return prestate
  }
}

