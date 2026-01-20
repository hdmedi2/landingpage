import styled from 'styled-components';

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
  margin: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 23px;
    line-height: 1.35;
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.black};
  text-align: center;
  line-height: 1.6;
  margin-top: -40px;
  margin-bottom: -40px;

  .mobile-break {
    display: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 14px;
    font-weight: ${props => props.theme.fontWeights.medium};
    line-height: 1.5;
    margin: 0;
    color: ${props => props.theme.colors.black};
    .mobile-break {
      display: block;
    }
  }
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-top: 20px;
    gap: 16px;
    justify-items: center;
  }
`;

// 기존 방식(8단계) 카드 스타일
const OldProcessCard = styled.div`
  background-color: ${props => props.theme.colors.backgroundGray};
  border: 1px solid ${props => props.theme.colors.borderGray};
  border-radius: 21px;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-shadow: 0px 13px 20px 0px ${props => props.theme.colors.shadowCardLight};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: 14px;
    padding: 24px 20px;
    gap: 16px;
    max-width: 300px;
    width: 100%;
  }
`;

const OldCardIndicator = styled.div`
  width: 5px;
  height: 28px;
  background-color: ${props => props.theme.colors.borderLight};
  border-radius: 2px;
`;

const OldCardTitle = styled.h3`
  font-size: 26px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.textGray};
  margin: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 16px;
  }
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
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.white};
  flex-shrink: 0;
  margin-top: 2px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 14px;
    height: 14px;
    border-radius: 6px;
    font-size: 8px;
    margin-top: 0;
  }
`;

const OldStepTitle = styled.div`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.textGray};
  line-height: 1.5;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 10px;
    line-height: 1.45;
  }
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: 14px;
    padding: 24px 20px;
    gap: 16px;
    max-width: 300px;
    width: 100%;
  }
`;

const NewCardIndicator = styled.div`
  width: 5px;
  height: 28px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 2px;
`;

const NewCardTitle = styled.h3`
  font-size: 26px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.white};
  margin: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 16px;
  }
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
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.white};
  flex-shrink: 0;
  margin-top: 2px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 22px;
    height: 22px;
    border-radius: 4px;
    font-size: 13px;
    margin-top: 0;
  }
`;

const NewStepTitle = styled.div`
  font-size: 22px;
  font-weight: ${props => props.theme.fontWeights.black};
  color: ${props => props.theme.colors.white};
  line-height: 1.5;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 1.45;
  }
`;

const NewStepDescription = styled.div`
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.white};
  line-height: 1.5;
  opacity: 1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 9px;
    line-height: 1.35;
  }
`;

// 공통 스타일
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 8px;
  }
`;

const StepsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 12px;
  }
`;

const StepItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 10px;
  }
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 4px;
  }
`;

const ProcessComparisonSection = () => {
  // 기존 방식(5단계) 카드 제목
  const oldProcessCardTitle = '기존 방식 (8단계)';

  // 기존 방식(5단계) 단계 데이터
  const oldProcessSteps = [
    { number: '1', title: '처방전 접수' },
    { number: '2', title: '서류 작성(청수서, 위임장, 거래명세서 등)' },
    { number: '3', title: '공단 포털 접속 / 로그인' },
    { number: '4', title: '수기 입력 / 서류 업로드' },
    { number: '5', title: '요양비 지급 확인 / 반려 사유 확인' },
    { number: '6', title: '요양비 지급 확인 / 반려 사유 확인' },
    { number: '7', title: '오류 확인 및 수정' },
    { number: '8', title: '재청구 작업' },
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
    <Section id="비포 & 에프터">
      <Container>
        <Title>
          복잡한 8단계를 3단계로,<br />
          업무 시간은 80% 이상 단축됩니다.
        </Title>
        <Subtitle>
          약사님은 클릭만 하세요.
          <span className="mobile-break" />
          나머지는 아이당뇨가 완벽히 처리합니다.
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
