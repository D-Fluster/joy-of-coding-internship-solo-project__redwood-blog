import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const blogPosts: QueryResolvers['blogPosts'] = () => {
  return db.blogPost.findMany()
}

export const blogPost: QueryResolvers['blogPost'] = ({ id }) => {
  return db.blogPost.findUnique({
    where: { id },
  })
}

export const createBlogPost: MutationResolvers['createBlogPost'] = ({
  input,
}) => {
  return db.blogPost.create({
    data: input,
  })
}

export const updateBlogPost: MutationResolvers['updateBlogPost'] = ({
  id,
  input,
}) => {
  return db.blogPost.update({
    data: input,
    where: { id },
  })
}

export const deleteBlogPost: MutationResolvers['deleteBlogPost'] = ({ id }) => {
  return db.blogPost.delete({
    where: { id },
  })
}
