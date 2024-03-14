import BlogPostCell from 'src/components/BlogPost/BlogPostCell'

type BlogPostPageProps = {
  id: number
}

const BlogPostPage = ({ id }: BlogPostPageProps) => {
  return <BlogPostCell id={id} />
}

export default BlogPostPage
