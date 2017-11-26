import Server from 'socket.io'
import {toJS} from 'immutable'
// import store from './store'
// const store = createStore(reducers);

export default function startServer(store) {
  const io = new Server().attach(8090)

  store.subscribe(
    () => io.emit('state', store.getState())
    // () => io.emit('state', store.getState().toJS())
  )

  io.on('connection', (socket) => {
    socket.emit('state', store.getState())
    // socket.emit('state', store.getState().toJS())
    socket.on('action', store.dispatch.bind(store))
  })
}
