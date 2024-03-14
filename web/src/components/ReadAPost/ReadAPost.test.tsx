import { render } from '@redwoodjs/testing/web'

import ReadAPost from './ReadAPost'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ReadAPost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReadAPost />)
    }).not.toThrow()
  })
})
