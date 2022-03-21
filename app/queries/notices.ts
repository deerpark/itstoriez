import { responsiveImageFragment, coverImage, author } from '~/lib/fragments'

export const notice = `
  {
    posts: allPosts(orderBy: _createdAt_DESC, filter: {category: {eq: "48831"}}, first: 20) {
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
