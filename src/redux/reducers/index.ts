

import { combineReducers } from 'redux'
import songs from './songs'
import music from './music'
import playing from './playing'
import comments from './comments'

const reducers = combineReducers(
  {
    songs,
    music,
    playing,
    comments,
  }
)
export default reducers