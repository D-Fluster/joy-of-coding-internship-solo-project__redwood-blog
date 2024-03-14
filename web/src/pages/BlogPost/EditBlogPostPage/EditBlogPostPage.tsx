import EditBlogPostCell from 'src/components/BlogPost/EditBlogPostCell'

type BlogPostPageProps = {
  id: number
}

const EditBlogPostPage = ({ id }: BlogPostPageProps) => {
  return <EditBlogPostCell id={id} />
}

export default EditBlogPostPage
