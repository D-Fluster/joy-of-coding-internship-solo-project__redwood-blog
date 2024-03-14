import type {
  EditBlogPostById,
  UpdateBlogPostInput,
  UpdateBlogPostMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BlogPostForm from 'src/components/BlogPost/BlogPostForm'

export const QUERY: TypedDocumentNode<EditBlogPostById> = gql`
  query EditBlogPostById($id: Int!) {
    blogPost: blogPost(id: $id) {
      id
      title
      description
      createdAt
    }
  }
`

const UPDATE_BLOG_POST_MUTATION: TypedDocumentNode<
  EditBlogPostById,
  UpdateBlogPostMutationVariables
> = gql`
  mutation UpdateBlogPostMutation($id: Int!, $input: UpdateBlogPostInput!) {
    updateBlogPost(id: $id, input: $input) {
      id
      title
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ blogPost }: CellSuccessProps<EditBlogPostById>) => {
  const [updateBlogPost, { loading, error }] = useMutation(
    UPDATE_BLOG_POST_MUTATION,
    {
      onCompleted: () => {
        toast.success('BlogPost updated')
        navigate(routes.blogPosts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateBlogPostInput,
    id: EditBlogPostById['blogPost']['id']
  ) => {
    updateBlogPost({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit BlogPost {blogPost?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BlogPostForm
          blogPost={blogPost}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
