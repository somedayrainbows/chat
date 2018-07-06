import users from './users'
import * as types from '../constants/ActionTypes'

describe('Users reducer', () => {
  it('can return the intiial state, empty', () => {
    expect(users(undefined, {})).toEqual([])
  })

  it('can handle ADD_USER and store every user', () => {
    expect(
      users([], {
        type: types.ADD_USER,
        name: 'Gertrude'
      })
    ).toEqual([
      {
        name: 'Gertrude'
      }
    ])

    expect(
      users(
        [
          {
            name: 'Sally'
          }
        ],
        {
          type: types.ADD_USER,
          name: 'Gertrude'
        }
      )
    ).toEqual([
      {
        name: 'Sally',
      },
      {
        name: 'Gertrude'
      }
    ])
  })
})
