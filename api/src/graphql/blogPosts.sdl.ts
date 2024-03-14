export const schema = gql`
  type BlogPost {
    id: Int!
    title: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    blogPosts: [BlogPost!]! @requireAuth
    blogPost(id: Int!): BlogPost @requireAuth
  }

  input CreateBlogPostInput {
    title: String!
    description: String!
  }

  input UpdateBlogPostInput {
    title: String
    description: String
  }

  type Mutation {
    createBlogPost(input: CreateBlogPostInput!): BlogPost! @requireAuth
    updateBlogPost(id: Int!, input: UpdateBlogPostInput!): BlogPost!
      @requireAuth
    deleteBlogPost(id: Int!): BlogPost! @requireAuth
  }
`
