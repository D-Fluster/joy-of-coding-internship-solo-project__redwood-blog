export const schema = gql`
  type BlogPost {
    id: Int!
    title: String!
    contents: String!
    createdAt: DateTime!
  }

  type Query {
    blogPosts: [BlogPost!]! @skipAuth
    blogPost(id: Int!): BlogPost @skipAuth
  }

  input CreateBlogPostInput {
    title: String!
    contents: String!
  }

  input UpdateBlogPostInput {
    title: String
    contents: String
  }

  type Mutation {
    createBlogPost(input: CreateBlogPostInput!): BlogPost! @requireAuth
    updateBlogPost(id: Int!, input: UpdateBlogPostInput!): BlogPost!
      @requireAuth
    deleteBlogPost(id: Int!): BlogPost! @requireAuth
  }
`
