import { addMessage, addUser } from './actions'
import * as types from './constants/ActionTypes'

describe('add a message', () => {
  it('should create an action with an id of 0 to add a message', () => {
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
