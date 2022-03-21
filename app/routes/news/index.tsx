import { useLocation } from 'react-router-dom'
import { useLoaderData } from 'remix'
import { useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { news as query } from '~/queries'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { Posts } from '~/components/Posts'

export const loader = async ({ request }: any) => {
  const querySubscription = await datoQuerySubscription({
    request,
    query,
  })
  return {
    ...querySubscription,
  }
}

export default function Index() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { title, Icon, desc, sidebar }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)

  const {
    data: {
      posts: [firstPost, ...otherPosts],
    },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <Layout {...{ title, Icon, desc, sidebar, prevRoute }}>
      {firstPost && <Posts {...{ firstPost, otherPosts, category: 'news' }} />}
    </Layout>
  )
}
