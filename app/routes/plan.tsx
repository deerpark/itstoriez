import { useLoaderData } from 'remix'
import { useLocation } from 'react-router-dom'
import { useQuerySubscription } from 'react-datocms'
import { datoQuerySubscription } from '~/lib/datocms'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { Layout } from '~/components/Layout'
import { Section, SectionItem } from '~/components/Section'
import { plan as query } from '~/queries'

export const loader = ({ request }: any) => {
  return datoQuerySubscription({
    request,
    query,
  })
}

export default function Plan() {
  const { pathname } = useLocation()
  const { title, Icon, desc, sidebar }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)
  const { datoQuerySubscription } = useLoaderData()

  const {
    data: { photo },
  } = useQuerySubscription(datoQuerySubscription)

  const list: SectionItem[] = [
    {
      title: '홈페이지 제작',
      badge: <span className='bx-badge'>BASIC</span>,
      link: '/services/homepage',
      label: '자세히 보기',
      photos: photo.homepagebasic,
      metas: [
        { label: '작업일', value: '7일' },
        { label: '최대 페이지', value: '5개' },
        { label: '스타일 가이드', value: '포함' },
        { label: 'A/S', value: '1년' },
        { label: '반응형 웹', value: '포함' },
        { label: '다크 모드', value: '미포함' },
        { label: '검색엔진 최적화', value: '포함' },
        { label: '도메인 (1년)', value: '무료' },
        { label: '호스팅 (1년)', value: '무료' },
        { label: '구글 워크스페이스', value: '미포함' },
        { label: '구글 애널리틱스', value: '미포함' },
        { label: '카카오톡 채널', value: '미포함' },
        { label: '채널톡', value: '포함' },
        { label: '관리자 도구', value: '미지원' },
      ],
      extra: <span>50만원</span>,
    },
    {
      title: '싱글페이지 제작',
      badge: <span className='bx-badge'>BASIC</span>,
      link: '/services/singlepage',
      label: '자세히 보기',
      photos: photo.singlepagebasic,
      metas: [
        { label: '작업일', value: '3일' },
        { label: '최대 페이지', value: '1개' },
        { label: '스타일 가이드', value: '미포함' },
        { label: 'A/S', value: '1년' },
        { label: '반응형 웹', value: '포함' },
        { label: '인터렉티브', value: '미포함' },
        { label: '다크 모드', value: '미포함' },
        { label: '검색엔진 최적화', value: '포함' },
        { label: '도메인 (1년)', value: '무료' },
        { label: '호스팅 (1년)', value: '무료' },
        { label: '관리자 도구', value: '미지원' },
      ],
      extra: <span>20만원</span>,
    },
    {
      title: '퍼블리싱 개발',
      badge: <span className='bx-badge'>BASIC</span>,
      link: '/services/publishing',
      label: '자세히 보기',
      photos: photo.publishingbasic,
      metas: [
        { label: '작업일', value: '2일' },
        { label: '최대 페이지', value: '10개' },
        { label: '스타일 가이드', value: '포함' },
        { label: 'A/S', value: '1개월' },
        { label: '반응형 웹', value: '포함' },
        { label: '다크 모드', value: '미포함' },
        { label: '웹 접근성', value: '지원' },
        { label: '웹 접근성 인증 마크', value: '미지원' },
      ],
      extra: <span>50만원</span>,
    },
    {
      title: '앱 디자인',
      badge: <span className='bx-badge'>BASIC</span>,
      link: '/services/appdesign',
      label: '자세히 보기',
      photos: photo.appdesignbasic,
      metas: [
        { label: '작업일', value: '3일' },
        { label: '최대 페이지', value: '5개' },
        { label: '디자인 시스템', value: '포함' },
        { label: 'A/S', value: '3개월' },
        { label: '다크 모드', value: '미포함' },
        { label: '웹 접근성', value: '지원' },
        { label: '웹 접근성 인증 마크', value: '미지원' },
      ],
      extra: <span>50만원</span>,
    },
    {
      title: '브랜드 가이드',
      badge: <span className='bx-badge'>BASIC</span>,
      link: '/services/branding',
      label: '자세히 보기',
      photos: photo.brandingbasic,
      metas: [
        { label: '작업일', value: '14일' },
        { label: '로고', value: '포함' },
        { label: '명함', value: '포함' },
        { label: '문서/이메일 템플릿', value: '포함' },
        { label: '디자인 시스템', value: '포함' },
        { label: 'A/S', value: '1년' },
      ],
      extra: <span>100만원</span>,
    },
  ]

  return (
    <Layout {...{ title, Icon, desc, sidebar, prevRoute }}>
      <div className='bx-sections'>
        {list.map(listItem => (
          <Section key={listItem.title} item={listItem} />
        ))}
      </div>
    </Layout>
  )
}
