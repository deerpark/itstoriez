import { Link } from 'remix'
import { Route } from '~/lib/config'
import * as Icons from '~/components/Icon'

type HeaderProps = Route & {
  prevRoute: string | undefined,
  cover?: JSX.Element,
  date?: JSX.Element,
  sidebar?: boolean,
  isWide?: boolean,
}

export function Header({ title, Icon, desc, prevRoute, cover, date, sidebar, isWide }: HeaderProps) {
  return (
    <div className='bx-header'>
      {(isWide || !sidebar) && (
        <div className='bx-pc-nav'>
          <div className='bx-mobile-home'>
            {prevRoute && prevRoute !== '/' ? (
              <Link to={prevRoute}>
                <Icons.ArrowLeftLight />
              </Link>
            ) : (
              <Link to='/'>
                <Icons.HomeLight />
              </Link>
            )}
          </div>
        </div>
      )}
      <div className='bx-mobile-nav'>
        <div className='bx-mobile-home'>
          {prevRoute && prevRoute !== '/' ? (
            <Link to={prevRoute}>
              <Icons.ArrowLeftLight />
            </Link>
          ) : (
            <Link to='/'>
              <Icons.HomeLight />
            </Link>
          )}
        </div>
        <div className='bx-mobile-logo'>
          <Link to='/'>
            <Icons.Logo className='w-32 h-4' />
          </Link>
        </div>
        <div className='bx-mobile-settings'>
          <Link to='/settings'>
            <Icons.SettingsLight />
          </Link>
        </div>
      </div>
      <div className='bx-header-section'>
        {cover && <div className='bx-cover'>{cover}</div>}
        <div className='bx-header-content'>
          <div className='bx-header-meta'>
            <div className='bx-header-title'>
              <span>{title}</span>
            </div>
            <div className='bx-header-desc'>{desc}</div>
            <div className='bx-header-desc'>{date}</div>
          </div>
          <div className='bx-header-icon'>{Icon && typeof Icon === 'function' ? <Icon /> : Icon}</div>
        </div>
      </div>
    </div>
  )
}
