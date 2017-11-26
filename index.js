import makeStore from './src/store'
import startServer from './src/server'

export const store = makeStore()
console.log('This is store: ',store)
console.log("This is store.getState(): ", store.getState());

startServer(store)

store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
})
store.dispatch({
  type: 'NEXT'
})
