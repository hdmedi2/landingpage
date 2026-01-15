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
`;

const FlowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20px 0;
`;

const Node = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
`;

const NodeIcon = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.theme.colors.backgroundGrayLight};
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`;

const NodeLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const NodeTitle = styled.span`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const NodeSubtitle = styled.span`
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.text};
  text-align: center;
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
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const CenterBadge = styled.div`
  background-color: ${props => props.theme.colors.blueLight};
  border-radius: 20px;
  padding: 8px 30px;
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  white-space: nowrap;
  min-width:120px;
`;

const ProgressBarWrapper = styled.div`
  width: 500px;
  height: 8px;
  background-color: ${props => props.theme.colors.backgroundGrayLight};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: 57%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const CenterTitle = styled.div`
  font-size: 32px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  margin-top: 8px;
`;

const CenterSubtitle = styled.div`
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: -10px;
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: 12px;
  min-width: 120px;
  white-space: nowrap;
  ${props => props.success 
    ? `background-color: ${props.theme.colors.successBorder}; border: 1.5px solid ${props.theme.colors.success}; color: ${props.theme.colors.success};`
    : `background-color: ${props.theme.colors.backgroundGrayLight}; border: 1.5px solid ${props.theme.colors.borderGray}; color: ${props.theme.colors.text};`
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
          <StatusBadge success>접수 완료</StatusBadge>
        </Node>
      </FlowWrapper>
    </DiagramContainer>
  );
};

export default AutoBridgeDiagram;
