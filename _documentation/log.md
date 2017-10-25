Thurs 12pm
Our server now operates essentially like this:
  A client sends an action to the server.
  The server hands the action to the Redux Store.
  The Store calls the reducer and the reducer executes the logic related to the action.
  The Store updates its state based on the return value of the reducer.
  The Store executes the listener function subscribed by the server.
  The server emits a 'state' event.
  All connected clients - including the one that initiated the original action - receive the new state.
