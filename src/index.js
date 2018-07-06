import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { addUser } from './actions'
import chat from './reducers'

const store = createStore(chat)

store.dispatch(addUser('Erin'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
