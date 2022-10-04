
import { MvState } from '../../components/types/MV.types'
import { MvAction, EnumMV } from '../actions/mv'


const initState = null
export default function (prestate: MvState | null = initState, actions: MvAction) {

  switch (actions.type) {
    case EnumMV.MvState:
      return { ...actions.data }

    default:
      return prestate
  }
}