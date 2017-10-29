import Server from 'socket.io'
import makeStore from './store'

export const store = makeStore()
startServer(store)

export default function startServer() {
  const io = new Server().attach(5000)

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  )

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS())
    socket.on('action', store.dispatch.bind(store))
  })
}
