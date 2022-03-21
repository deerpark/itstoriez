import * as Icon from '~/components/Icon'
import { Button } from '~/components/Button'

export type Promotion = {
  title: string,
  url?: string,
  label?: string,
  color: {
    red: number,
    blue: number,
    green: number,
  },
  textcolor: {
    hex: string,
  },
}

export function Banner({ title, url, color: { red, blue, green }, textcolor: { hex }, label }: Promotion) {
  return (
    <div className='bx-banner' style={{
      'backgroundColor': `rgb(${red}, ${green}, ${blue})`,
      '--tw-shadow-color': `rgba(${red}, ${green}, ${blue}, .5)`,
      '--tw-shadow': 'var(--tw-shadow-colored)',
    } as React.CSSProperties}>
      <div className='bx-banner-icon'>
        <Icon.Banner />
      </div>
      <div className='bx-banner-title'><span>{title}</span></div>
      {url && <div className='bx-banner-link'>
        <Button size='small' href={url}>{label || '바로가기'}</Button>
      </div>}
    </div>
  )
}
