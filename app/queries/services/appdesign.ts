export const appdesign = `
  query Appdesign {
    promotion {
      title(locale: ko_KR)
      url
      color {
        red
        green
        blue
      }
      textcolor {
        hex
      }
      label(locale: ko_KR)
      banner {
        responsiveImage {
          srcSet
          webpSrcSet
          title
          alt
          base64
          aspectRatio
          bgColor
          sizes
          src
          height
          width
        }
      }
    }
    photo {
      common {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
      appdesign {
        responsiveImage {
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          webpSrcSet
          width
        }
      }
    }
  }
`
