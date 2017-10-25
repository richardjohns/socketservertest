import Server from 'socket.io'

export default function startServer() {
  const io = new Server().attach(5000)

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  )

  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS())
  })
}
