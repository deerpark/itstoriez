import { Row } from '~/components/Row'
import { ListItem } from '~/components/List'

type TechProps = {
  list: ListItem[],
  className?: string,
}

export function Tech({ list, className }: TechProps) {
  const props = { title: '항상 최신의 기술을 선도해요.', list, className }
  return <Row {...props} />
}
