import { addMessage, addUser } from './actions'
import * as types from './constants/ActionTypes'

describe('add a message', () => {
  it('can create an action to add a message with an id of 0', () => {
    const message = 'This is a message'
    const author = 'Renalda'
    const action = {
      type: types.ADD_MESSAGE,
      message,
      author: 'Renalda',
      id: 0
    }
    expect(addMessage(message, author)).toEqual(action)
  })
})

describe('add another message', () => {
  it('can create an action to add a message with an id of 1', () => {
    const message = 'This is a second message!'
    const author = 'June'
    const action = {
      type: types.ADD_MESSAGE,
      message,
      author: 'June',
      id: 1
    }
    expect(addMessage(message, author)).toEqual(action)
  })
})

describe('add a user', () => {
  it('can create an action to add a user with an id of 0', () => {
    const user = 'Bertha'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 0
    }
    expect(addUser(user)).toEqual(action)
  })
})

describe('add another user', () => {
  it('can create an action to add a second user with an id of 1', () => {
    const user = 'Gladys'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 1
    }
    expect(addUser(user)).toEqual(action)
  })
})
