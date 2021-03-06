import { Row } from '~/components/Row'

type RefundProps = {
  className?: string,
}

export function Refund({ className }: RefundProps) {
  const list = [
    {
      title: '기본 환불 규정',
      contents: [
        '전문가와 의뢰인의 상호 협의하에 청약 철회 및 환불이 가능합니다.',
        '작업이 완료된 이후 또는 자료, 프로그램 등 서비스가 제공된 이후에는 환불이 불가합니다. ( 소비자보호법 17조 2항의 5조. 용역 또는 「문화산업진흥 기본법」 제2조 제5호의 디지털콘텐츠의 제공이 개시된 경우에 해당)',
      ],
    },
    {
      title: '전문가 책임 사유',
      contents: [
        '전문가의 귀책사유로 당초 약정했던 서비스 미이행 혹은 보편적인 관점에서 심각하게 잘못 이행한 경우 결제 금액 전체 환불이 가능합니다.',
      ],
    },
    {
      title: '의뢰인 책임 사유',
      contents: [
        '서비스 진행 도중 의뢰인의 귀책사유로 인해 환불을 요청할 경우, 사용 금액을 아래와 같이 계산 후 총 금액의 10%를 공제하여 환불합니다.',
        <ul key='service-refund-2' className='bx-list-items'>
          <li>총 작업량의 1/3 경과 전 : 이미 납부한 요금의 2/3해당액</li>
          <li>총 작업량의 1/2 경과 전 : 이미 납부한 요금의 1/2해당액</li>
          <li>총 작업량의 1/2 경과 후 : 반환하지 않음</li>
        </ul>,
      ],
    },
  ]
  const props = { title: '취소 및 환불규정을 알려드릴게요.', list, className }
  return <Row {...props} />
}
