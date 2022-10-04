import { MvState } from '../../components/types/MV.types'


export enum EnumMV {
  MvState = "MV_STATE",
  // exitPlayingMV = "EXIT_PLAYING_MV",
}

export type MvAction = {
  type: EnumMV,
  data: MvState,
}


export function setMVState(data: MvState): MvAction {

  return {
    type: EnumMV.MvState,
    data: data,
  }
}