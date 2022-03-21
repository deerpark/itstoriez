import { Link } from 'remix'
import { Routes } from '~/lib/config'
import * as Icon from '~/components/Icon'

type NavProps = {
  nav?: Routes[],
  pathname?: string,
  categoryId?: string,
}

export function Nav({ nav, pathname, categoryId }: NavProps) {
  return (
    <ul className='bx-nav'>
      {nav ? (
        nav
          .filter(n => n.display)
          .map(navItem => {
            return (
              <li key={navItem.title}>
                <h3 className='bx-nav-category'>{navItem.title}</h3>
                {navItem?.children && (
                  <ul className='bx-nav-children'>
                    {navItem.children
                      .filter(n => n.display)
                      .map(navSubItem => {
                        return (
                          <li key={navSubItem.title}>
                            {navSubItem.pathname ? (
                              <Link
                                className={`bx-nav-item ${
                                  (pathname && pathname !== '/' && pathname.indexOf(navSubItem.pathname) !== -1) ||
                                  navSubItem.pathname === categoryId
                                    ? 'bx-nav-item-active'
                                    : ''
                                }`}
                                to={navSubItem.pathname}
                              >
                                {navSubItem?.Icon && (
                                  <span className='bx-nav-icon'>
                                    {typeof navSubItem.Icon === 'function' && <navSubItem.Icon />}
                                  </span>
                                )}
                                <span className='bx-nav-label'>
                                  <span className='bx-nav-name'>
                                    {categoryId}
                                    {navSubItem.title}
                                  </span>
                                  {navSubItem?.desc && <span className='bx-nav-desc'>{navSubItem.desc}</span>}
                                </span>
                                <span className='bx-nav-arrow'>
                                  <Icon.ArrowRight />
                                </span>
                              </Link>
                            ) : (
                              <span className='bx-nav-item'>
                                {navSubItem?.Icon && (
                                  <span className='bx-nav-icon'>
                                    {typeof navSubItem.Icon === 'function' && <navSubItem.Icon />}
                                  </span>
                                )}
                                <span className='bx-nav-label'>
                                  <span className='bx-nav-name'>{navSubItem.title}</span>
                                  {navSubItem?.desc && <span className='bx-nav-desc'>{navSubItem.desc}</span>}
                                </span>
                              </span>
                            )}
                          </li>
                        )
                      })}
                  </ul>
                )}
              </li>
            )
          })
      ) : (
        <li>등록된 라우트 목록이 존재하지 않습니다.</li>
      )}
    </ul>
  )
}
