import { Link } from 'remix'
import { Image } from 'react-datocms'

type PromotionsProps = {
  promotions: any[]
}

export function Promotions({promotions}: PromotionsProps) {
  return (<ul className='bx-promotions'>
    {promotions.map((promotion: any) => (
      <li key={promotion.title} className='bx-promotion-item'>
        <Link to={promotion.url || './'} className='bx-promotion-link'>
          <div>
            <Image
              className='bx-promotion-image'
              data={promotion.banner.responsiveImage}
              style={{
                '--tw-shadow-color': `rgba(${promotion.color.red}, ${promotion.color.green}, ${promotion.color.blue}, .5)`,
                '--tw-shadow': 'var(--tw-shadow-colored)',
              } as React.CSSProperties}
            />
          </div>
        </Link>
      </li>
    ))}
  </ul>)
}