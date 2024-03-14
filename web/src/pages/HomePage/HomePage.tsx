import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import ViewPostsCell from 'src/components/ViewPostsCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

<main>
      <h2>Wazzaaap, I'm the Home Page&nbsp;<em><strong>!</strong></em></h2>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <h2><em><strong>All Blog Posts:</strong></em></h2>
      <ViewPostsCell />
      </main>
    </>
  )
}

export default HomePage
