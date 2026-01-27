import styled from 'styled-components';

const DiagramContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 75px;
  padding: 80px 60px;
  box-shadow: 0px 20px 40px 5px ${props => props.theme.colors.shadowCard};
  position: relative;
  max-width: 1200px;
  margin: -80px 0 auto;
  min-height: 400px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: 28px;
    padding: 24px 20px;
    margin: 0;
    min-height: auto;
  }
`;

const FlowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20px 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 12px;
    padding: 8px 0;
  }
`;

const Node = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 6px;
    flex: 0 0 auto;
    min-width: 72px;
  }
`;

const NodeIcon = styled.div`
  width: 110px;
  height: 120px;
  background-color: ${props => props.theme.colors.backgroundGrayLight};
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 37px;
    height: 37px;
    border-radius: 10px;
    font-size: 20px;
  }
`;

const NodeLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 2px;
  }
`;

const NodeTitle = styled.span`
  font-size: 22px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.text};
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 10px;
  }
`;

const NodeSubtitle = styled.span`
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.text};
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 7px;
  }
`;

const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
  position: relative;
  margin: 0 40px;
  min-width: 200px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin: 0 12px;
    min-width: 120px;
    gap: 8px;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 6px;
  }
`;

const CenterBadge = styled.div`
  background-color: ${props => props.theme.colors.blueLight};
  border-radius: 10px;
  padding: 8px 30px;
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  white-space: nowrap;
  min-width:120px;
  margin-top: -15px;
  margin-bottom: 20px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: 7px;
    padding: 6px 14px;
    font-size: 7px;
    min-width: auto;
  }
`;

const ProgressBarWrapper = styled.div`
  width: 600px;
  height: 8px;
  background-color: ${props => props.theme.colors.backgroundGrayLight};
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 120px;
    height: 4px;
  }
`;

const ProgressBar = styled.div`
  height: 100%;
  width: 57%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const CenterTitle = styled.div`
  font-size: 36px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  margin-top: 8px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 14px;
    margin-top: 0;
  }
`;

const CenterSubtitle = styled.div`
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: -10px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 6px;
    letter-spacing: 1px;
    margin-top: 0;
  }
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 14px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: 12px;
  min-width: 120px;
  white-space: nowrap;
  ${props => props.$success 
    ? `background-color: ${props.theme.colors.successBorder}; border: 1.5px solid #D7FCE3; color: ${props.theme.colors.success};`
    : `background-color: ${props.theme.colors.backgroundGrayLight}; border: 1.5px solid ${props.theme.colors.borderGray}; color: ${props.theme.colors.text};`
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 4px 8px;
    font-size: 7px;
    border-radius: 7px;
    min-width: auto;
    margin-top: 4px;
  }
`;

const AutoBridgeDiagram = () => {
  return (
    <DiagramContainer>
      <FlowWrapper>
        <Node>
          <NodeIcon>🏥</NodeIcon>
          <NodeLabel>
            <NodeTitle>요양기관</NodeTitle>
            <NodeSubtitle>(약국, 의료기상사)</NodeSubtitle>
          </NodeLabel>
          <StatusBadge>처방 데이터 보유</StatusBadge>
        </Node>
        <CenterSection>
          <ProgressBarContainer>
            <CenterBadge>데이터 연동</CenterBadge>
            <ProgressBarWrapper>
              <ProgressBar />
            </ProgressBarWrapper>
          </ProgressBarContainer>
          <CenterTitle>아이당뇨</CenterTitle>
          <CenterSubtitle>AUTO BRIDGE</CenterSubtitle>
        </CenterSection>
        <Node>
          <NodeIcon>🏛️</NodeIcon>
          <NodeLabel>
            <NodeTitle>국민건강보험</NodeTitle>
            <NodeSubtitle>(요양기관정보마당)</NodeSubtitle>
          </NodeLabel>
          <StatusBadge $success>접수 완료</StatusBadge>
        </Node>
      </FlowWrapper>
    </DiagramContainer>
  );
};

export default AutoBridgeDiagram;
