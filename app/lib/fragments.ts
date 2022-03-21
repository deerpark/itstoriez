// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020

export const responsiveImageFragment: string = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`

export const metaTagsFragment: string = `
  fragment metaTagsFragment on Tag {
    attributes
    content
    tag
  }
`

export const coverImage = `coverImage {
  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
    ...responsiveImageFragment
  }
}`

export const author = `author {
  name
  picture {
    url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
  }
}`
