import { useLocation } from 'react-router-dom'
import Lottie from 'lottie-react'
import { useNav, usePrevRoute, Route } from '~/lib/config'
import { handleClickChatChannel, handleClickAddChannel } from '~/lib/kakao'
import { Layout } from '~/components/Layout'
import { Button, ButtonGroup } from '~/components/Button'
import * as Icons from '~/components/Icon'
import cowboyHatFace from '~/lotties/cowboy-hat-face.json'

export default function Contact() {
  const { pathname } = useLocation()
  const { title, Icon, desc, sidebar }: Route = useNav(pathname)
  const prevRoute = usePrevRoute(pathname)
  return (
    <>
      <Layout {...{ title, Icon, desc, sidebar, prevRoute }}>
        <div className='bx-page-row pb-20'>
          <div className='w-40 pt-20'>
            <Lottie loop autoplay animationData={cowboyHatFace} />
          </div>
          <div className='flex flex-col items-center'>
            <b className='text-5xl md:text-7xl font-thin mb-5 text-slate-600 hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-200'>
              채팅 문의
            </b>
            <span className='text-sm md:text-base opacity-80'>평일 10:00 - 18:00</span>
            <span className='text-xs md:text-sm opacity-50'>(점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)</span>
          </div>
          <div className='flex items-center justify-center gap-x-2'>
            <ButtonGroup className='flex'>
              <Button icon={<Icons.Kakao />} onClick={handleClickAddChannel}>
                채널 추가
              </Button>
              <Button icon={<Icons.Kakao />} onClick={handleClickChatChannel}>
                카톡 채팅
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Layout>
    </>
  )
}
