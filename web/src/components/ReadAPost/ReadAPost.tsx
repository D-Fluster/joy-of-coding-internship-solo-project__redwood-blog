import { Link, routes } from "@redwoodjs/router"
import { BlogPost } from "types/graphql"

interface Props {
  article: BlogPost
}

const ReadAPost = ({ article }: Props) => {
  return (
    <article>
    <header>
      <h3><Link to={routes.readPost({ id: article.id })}>{article.title}</Link></h3>
    </header>
    <p>{article.description}</p>
    <div><em>Posted:</em> {article.createdAt}</div>
  </article>
  )
}

export default ReadAPost

// <article key={article.id}>