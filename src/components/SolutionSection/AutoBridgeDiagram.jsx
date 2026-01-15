import styled from 'styled-components';

const DiagramContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 28px;
  padding: 40px;
  box-shadow: 0px 13px 20px 3px ${props => props.theme.colors.shadowCard};
  position: relative;
  margin: 40px 0;
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
  gap: 12px;
  flex: 1;
`;

const NodeIcon = styled.div`
  width: 55px;
  height: 57px;
  background-color: ${props => props.theme.colors.backgroundGrayLight};
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const NodeLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const NodeTitle = styled.span`
  font-size: 8.5px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const NodeSubtitle = styled.span`
  font-size: 6px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const Arrow = styled.div`
  width: 131px;
  height: 3px;
  background-color: ${props => props.theme.colors.primary};
  position: relative;
  margin: 0 20px;

  &::after {
    content: '';
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid ${props => props.theme.colors.primary};
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
  }
`;

const CenterNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const CenterBadge = styled.div`
  background-color: ${props => props.theme.colors.successLight};
  border-radius: 7px;
  padding: 4px 12px;
  font-size: 6px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
`;

const CenterTitle = styled.div`
  font-size: 5px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  letter-spacing: 0.5px;
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 7.5px;
  font-size: 6px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: 8px;
  ${props => props.success 
    ? `background-color: ${props.theme.colors.successLight}; border: 0.7px solid ${props.theme.colors.successBorder}; color: ${props.theme.colors.success};`
    : `background-color: ${props.theme.colors.backgroundGrayLight}; border: 0.7px solid ${props.theme.colors.borderLight}; color: ${props.theme.colors.text};`
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
        <CenterNode>
          <CenterBadge>데이터 연동</CenterBadge>
          <CenterTitle>AUTO BRIDGE</CenterTitle>
          <NodeIcon style={{ width: '56px', height: '14px', background: 'transparent', fontSize: '12px', fontWeight: 'bold', color: '#305cde' }}>
            아이당뇨
          </NodeIcon>
        </CenterNode>
        <Arrow />
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
