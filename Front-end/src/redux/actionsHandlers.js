function HandlechangeUsername(state, action) {
  return {
    ...state,
    username: action.payload,
  };
}

function HandlechangeRoom(state, action) {
  return {
    ...state,
    room: action.payload,
  };
}

function HandlechangeCurrentMessage(state, action) {
  return {
    ...state,
    currentMessage: action.payload,
  };
}

function HandlechangeMessageList(state, action) {
  return {
    ...state,
    messageList: [...state.messageList, action.payload],
  };
}

export { HandlechangeUsername, HandlechangeRoom, HandlechangeCurrentMessage, HandlechangeMessageList };
