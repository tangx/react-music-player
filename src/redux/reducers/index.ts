

import { combineReducers } from 'redux'
import songs from './songs'
import music from './music'

const reducers = combineReducers(
  {
    songs,
    music,
  }
)
export default reducers