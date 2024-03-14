import { Link, routes } from '@redwoodjs/router'

import type { ViewPostsQuery, ViewPostsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import ReadAPost from '../ReadAPost/ReadAPost'

export const QUERY: TypedDocumentNode<
  ViewPostsQuery,
  ViewPostsQueryVariables
> = gql`
  query ViewPostsQuery {
    viewPosts: blogPosts {
      id
      title
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ viewPosts }: CellSuccessProps<ViewPostsQuery>) => {
  return (
    <>
      {viewPosts.map((item) => (
        <ReadAPost key={item.id} article={item} />
      ))}
    </>
  )
}
