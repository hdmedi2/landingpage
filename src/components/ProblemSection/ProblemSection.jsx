import styled from 'styled-components';
import ProblemCard from './ProblemCard';

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  padding: 120px 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 40px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 20px;
    gap: 24px;
  }
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 50px;
  color: ${props => props.theme.colors.text};
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 22px;
    line-height: 1.35;
    margin: 0;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
  text-align: center;
  line-height: 1.6;
  margin-top: -30px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 12px;
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.textGray};
    line-height: 1.5;
    margin: 0;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 20px;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 12px;
  }
`;

const ProblemSection = () => {
  const problems = [
    {
      icon: '📄',
      title: '서류 준비의 늪',
      description: '누락 시 즉시 반려, 다시 처음부터 \n시작해야 하는 서류 지옥',
    },
    {
      icon: '🔐',
      title: '접속/인증 반복',
      description: '보안 프로그램 설치와 \n끝없는 공인인증서 로그인 스트레스',
    },
    {
      icon: '⌨️',
      title: '데이터 중복 입력',
      description: '차트에 있는 내용을 공단 사이트에 \n또 치는 비생산적 노동',
    },
    {
      icon: '😓',
      title: '처방전 3년 보관 의무',
      description: '방대한 양의 처방전을 보관하고, \n필요할 때 직접 찾아내야 하는 어려움',
    },
  ];

  return (
    <Section id="문제 제기">
      <Container>
        <Title>
          "아직도 요양기관정보마당에서<br />
          수작업으로 청구하고 계신가요?"
        </Title>
        <Subtitle>
          청구 담당자님이 겪는 행정의 고통을 우리는 잘 알고 있습니다.
        </Subtitle>
        <CardsWrapper>
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </CardsWrapper>
      </Container>
    </Section>
  );
};

export default ProblemSection;
