import type {
  CreateBlogPostMutation,
  CreateBlogPostInput,
  CreateBlogPostMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BlogPostForm from 'src/components/BlogPost/BlogPostForm'

const CREATE_BLOG_POST_MUTATION: TypedDocumentNode<
  CreateBlogPostMutation,
  CreateBlogPostMutationVariables
> = gql`
  mutation CreateBlogPostMutation($input: CreateBlogPostInput!) {
    createBlogPost(input: $input) {
      id
    }
  }
`

const NewBlogPost = () => {
  const [createBlogPost, { loading, error }] = useMutation(
    CREATE_BLOG_POST_MUTATION,
    {
      onCompleted: () => {
        toast.success('BlogPost created')
        navigate(routes.blogPosts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateBlogPostInput) => {
    createBlogPost({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New BlogPost</h2>
      </header>
      <div className="rw-segment-main">
        <BlogPostForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBlogPost
