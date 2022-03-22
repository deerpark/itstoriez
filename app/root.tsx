import { useLocation } from 'react-router-dom'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useCatch } from 'remix'
import { renderMetaTags, toRemixMeta, useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { root as query } from '~/queries'
import { usePrevRoute, useNav, Route } from '~/lib/config'
import { RootLayout, Layout, SiteMeta } from '~/components/Layout'
import * as Icons from '~/components/Icon'

import appStyles from '~/styles/app.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
    },
    {
      rel: 'stylesheet',
      integrity: 'sha256-TehzF/2QvNKhGQrrNpoOb2Ck4iGZ1J/DI4pkd2oUsBc=',
      crossOrigin: 'anonymous',
      href: 'https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/satellite-min.css',
    },
    { rel: 'stylesheet', href: appStyles },
  ]
}

export const loader = async ({ request }: any) => {
  return datoQuerySubscription({
    request,
    query,
  })
}

export const meta = ({
  data: {
    datoQuerySubscription: {
      initialData: { blog, site },
    },
  },
}: any) => {
  return toRemixMeta([...blog.seo, ...site.favicon])
}

export function CatchBoundary() {
  const { pathname } = useLocation()
  const { status, statusText } = useCatch()
  const prevRoute = usePrevRoute(pathname)
  const { sidebar = true }: Route = useNav(pathname)
  const isRoot = pathname === '/'

  return (
    <html>
      <head>
        <SiteMeta />
        <Links />
      </head>
      <body>
        <RootLayout {...{ isRoot, pathname, sidebar }}>
          <Layout
            {...{ title: status.toString(), Icon: Icons.NotFound, desc: statusText, prevRoute, pathname, sidebar }}
          >
            <div className='bx-error'>
              <h1>페이지를 찾을 수 없습니다.</h1>
              <p>이전으로 돌아 가시거나 다시 시도해 주세요.</p>
            </div>
          </Layout>
        </RootLayout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { sidebar }: Route = useNav(pathname)
  const isRoot = pathname === '/'

  const {
    data: { site },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <html lang='en'>
      <head>
        <SiteMeta />
        <Meta />
        <Links />
        {renderMetaTags([...site.favicon])}
      </head>
      <body>
        <RootLayout {...{ isRoot, pathname, sidebar }}>
          <Outlet />
        </RootLayout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
