// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

// Tutorial: model "Post"         -->   DKF: model "BlogPost"
// Tutorial: Post has a "body"    -->   DKF: BlogPost has a "description"
// Tutorial: cell "Articles"      -->   DKF: cell "ViewPosts"
// Tutorial: page "Article"       -->   DKF: page "ViewPost"
// Tutorial: cell "Article"       -->   DKF: cell "ReadPost"
// Tutorial: component "Article"  -->   DKF: component "ReadAPost"

import { Router, Route, Set } from '@redwoodjs/router'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>




      <Set wrap={ScaffoldLayout} title="BlogPosts" titleTo="blogPosts" buttonLabel="New BlogPost" buttonTo="newBlogPost">

        <Route path="/blog-posts/new" page={BlogPostNewBlogPostPage} name="newBlogPost" />

        <Route path="/blog-posts/{id:Int}/edit" page={BlogPostEditBlogPostPage} name="editBlogPost" />

        <Route path="/blog-posts/{id:Int}" page={BlogPostBlogPostPage} name="blogPost" />

        <Route path="/blog-posts" page={BlogPostBlogPostsPage} name="blogPosts" />

      </Set>

      <Set wrap={BlogLayout}>
      <Route path="/read-post/{id:Int}" page={ReadPostPage} name="readPost" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

// <Route path="/read-post/{id:Int}" ...