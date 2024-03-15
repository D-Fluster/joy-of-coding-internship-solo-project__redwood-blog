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
// Tutorial: model "Contact"      -->   DKF: model "ContactForm"

import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />

      <Route path="/signup" page={SignupPage} name="signup" />

      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />

      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <PrivateSet unauthenticated="home">
        <Set wrap={ScaffoldLayout} title="BlogPosts" titleTo="blogPosts" buttonLabel="New BlogPost" buttonTo="newBlogPost">
          <Route path="/admin/blog-posts/new" page={BlogPostNewBlogPostPage} name="newBlogPost" />

          <Route path="/admin/blog-posts/{id:Int}/edit" page={BlogPostEditBlogPostPage} name="editBlogPost" />

          <Route path="/admin/blog-posts/{id:Int}" page={BlogPostBlogPostPage} name="blogPost" />

          <Route path="/admin/blog-posts" page={BlogPostBlogPostsPage} name="blogPosts" />
        </Set>
      </PrivateSet>

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
