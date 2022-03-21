import { useLoaderData } from 'remix'
import { useLocation } from 'react-router-dom'
import { useQuerySubscription } from 'react-datocms'
import { appdesign as query } from '~/queries'
import { datoQuerySubscription } from '~/lib/datocms'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { Banner } from '~/components/Banner'
import { Flow, Crews, FAQ, Refund } from '~/components/Services'

export const loader = async ({ request }: any) => {
  return datoQuerySubscription({
    request,
    query,
  })
}

export default function Appdesign() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { title, Icon, desc, sidebar }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)

  const {
    data: { promotion, photo },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <Layout {...{ title, Icon, desc, sidebar, prevRoute }}>
      <Banner {...promotion} />
      <Flow />
      <Crews
        className='bx-contents-row-bg'
        photos={[photo.common[3].responsiveImage, photo.common[4].responsiveImage, photo.common[5].responsiveImage]}
      />
      <FAQ />
      <Refund />
    </Layout>
  )
}
