
import { Music } from '../../components/types/Song.types'


export enum EnumMusic {
  "UpdateMusic" = "UPDATE_MUSIC"
}

export type MusicAction = {
  type: EnumMusic,
  data: Music,
}

export function updateMusic(data: Music): MusicAction {
  return {
    type: EnumMusic.UpdateMusic,
    data: data
  }
}
