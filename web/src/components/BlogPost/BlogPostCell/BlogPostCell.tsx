import type { FindBlogPostById, FindBlogPostByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import BlogPost from 'src/components/BlogPost/BlogPost'

export const QUERY: TypedDocumentNode<
  FindBlogPostById,
  FindBlogPostByIdVariables
> = gql`
  query FindBlogPostById($id: Int!) {
    blogPost: blogPost(id: $id) {
      id
      title
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>BlogPost not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindBlogPostByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  blogPost,
}: CellSuccessProps<FindBlogPostById, FindBlogPostByIdVariables>) => {
  return <BlogPost blogPost={blogPost} />
}
