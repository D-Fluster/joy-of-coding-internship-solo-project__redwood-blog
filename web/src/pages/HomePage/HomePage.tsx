import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import ViewPostsCell from 'src/components/ViewPostsCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Dani's Redwood Blog" description="Welcome to Dani's Redwood Blog!" />

<main>
      <h2><em><strong>
        All Blog Posts:
      </strong></em></h2>

      <ViewPostsCell />

</main>
    </>
  )
}

export default HomePage
