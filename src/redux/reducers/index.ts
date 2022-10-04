

import { combineReducers } from 'redux'
import songs from './songs'
import music from './music'
import playing from './playing'

const reducers = combineReducers(
  {
    songs,
    music,
    playing,
  }
)
export default reducers