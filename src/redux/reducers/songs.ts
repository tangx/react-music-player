
import { RootState } from '../store'
import { Song, SongDetail } from '../../components/types/Song.types'
import { SongAction } from '../actions/songs'

export enum EnumSongs {
  SearchMusic = "SEARCH_MUSIC",
  UpdateSongDetail = "UPDAET_SONG_DETAIL"
}



const initSongs: Song[] = []
export default function songs(prestate = initSongs, action: SongAction) {

  switch (action.type) {

    case EnumSongs.SearchMusic:
      return [...action.data]
    default:
      return prestate
  }
}
