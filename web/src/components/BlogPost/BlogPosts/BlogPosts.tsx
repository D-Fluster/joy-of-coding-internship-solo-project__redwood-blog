import type {
  DeleteBlogPostMutation,
  DeleteBlogPostMutationVariables,
  FindBlogPosts,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/BlogPost/BlogPostsCell'
import { timeTag, truncate } from 'src/lib/formatters'

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

const BlogPostsList = ({ blogPosts }: FindBlogPosts) => {
  const [deleteBlogPost] = useMutation(DELETE_BLOG_POST_MUTATION, {
    onCompleted: () => {
      toast.success('BlogPost deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteBlogPostMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete blogPost ' + id + '?')) {
      deleteBlogPost({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.map((blogPost) => (
            <tr key={blogPost.id}>
              <td>{truncate(blogPost.id)}</td>
              <td>{truncate(blogPost.title)}</td>
              <td>{truncate(blogPost.description)}</td>
              <td>{timeTag(blogPost.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.blogPost({ id: blogPost.id })}
                    title={'Show blogPost ' + blogPost.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBlogPost({ id: blogPost.id })}
                    title={'Edit blogPost ' + blogPost.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete blogPost ' + blogPost.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(blogPost.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BlogPostsList
