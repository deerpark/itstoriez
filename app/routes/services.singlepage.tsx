import { useLoaderData } from 'remix'
import { useLocation } from 'react-router-dom'
import { Image, useQuerySubscription } from 'react-datocms'
import { singlepage as query } from '~/queries'
import { datoQuerySubscription } from '~/lib/datocms'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { Banner } from '~/components/Banner'
import { ListItem } from '~/components/List'
import { Recommend, Tech, Flow, Crews, FAQ, Refund } from '~/components/Services'

export const loader = async ({ request }: any) => {
  return datoQuerySubscription({
    request,
    query,
  })
}

export default function Singlepage() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { title, Icon, desc, sidebar }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)

  const {
    data: { promotion, photo },
  } = useQuerySubscription(datoQuerySubscription)

  const list: ListItem[] = [
    {
      thumb: <Image data={photo.singlepage[0].responsiveImage} />,
      title: 'IT 기업 마케팅 담당자님',
      contents: ['룰렛 이벤트 까지 인터렉션 개발 포함 요구사항을 최대한 맞춤 제공'],
    },
    {
      thumb: <Image data={photo.singlepage[1].responsiveImage} />,
      title: '쇼핑몰 사장님',
      contents: ['신규 유입, 리텐션등 마케팅에 활용하고 싶은 간단한 이벤트 페이지 제공'],
    },
    {
      thumb: <Image data={photo.singlepage[2].responsiveImage} />,
      title: '인테리어 가게 사장님',
      contents: ['사업을 간단하게 소개하고 인터넷에 홍보할 수 있도록 랜딩 페이지 제공'],
    },
  ]
  const techList: ListItem[] = [
    {
      thumb: <Image data={photo.common[0].responsiveImage} />,
      title: '최신 테크 트리',
      contents: [
        'NextJS/Remix React 프레임워크, NodeJS, PostgreSQL기반 최신 기술로 개발 함으로써 빠르고 가벼운 서비스를제공합니다.',
      ],
    },
    {
      thumb: <Image data={photo.common[1].responsiveImage} />,
      title: 'SEO 도입',
      contents: [
        '구글, 네이버 검색엔진에 최적화하여 작업해 드립니다. 검색은 어디에서나 쉽고 빠르고 가장 상위에 랭크될 수있도록 해 드립니다.',
      ],
    },
    {
      thumb: <Image data={photo.common[2].responsiveImage} />,
      title: '반응형 페이지로 제작',
      contents: ['다양한 PC 크로스, 모던 브라우저, 모바일에서 각각 크기에 최적화 되도록 맞춤 제작 해 드립니다.'],
    },
  ]

  return (
    <Layout {...{ title, Icon, desc, sidebar, prevRoute }}>
      <Banner {...promotion} />
      <Recommend list={list} />
      <Tech list={techList} className='bx-contents-row-bg' />
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
