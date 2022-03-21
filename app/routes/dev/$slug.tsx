import { useLoaderData } from 'remix'
import { useLocation } from 'react-router-dom'
import invariant from 'tiny-invariant'
import { Image, toRemixMeta, useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { post as query } from '~/queries/posts'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Avatar } from '~/components/Avatar'
import { Date } from '~/components/Date'
import { Layout } from '~/components/Layout'
import { Post } from '~/components/Posts'

export const loader = async ({ request, params }: any) => {
  invariant(params.slug, 'expected params.slug')

  return datoQuerySubscription({
    request,
    query,
    variables: {
      slug: params.slug,
    },
  })
}

export const meta = ({
  data: {
    datoQuerySubscription: {
      initialData: { post },
    },
  },
}: any) => {
  return toRemixMeta(post.seo)
}

export default function PostSlug() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { title, desc, sidebar }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)

  const {
    data: { post },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <Layout
      {...{
        title: post?.title || title,
        Icon: <Avatar name={post.author.name} picture={post.author.picture} />,
        desc: post?.excerpt || desc,
        prevRoute,
        cover: <Image data={post.coverImage.responsiveImage} />,
        date: <Date dateString={post.date} />,
        categoryId: post?.category?.id,
        sidebar,
      }}
    >
      <Post {...{ post }} />
    </Layout>
  )
}
