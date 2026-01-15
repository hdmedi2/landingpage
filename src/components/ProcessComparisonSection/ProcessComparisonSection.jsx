import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  background-color: #FFFFF;
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

const Title = styled.h2`
  font-size: 36px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 50px;
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textGray};
  text-align: center;
  line-height: 1.6;
  margin-top: -40px;
`;

const ComparisonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 50px;
  width: 75%;
  height: 400px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

// 기존 방식(5단계) 카드 스타일
const OldProcessCard = styled.div`
  background-color: ${props => props.theme.colors.backgroundGray};
  border: 1px solid ${props => props.theme.colors.borderGray};
  border-radius: 21px;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-shadow: 0px 13px 20px 0px ${props => props.theme.colors.shadowCardLight};
`;

const OldCardIndicator = styled.div`
  width: 5px;
  height: 28px;
  background-color: ${props => props.theme.colors.borderLight};
  border-radius: 2px;
`;

const OldCardTitle = styled.h3`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.textGray};
  margin: 0;
`;

const OldStepNumber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.borderLight};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.white};
  flex-shrink: 0;
  margin-top: 2px;
`;

const OldStepTitle = styled.div`
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.textGray};
  line-height: 1.5;
`;

// 아이당뇨 방식(3단계) 카드 스타일
const NewProcessCard = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 21px;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-shadow: 0px 13px 20px 0px ${props => props.theme.colors.shadowCardLight};
`;

const NewCardIndicator = styled.div`
  width: 5px;
  height: 28px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 2px;
`;

const NewCardTitle = styled.h3`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.white};
  margin: 0;
`;

const NewStepNumber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 7px;
  background-color: ${props => props.theme.colors.primaryLight};
  border: 0.3px solid ${props => props.theme.colors.primaryLighter};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.white};
  flex-shrink: 0;
  margin-top: 2px;
`;

const NewStepTitle = styled.div`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.black};
  color: ${props => props.theme.colors.white};
  line-height: 1.5;
`;

const NewStepDescription = styled.div`
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.white};
  line-height: 1.5;
  opacity: 1;
`;

// 공통 스타일
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StepsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const StepItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

const ProcessComparisonSection = () => {
  // 기존 방식(5단계) 카드 제목
  const oldProcessCardTitle = '기존 방식 (5단계)';

  // 기존 방식(5단계) 단계 데이터
  const oldProcessSteps = [
    { number: '1', title: '내부 시스템 확인 (EMR)' },
    { number: '2', title: '공단 포털 접속 / 로그인' },
    { number: '3', title: '수기 입력 / 서류 생성 및 업로드' },
    { number: '4', title: '오류 확인 및 수정' },
    { number: '5', title: '재청구 작업' },
  ];

  // 아이당뇨 방식(3단계) 카드 제목
  const newProcessCardTitle = '아이당뇨 방식 (3단계)';

  // 아이당뇨 방식(3단계) 단계 데이터
  const newProcessSteps = [
    { 
      number: '1', 
      title: '처방 데이터 준비',
      description: '휴대폰 사진 촬영으로 입력 끝'
    },
    { 
      number: '2', 
      title: '전송 클릭',
      description: '원클릭으로 공단 전송'
    },
    { 
      number: '3', 
      title: '자동 처리 완료',
      description: '위임 / 요양비 지급 현황 실시간 확인'
    },
  ];

  return (
    <Section>
      <Container>
        <Title>
          복잡한 5단계를 3단계로,<br />
          업무 시간은 80% 이상 단축됩니다.
        </Title>
        <Subtitle>
          "약사님은 클릭만 하세요. 나머지는 아이당뇨가 완벽히 처리합니다."
        </Subtitle>
        <ComparisonWrapper>
          <OldProcessCard>
            <CardHeader>
              <OldCardIndicator />
              <OldCardTitle>{oldProcessCardTitle}</OldCardTitle>
            </CardHeader>
            <StepsList>
              {oldProcessSteps.map((step, index) => (
                <StepItem key={index}>
                  <OldStepNumber>{step.number}</OldStepNumber>
                  <StepContent>
                    <OldStepTitle>{step.title}</OldStepTitle>
                  </StepContent>
                </StepItem>
              ))}
            </StepsList>
          </OldProcessCard>
          <NewProcessCard>
            <CardHeader>
              <NewCardIndicator />
              <NewCardTitle>{newProcessCardTitle}</NewCardTitle>
            </CardHeader>
            <StepsList>
              {newProcessSteps.map((step, index) => (
                <StepItem key={index}>
                  <NewStepNumber>{step.number}</NewStepNumber>
                  <StepContent>
                    <NewStepTitle>{step.title}</NewStepTitle>
                    <NewStepDescription>{step.description}</NewStepDescription>
                  </StepContent>
                </StepItem>
              ))}
            </StepsList>
          </NewProcessCard>
        </ComparisonWrapper>
      </Container>
    </Section>
  );
};

export default ProcessComparisonSection;
