import { useLoaderData } from 'remix'
import { useLocation } from 'react-router-dom'
import { Image, useQuerySubscription } from 'react-datocms'
import { publishing as query } from '~/queries'
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

export default function Publishing() {
  const { pathname } = useLocation()
  const { datoQuerySubscription } = useLoaderData()
  const { title, Icon, desc, sidebar }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)

  const {
    data: { promotion, photo },
  } = useQuerySubscription(datoQuerySubscription)

  const recommendList: ListItem[] = [
    {
      thumb: <Image data={photo.publishing[0].responsiveImage} />,
      title: '인터넷 사업자 대표님',
      contents: ['프로젝트에 마크업 개발 및 UI 개발 서비스 제공, 턴키 계약'],
    },
    {
      thumb: <Image data={photo.publishing[1].responsiveImage} />,
      title: '대기업 SI 담당자님',
      contents: ['대규모 프로젝트 마크업, UI 개발 서비스 제공, 상주 불가, 턴키 계약'],
    },
  ]
  const techList: ListItem[] = [
    {
      thumb: <Image data={photo.publishing[2].responsiveImage} />,
      title: 'TailwindCSS 지원',
      contents: [
        '요즘 각광받는 유틸리티 클래스 프레임워크인 TailwindCSS로 개발 가능하며 다양한 CSS 방법론으로도 가능합니다.',
      ],
    },
    {
      thumb: <Image data={photo.publishing[3].responsiveImage} />,
      title: '시맨틱 마크업 개발',
      contents: ['문서에 구조적인 의미를 부여하여 최대한 시맨틱한 개발을 제공합니다.'],
    },
    {
      thumb: <Image data={photo.publishing[4].responsiveImage} />,
      title: '웹 접근성 준수',
      contents: ['요구사항에 따라 접근성을 준수하여 인증 마크를 받을 수 있도록 개발해 드립니다.'],
    },
    {
      thumb: <Image data={photo.publishing[5].responsiveImage} />,
      title: '반응형 페이지로 제작',
      contents: ['다양한 PC 크로스, 모던 브라우저, 모바일에서 각각 크기에 최적화 되도록 맞춤 제작 해 드립니다.'],
    },
  ]

  return (
    <Layout {...{ title, Icon, desc, sidebar, prevRoute }}>
      <Banner {...promotion} />
      <Recommend list={recommendList} />
      <Tech className='bx-contents-row-bg' list={techList} />
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
