import styled from 'styled-components';
import RecommendationItem from './RecommendationItem';

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  padding: 120px 0 70px 0;

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
    padding: 0 20px;
    gap: 30px;
  }
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 50px;
  color: ${props => props.theme.colors.text};
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 24px;
    line-height: 1.4;
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: -5px;
  width: 60%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    gap: 12px;
    margin-top: 0;
    align-items: center;
  }
`;

const RecommendationSection = () => {
  const recommendations = [
    '당뇨 요양비 청구 건수가 매달 꾸준히 발생하는 곳',
    '청구 반려와 재작업 스트레스로 업무 효율이 떨어지는 곳',
    '보조 인력 없이 혼자 접수부터 행정업무까지 다 처리해야 하는 곳',
    'IT에 익숙하지 않아 공인인증서나 보안 프로그램이 항상 버거우신 분',
  ];

  return (
    <Section id="추천 대상">
      <Container>
        <Title>약사님들께 아이당뇨를 추천합니다.</Title>
        <ItemsWrapper>
          {recommendations.map((text, index) => (
            <RecommendationItem key={index} text={text} />
          ))}
        </ItemsWrapper>
      </Container>
    </Section>
  );
};

export default RecommendationSection;
