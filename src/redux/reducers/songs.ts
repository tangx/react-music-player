
import { RootState } from '../store'
import { Song } from '../../components/types/Song.types'
import { SearchSongAction } from '../actions/songs'

export enum EnumSongs {
  SearchMusic = "SEARCH_MUSIC",
}



const initSongs: Song[] = []
export default function songs(prestate = initSongs, action: SearchSongAction) {

  switch (action.type) {

    case EnumSongs.SearchMusic:
      return [...action.data]
    default:
      return prestate
  }
}