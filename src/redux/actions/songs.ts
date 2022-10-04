import axios from 'axios'

import { Song, SongDetail, SongCover } from '../../components/types/Song.types'
import { EnumSongs } from '../reducers/songs'



export type SongAction = {
  type: EnumSongs,
  data: Song[],
}

export function updateSongs(data: Song[]) {
  return {
    type: EnumSongs.SearchMusic,
    data: data,
  }
}


