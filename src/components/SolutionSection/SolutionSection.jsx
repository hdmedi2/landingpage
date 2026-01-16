import styled from 'styled-components';
import AutoBridgeDiagram from './AutoBridgeDiagram';
import FeatureCard from './FeatureCard';

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
  gap: 100px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 40px;
    gap: 60px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 50px;
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 15px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
  text-align: center;
  line-height: 1.6;
  margin-top: 10px;
  margin-bottom: 55px;
`;

const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 25px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SolutionSection = () => {
  const features = [
    {
      title: '안전함',
      description: '기존 내부 시스템을 건드리지 않습니다.',
    },
    {
      title: '편리함',
      description: '공단에 직접 접속하거나 \n중복 타이핑이 불필요합니다.',
    },
    {
      title: '효율적',
      description: '가장 비효율적인 구간만 제거합니다.',
    }
  ];

  return (
    <Section id="해결 개념">
      <Container>
        <div>
          <Title>아이당뇨는 단순한 청구 프로그램이 아닙니다.</Title>
          <Subtitle>
            수작업 행정 구간만 정확히 제거하는 전문가용 '행정 제거 장치' 입니다.
          </Subtitle>
        </div>
        <AutoBridgeDiagram />
        <FeaturesWrapper>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </FeaturesWrapper>
      </Container>
    </Section>
  );
};

export default SolutionSection;
