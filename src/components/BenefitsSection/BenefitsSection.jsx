import styled from 'styled-components';
import BenefitCard from './BenefitCard';

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundGray};
  padding: 120px 0;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 40px;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitsSection = () => {
  const benefits = [
    {
      number: '1',
      title: '기존 전산 환경 유지',
      description: '복잡한 연동 작업 없이, 쓰던 프로그램 그대로 안전하게 사용합니다.',
    },
    {
      number: '2',
      title: '정책 / 환경 전담 대응팀',
      description: '공단 사이트가 수시로 바뀌어도, 아이당뇨 전담 개발팀이 실시간으로 대응합니다.',
    },
    {
      number: '3',
      title: '처방전 3년 보관 의무 충족',
      description: '방대한 처방 데이터를 디지털로 안전하게 보관하여, 사후 검증이나 관리에도 완벽히 대비합니다.',
    },
  ];

  return (
    <Section>
      <Container>
        <CardsWrapper>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              number={benefit.number}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </CardsWrapper>
      </Container>
    </Section>
  );
};

export default BenefitsSection;
