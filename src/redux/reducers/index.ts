

import { combineReducers } from 'redux'
import songs from './songs'
import music from './music'
import comments from './comments'
import mv from './mv'

const reducers = combineReducers(
  {
    songs,
    music,
    comments,
    mv,
  }
)
export default reducers