import { addMessage, addUser } from './actions'
import * as types from './constants/ActionTypes'

describe('can add a message', () => {
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

describe('can add a second message', () => {
  it('can create an action to add a message with an id of 1', () => {
    const message = 'This is a second message!'
    const author = 'Sally OMalley'
    const action = {
      type: types.ADD_MESSAGE,
      message,
      author: 'Sally OMalley',
      id: 1
    }
    expect(addMessage(message, author)).toEqual(action)
  })
})
