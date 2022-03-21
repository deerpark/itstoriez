import { Row } from '~/components/Row'

type FlowProps = {
  className?: string,
}

export function Flow({ className }: FlowProps) {
  const list = [
    {
      thumb: <span className='bx-contents-card-icon'>1</span>,
      title: '계약금 10% 입금',
      contents: ['프로젝트가 시작되기 전 미리 계약금을 받고 시작해요.'],
    },
    {
      thumb: <span className='bx-contents-card-icon'>2</span>,
      title: '기초 상담',
      contents: ['홈페이지 컨셉, 원하는 기능들을 고객님들과 함께 사전에 주고 받아요.'],
    },
    {
      thumb: <span className='bx-contents-card-icon'>3</span>,
      title: '의뢰에 관련된 자료 수신',
      contents: ['홈페이지 구축 전 필요한 자료들을 넘겨받아요. (로고, 아이디어, 제품 정보관련 사진)'],
    },
    {
      thumb: <span className='bx-contents-card-icon'>4</span>,
      title: '디자인 시안 검토',
      contents: ['디자인 컨셉의 시안을 미리 고객님들과 협의해요.'],
    },
    {
      thumb: <span className='bx-contents-card-icon'>5</span>,
      title: '수정사항 반영 및 개발 진행',
      contents: ['빠르게 개발 해 드립니다.'],
    },
    {
      thumb: <span className='bx-contents-card-icon'>6</span>,
      title: '데모',
      contents: ['첫 시연 후 수정사항 반영'],
    },
    {
      thumb: <span className='bx-contents-card-icon'>7</span>,
      title: '최종 서비스 오픈',
      contents: ['오픈 후 모니터링'],
    },
    {
      thumb: <span className='bx-contents-card-icon'>8</span>,
      title: '잔금 90% 입금',
      contents: ['프로젝트 완료'],
    },
  ]
  const props = { title: '서비스 제공은 다음과 같이 이뤄져요.', list, className }
  return <Row {...props} />
}
