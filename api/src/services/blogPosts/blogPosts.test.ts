import type { BlogPost } from '@prisma/client'

import {
  blogPosts,
  blogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
} from './blogPosts'
import type { StandardScenario } from './blogPosts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('blogPosts', () => {
  scenario('returns all blogPosts', async (scenario: StandardScenario) => {
    const result = await blogPosts()

    expect(result.length).toEqual(Object.keys(scenario.blogPost).length)
  })

  scenario('returns a single blogPost', async (scenario: StandardScenario) => {
    const result = await blogPost({ id: scenario.blogPost.one.id })

    expect(result).toEqual(scenario.blogPost.one)
  })

  scenario('creates a blogPost', async () => {
    const result = await createBlogPost({
      input: { title: 'String', contents: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.contents).toEqual('String')
  })

  scenario('updates a blogPost', async (scenario: StandardScenario) => {
    const original = (await blogPost({
      id: scenario.blogPost.one.id,
    })) as BlogPost
    const result = await updateBlogPost({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a blogPost', async (scenario: StandardScenario) => {
    const original = (await deleteBlogPost({
      id: scenario.blogPost.one.id,
    })) as BlogPost
    const result = await blogPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
