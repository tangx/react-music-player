

import { EnumPlaying, PlayingAction } from '../actions/playing'


const initState: boolean = false
export default function (prestate: boolean = initState, action: PlayingAction) {

  switch (action.type) {
    case EnumPlaying.IsPlaying:
      return action.data
    default:
      return prestate
  }
}
