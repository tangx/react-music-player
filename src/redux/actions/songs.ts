import axios from 'axios'

import { Song, Music, MusicDetail } from '../../components/types/Song.types'
import { EnumSongs } from '../reducers/songs'



export type SearchSongAction = {
  type: EnumSongs,
  data: Song[],
}



export function updateSongs(data: Song[]) {
  return {
    type: EnumSongs.SearchMusic,
    data: data,
  }
}