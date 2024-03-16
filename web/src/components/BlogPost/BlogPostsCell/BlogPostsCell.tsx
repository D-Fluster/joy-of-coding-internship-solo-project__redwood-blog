import type { FindBlogPosts, FindBlogPostsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import BlogPosts from 'src/components/BlogPost/BlogPosts'

export const QUERY: TypedDocumentNode<
  FindBlogPosts,
  FindBlogPostsVariables
> = gql`
  query FindBlogPosts {
    blogPosts {
      id
      title
      contents
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No blogPosts yet. '}
      <Link to={routes.newBlogPost()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindBlogPosts>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  blogPosts,
}: CellSuccessProps<FindBlogPosts, FindBlogPostsVariables>) => {
  return <BlogPosts blogPosts={blogPosts} />
}
