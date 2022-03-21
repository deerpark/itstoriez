import * as Icon from '~/components/Icon'
import { ListItem, List } from '~/components/List'

type RowProps = {
  className?: string,
  title?: string | JSX.Element,
  icon?: JSX.Element,
  list: ListItem[],
}

export function Row({ icon, title, list, className }: RowProps) {
  return (
    <div className={`bx-contents-row bx-contents-row-extend ${className}`}>
      <div className='bx-contents-row pb-1 md:pb-5 pt-5 md:pt-8'>
        <h2 className='bx-contents-h2'>
          <span>{(icon && icon) || <Icon.BulletSolid />}</span>
          <span>{title}</span>
        </h2>
      </div>
      <List list={list} />
    </div>
  )
}
