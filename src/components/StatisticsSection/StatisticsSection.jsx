import styled from 'styled-components';
import StatCard from './StatCard';

const Section = styled.section`
  width: 100%;
  background-color: #F9FAFB;
  padding: 120px 0 50px 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 60px 0 40px 0;
  }
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 11px;
    gap: 30px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 50px;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin: 0;
  margin-bottom: 10px;

  .mobile-break {
    display: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 24px;
    line-height: 1.35;
    font-weight: ${props => props.theme.fontWeights.bold};
    margin: 0;

    .mobile-break {
      display: block;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.black};
  opacity: 0.55;
  text-align: center;
  line-height: 1.6;
  margin: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 14px;
    font-weight: ${props => props.theme.fontWeights.medium};
    line-height: 1.5;
    color: ${props => props.theme.colors.black};
  }
`;

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 30px;
  width: 82%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    max-width: 300px;
    gap: 12px;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StatisticsSection = () => {
  const stats = [
    { number: '250+', label: '활발한 이용 약국' },
    { number: '80%', label: '처리 시간 단축' },
    { number: '90%', label: '반려 / 오류 감소' },
    { number: '3분', label: '평균 청구 처리' },
  ];

  return (
    <Section id="증명과 신뢰-통계">
      <Container>
        <TitleWrapper>
          <Title>
            이미 현장에서 수백 명이{' '}
            <span className="mobile-break" />
            증명하고 있습니다.
          </Title>
          <Subtitle>
            단순한 숫자가 아닌, 실제 약국 현장의 목소리입니다.
          </Subtitle>
        </TitleWrapper>
        <StatsWrapper>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </StatsWrapper>
      </Container>
    </Section>
  );
};

export default StatisticsSection;
