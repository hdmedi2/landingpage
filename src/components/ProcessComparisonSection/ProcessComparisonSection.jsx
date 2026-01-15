import styled from 'styled-components';

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
  color: ${props => props.theme.colors.textGray};
  text-align: center;
  line-height: 1.6;
  margin-top: -10px;
`;

const ComparisonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 50px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ProcessCard = styled.div`
  background-color: ${props => props.isPrimary ? props.theme.colors.primary : props.theme.colors.backgroundGray};
  border: ${props => props.isPrimary ? 'none' : `1px solid ${props.theme.colors.borderGray}`};
  border-radius: 21px;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-shadow: ${props => props.isPrimary 
    ? `0px 7px 10px 0px ${props.theme.colors.shadowCardLight}` 
    : `0px 7px 10px 0px ${props.theme.colors.shadowCardLight}`
  };
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CardIndicator = styled.div`
  width: 5px;
  height: 28px;
  background-color: ${props => props.isPrimary ? props.theme.colors.white : props.theme.colors.borderLight};
  border-radius: 2px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.isPrimary ? props.theme.colors.white : props.theme.colors.textGray};
  margin: 0;
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

const StepNumber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.isPrimary 
    ? props.theme.colors.primaryLight 
    : props.theme.colors.borderLight
  };
  border: ${props => props.isPrimary 
    ? `0.3px solid ${props.theme.colors.primaryLighter}` 
    : 'none'
  };
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.isPrimary ? props.theme.colors.white : props.theme.colors.text};
  flex-shrink: 0;
  margin-top: 2px;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

const StepTitle = styled.div`
  font-size: ${props => props.isPrimary ? '18px' : '15px'};
  font-weight: ${props => props.isPrimary 
    ? props.theme.fontWeights.black 
    : props.theme.fontWeights.extraBold
  };
  color: ${props => props.isPrimary ? props.theme.colors.white : props.theme.colors.textGray};
  line-height: 1.5;
`;

const StepDescription = styled.div`
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.isPrimary ? props.theme.colors.white : 'transparent'};
  line-height: 1.5;
  opacity: ${props => props.isPrimary ? 1 : 0};
`;

const ProcessComparisonSection = () => {
  const oldProcess = [
    { number: '1', title: '내부 시스템 확인 (EMR)' },
    { number: '2', title: '공단 포털 접속 / 로그인' },
    { number: '3', title: '수기 입력 / 서류 생성 및 업로드' },
    { number: '4', title: '오류 확인 및 수정' },
    { number: '5', title: '재청구 작업' },
  ];

  const newProcess = [
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
          <ProcessCard>
            <CardHeader>
              <CardIndicator />
              <CardTitle>기존 방식 (5단계)</CardTitle>
            </CardHeader>
            <StepsList>
              {oldProcess.map((step, index) => (
                <StepItem key={index}>
                  <StepNumber>{step.number}</StepNumber>
                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                  </StepContent>
                </StepItem>
              ))}
            </StepsList>
          </ProcessCard>
          <ProcessCard isPrimary>
            <CardHeader>
              <CardIndicator isPrimary />
              <CardTitle isPrimary>아이당뇨 방식 (3단계)</CardTitle>
            </CardHeader>
            <StepsList>
              {newProcess.map((step, index) => (
                <StepItem key={index}>
                  <StepNumber isPrimary>{step.number}</StepNumber>
                  <StepContent>
                    <StepTitle isPrimary>{step.title}</StepTitle>
                    <StepDescription isPrimary>{step.description}</StepDescription>
                  </StepContent>
                </StepItem>
              ))}
            </StepsList>
          </ProcessCard>
        </ComparisonWrapper>
      </Container>
    </Section>
  );
};

export default ProcessComparisonSection;
