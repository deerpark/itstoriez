import { responsiveImageFragment } from '~/lib/fragments'

export const main = `
  {
    promotions: allPromotions(orderBy: expiredat_ASC, first: 1) {
      title
      color {
        blue
        green
        red
      }
      url
      expiredat
      banner {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 776, h: 726 }) {
          ...responsiveImageFragment
        }
      }
    }
    morePosts: allPosts(orderBy: date_DESC, first: 5) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
      category {
        name
      }
    }
  }
  ${responsiveImageFragment}
`
