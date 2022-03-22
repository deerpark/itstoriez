import { Link } from 'remix'
import { Button, ButtonGroup } from '~/components/Button'
import { HeroString } from '~/lib/config'
import * as Icon from '~/components/Icon'

type HeroProps = {
  heroString?: HeroString,
  desc?: string,
  isRoot?: boolean,
  links?: { url?: string, label: string, handler?: () => void | undefined }[],
}

export function Hero({ heroString = [['', '']], desc, links, isRoot }: HeroProps) {
  return (
    <div className='bx-hero'>
      <div className={`bx-hero-logo ${isRoot ? 'justify-center' : 'justify-center md:pb-0'}`}>
        <Link className={`p-4 ${isRoot ? '' : 'md:p-0 md:py-10'}`} to='/'>
          <Icon.Logo className='w-32 h-4' />
        </Link>
      </div>
      {
        <>
          {heroString && (
            <div className='flex flex-col items-center'>
              {heroString.map(heading => (
                <div
                  key={heading[0]}
                  className='inline-flex gap-x-0.5 text-2xl leading-tight text-slate-600 dark:text-slate-300 even:ml-5'
                >
                  <span className='font-black'>{heading[0]}</span>
                  <span className='font-thin'>{heading[1]}</span>
                </div>
              ))}
            </div>
          )}
          {desc && <div className='inline-flex max-w-[200px] text-xs my-3 text-center'>{desc}</div>}
          {links && (
            <div className='bx-hero-links'>
              <ButtonGroup className='flex'>
                {links.map(link =>
                  link.url ? (
                    <Button key={link.url} href={link.url} size='large'>
                      {link.label}
                    </Button>
                  ) : (
                    <Button key={link.label} onClick={link.handler} size='large'>
                      {link.label}
                    </Button>
                  )
                )}
              </ButtonGroup>
            </div>
          )}
        </>
      }
    </div>
  )
}
