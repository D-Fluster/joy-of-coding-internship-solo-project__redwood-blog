import { render } from '@redwoodjs/testing/web'

import ReadPostPage from './ReadPostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ReadPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReadPostPage />)
    }).not.toThrow()
  })
})
