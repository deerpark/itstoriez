import * as Icon from '~/components/Icon'

export type Route = {
  pathname?: string,
  title: string,
  sidebar: boolean,
  id?: string,
  display?: boolean,
  desc?: string,
  Icon?: JSX.Element | (() => JSX.Element),
}

export type Routes = {
  title: string,
  display?: boolean,
  children: Route[],
}

export const nav: Routes[] = [
  {
    title: '홈',
    display: false,
    children: [
      {
        pathname: '/',
        title: '홈',
        sidebar: true,
        display: true,
        desc: '',
      }
    ]
  },
  {
    title: '블로그',
    display: true,
    children: [
      {
        pathname: '/notices',
        title: '공지사항',
        sidebar: true,
        id: '48831',
        display: true,
        desc: '알려드립니다.',
        Icon: Icon.notice,
      },
      {
        pathname: '/news',
        title: '새소식',
        sidebar: true,
        id: '48830',
        display: true,
        desc: '새로운 소식',
        Icon: Icon.news,
      },
      {
        pathname: '/dev',
        title: '개발 정보',
        sidebar: true,
        id: '49562',
        display: true,
        desc: '새로운 소식',
        Icon: Icon.Publishing,
      },
    ],
  },
  {
    title: '기타',
    display: false,
    children: [
      {
        pathname: '/contact',
        title: '무료 상담',
        sidebar: true,
        display: true,
        desc: '무엇이든 알려드립니다.',
        Icon: Icon.Contact,
      },
      {
        pathname: '/privacy',
        title: '개인정보 보호정책',
        sidebar: false,
        display: true,
        desc: '개인정보 처리방침을 수립·공개합니다.',
        Icon: Icon.Privacy,
      },
    ]
  },
  {
    title: '설정',
    display: true,
    children: [
      {
        pathname: '/settings',
        title: '환경설정',
        sidebar: true,
        display: true,
        desc: '개인화 설정을 변경하실 수 있습니다.',
        Icon: Icon.Settings,
      }
    ],
  },
]

const exceptRoute = ['posts', 'services', 'events']

export function useNav(pathname?: string): Route {
  const matchedRoute = nav.reduce<Route[]>((acc, cur) => acc.concat(cur.children), []).find(route => route.pathname === pathname)
  return matchedRoute || nav[0].children[0]
}

export function usePrevRoute(pathname : string): string {
  if (!pathname) return '/'
  const paths = pathname.split('/')
  paths.pop()
  const prevRoute = paths.filter(p => !exceptRoute.includes(p)).join('/')
  return !prevRoute || prevRoute === '' ? '/' : prevRoute
}

export type HeroString = [string, string][]

export const heroString: HeroString = [
  ['모든 IT 정보', '를'],
  ['여기에 담다', ''],
]