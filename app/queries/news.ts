import { responsiveImageFragment, coverImage, author } from '~/lib/fragments'

export const news = `
  {
    posts: allPosts(orderBy: _createdAt_DESC, filter: {category: {eq: "48830"}}, first: 20) {
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
