import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from '../client/reducers/index'

// export default function makeStore() { return createStore(
//   reducers,
//   compose(
//     applyMiddleware(thunkMiddleware)
//     // window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// )
// }

// import {createStore} from 'redux'
// import reducer from './reducer'

export default function makeStore() {
  return createStore(reducers)
}