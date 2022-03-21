import { Row } from '~/components/Row'
import { ListItem } from '~/components/List'

type RecommendProps = {
  list: ListItem[],
  className?: string,
  photos?: any[],
}

export function Recommend({ list, className }: RecommendProps) {
  const props = { title: '이런분께 추천 드려요.', list, className }
  return <Row {...props} />
}
