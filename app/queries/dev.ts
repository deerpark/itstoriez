import { responsiveImageFragment, coverImage, author } from '~/lib/fragments'

export const dev = `
  {
    posts: allPosts(orderBy: _createdAt_DESC, filter: {category: {eq: "49562"}}, first: 20) {
      title
      slug
      excerpt
      date
      ${coverImage}
      ${author}
    }
  }
  ${responsiveImageFragment}
`
