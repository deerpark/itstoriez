import { Image } from 'react-datocms'
import { Button } from '~/components/Button'
import * as Icon from '~/components/Icon'

export type SectionItem = {
  icon?: JSX.Element,
  title: string,
  link?: string,
  label?: string,
  photos: any[],
  tags?: string[],
  metas?: {
    label: string | JSX.Element,
    value: string | JSX.Element,
  }[],
  extra?: JSX.Element,
  badge?: JSX.Element,
}

type SectionProps = {
  item: SectionItem,
}

export function Section({ item }: SectionProps) {
  const { title, icon, photos, /* tags, */ metas, extra, badge, link, label } = item
  return (
    <div className='bx-section'>
      <div className='bx-section-header'>
        <div className='bx-section-title'>
          {icon ? icon : <Icon.BulletSolid />}
          <span>{title}</span>
          {badge}
        </div>
        <div className='bx-section-extra'>{extra}</div>
      </div>
      <div className='bx-carousel'>
        <ul>
          {photos &&
            !!photos.length &&
            photos.map(({ responsiveImage }) => (
              <li key={responsiveImage.title} className='bx-card-sqaure'>
                <div className='bx-card-thumb'>
                  <Image className='bx-thumbnail' data={responsiveImage} />
                </div>
                <div className='bx-card-sqaure-info'>{responsiveImage.title}</div>
              </li>
            ))}
        </ul>
      </div>
      {metas && !!metas.length && (
        <div className='bx-meta-list'>
          {metas.map((meta, index) => (
            <div key={index.toString()} className='bx-meta'>
              <span className='bx-meta-icon' />
              <span className='bx-meta-info'>
                <span className='bx-meta-label'>{meta.label}</span>
                <span className='bx-meta-value'>{meta.value}</span>
              </span>
            </div>
          ))}
        </div>
      )}
      {label && (
        <div className='w-auto md:w-60 px-5 md:self-end pt-2.5 md:px-8'>
          <Button block size='large' href={link}>
            {label}
          </Button>
        </div>
      )}
    </div>
  )
}
