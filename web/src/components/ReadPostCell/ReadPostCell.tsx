import type {
  FindReadPostQuery,
  FindReadPostQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import ReadAPost from '../ReadAPost/ReadAPost'

export const QUERY: TypedDocumentNode<
  FindReadPostQuery,
  FindReadPostQueryVariables
> = gql`
  query FindReadPostQuery($id: Int!) {
    readPost: blogPost(id: $id) {
      id
      title
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindReadPostQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  readPost,
}: CellSuccessProps<FindReadPostQuery, FindReadPostQueryVariables>) => {
  return <ReadAPost article={readPost} />
}
