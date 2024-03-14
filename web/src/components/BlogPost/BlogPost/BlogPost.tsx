import type {
  DeleteBlogPostMutation,
  DeleteBlogPostMutationVariables,
  FindBlogPostById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_BLOG_POST_MUTATION: TypedDocumentNode<
  DeleteBlogPostMutation,
  DeleteBlogPostMutationVariables
> = gql`
  mutation DeleteBlogPostMutation($id: Int!) {
    deleteBlogPost(id: $id) {
      id
    }
  }
`

interface Props {
  blogPost: NonNullable<FindBlogPostById['blogPost']>
}

const BlogPost = ({ blogPost }: Props) => {
  const [deleteBlogPost] = useMutation(DELETE_BLOG_POST_MUTATION, {
    onCompleted: () => {
      toast.success('BlogPost deleted')
      navigate(routes.blogPosts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBlogPostMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete blogPost ' + id + '?')) {
      deleteBlogPost({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            BlogPost {blogPost.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{blogPost.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{blogPost.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{blogPost.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(blogPost.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBlogPost({ id: blogPost.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(blogPost.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default BlogPost
