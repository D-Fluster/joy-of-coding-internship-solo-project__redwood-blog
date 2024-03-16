import { BlogPost } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  article: BlogPost
}

const ReadAPost = ({ article }: Props) => {
  return (
    <article>
      <header>
        <h3>
          <Link to={routes.readPost({ id: article.id })}>{article.title}</Link>
        </h3>
      </header>
      <p>{article.contents}</p>
      <div>
        <em>Posted:</em> {article.createdAt}
      </div>
    </article>
  )
}

export default ReadAPost

// <article key={article.id}>
