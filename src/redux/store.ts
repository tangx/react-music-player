

import { legacy_createStore as createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

const middlewares = applyMiddleware(thunk)
const store = createStore(reducers, composeWithDevTools(middlewares))
export default store


export type RootState = ReturnType<typeof reducers>

