import { Row } from '~/components/Row'

type FAQProps = {
  className?: string,
}

export function FAQ({ className }: FAQProps) {
  const list = [
    {
      title: '작업 기간은 보통 얼마나 걸리나요?',
      contents: [
        <ul key='service-faq-0' className='bx-list-items'>
          <li>홍보용 웹페이지는 3일</li>
          <li>기업 홈페이지는 5일</li>
          <li>브랜딩 컨설팅은 10일</li>
        </ul>,
      ],
    },
    {
      title: '1년 무상 A/S의 범위는 어디까지 인가요?',
      contents: [
        <ul key='service-faq-1' className='bx-list-items'>
          <li>텍스트 수정</li>
          <li>이미지 교체 및 추가, 삭제</li>
          <li>브랜딩 컬러 변경</li>
          <li>페이지 추가 작업은 추가 요금이 발생 합니다.(별도 협의)</li>
        </ul>,
      ],
    },
  ]
  const props = { title: '자주있는 질문들이예요.', list, className }
  return <Row {...props} />
}
