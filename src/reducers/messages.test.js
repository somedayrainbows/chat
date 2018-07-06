import messages from './messages'
import * as types from '../constants/ActionTypes'

describe('Messages reducer', () => {
  it('can return the initial state as empty', () => {
    expect(messages(undefined, {})).toEqual([])
  })

  it('can handle ADD_MESSAGE and store every message', () => {
    expect(
      messages([], {
        type: types.ADD_MESSAGE,
        message: 'Heyo',
        author: 'Raylene'
      })
    ).toEqual([
      {
        message: 'Heyo',
        author: 'Raylene'
      }
    ])

    expect(
      messages(
        [
          {
            message: 'Heyo',
            author: 'Raylene'
          }
        ],
        {
          type: types.ADD_MESSAGE,
          message: 'Heyo...a second time',
          author: 'Ayesha'
        }
      )
    ).toEqual([
      {
        message: 'Heyo',
        author: 'Raylene'
      },
      {
        message: 'Heyo...a second time',
        author: 'Ayesha'
      }
    ])
  })
})
