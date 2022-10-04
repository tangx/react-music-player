

import { combineReducers } from 'redux'
import songs from './songs'
import music from './music'
import playing from './playing'
import comments from './comments'
import mv from './mv'

const reducers = combineReducers(
  {
    songs,
    music,
    playing,
    comments,
    mv,
  }
)
export default reducers