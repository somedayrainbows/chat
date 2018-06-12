import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import chat from './reducers'
import * as types from '../constants/ActionTypes'

const store = createStore(chat)
let nextMessageId = 0
const nextUserId = 0

// actions:
export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
