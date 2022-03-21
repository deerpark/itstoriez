import { Link } from 'remix'
import { handleClickChatChannel } from '~/lib/kakao'
import * as Icon from '~/components/Icon'

export function Footer() {
  return (
    <div className='bx-footer'>
      <div className='bx-footer-logo'>
        <Link to='/'>
          <Icon.Logo />
        </Link>
      </div>
      <div className='bx-footer-contact'>
        <button onClick={handleClickChatChannel}>카카오톡 채팅 문의</button>
        <div className='bx-footer-contact-desc'>
          평일 10:00 - 18:00
          <br />
          (점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)
        </div>
      </div>
      <ul className='bx-footer-sns'>
        <li>
          <a href='https://www.youtube.com/deerpark8210' target='_blank' rel='noreferrer' title='YouTube'>
            <Icon.Youtube />
          </a>
        </li>
        <li>
          <a href='https://www.twitter.com/deerpark7' target='_blank' rel='noreferrer' title='Twitter'>
            <Icon.Twitter />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/deerpark' target='_blank' rel='noreferrer' title='Instagram'>
            <Icon.Instagram />
          </a>
        </li>
      </ul>
    </div>
  )
}
