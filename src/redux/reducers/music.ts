import { Music } from '../../components/types/Song.types'
import { MusicAction, EnumMusic } from '../actions/music'

type IPreState = Music | null

const initState = null
export default function (prestate: IPreState = initState, action: MusicAction) {

  switch (action.type) {
    case EnumMusic.UpdateMusic:
      return { ...action.data }

    default:
      return prestate
  }
}

