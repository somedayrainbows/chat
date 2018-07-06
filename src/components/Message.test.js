import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Message from './Message'

const setup = () => {
  const props = {
    author: 'Lenora',
    message: 'Hey there'
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<Message {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('Message', () => {
  it('can render itself', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('p').html()).toBe('<p><i>Lenora</i>: Hey there</p>')
  })
})
