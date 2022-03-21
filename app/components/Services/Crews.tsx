import { Image } from 'react-datocms'
import { Row } from '~/components/Row'

type CrewsProps = {
  className?: string,
  photos: any[],
}

export function Crews({ photos, className }: CrewsProps) {
  const [crews1Thumb, crews2Thumb, crews3Thumb] = photos
  const list = [
    {
      thumb: <Image data={crews1Thumb} />,
      title: '디자인/개발 "용용"',
      contents: ['IT최전선에서 싸워온 경력 10년 이상의 전문가'],
    },
    {
      thumb: <Image data={crews2Thumb} />,
      title: '프론트엔드/백엔드 개발 "뚜식이"',
      contents: ['IT최전선에서 싸워온 경력 10년 이상의 전문가'],
    },
    {
      thumb: <Image data={crews3Thumb} />,
      title: '데이터/인프라 개발 "명자"',
      contents: ['IT최전선에서 싸워온 경력 10년 이상의 전문가'],
    },
  ]
  const props = { title: '저희 팀은 전문가들로 구성 되어있어요.', list, className }
  return <Row {...props} />
}
