import styled from 'styled-components';

const Item = styled.div`
  background-color: ${props => props.theme.colors.backgroundGray};
  border: 1px solid ${props => props.theme.colors.borderGray};
  border-radius: 21px;
  padding: 28px 32px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 7px;
  box-shadow: 0px 2px 2px 1px ${props => props.theme.colors.shadowCardLighter};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CheckIcon = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 18px;
    border: solid ${props => props.theme.colors.primary};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -60%) rotate(45deg);
  }
`;

const Text = styled.p`
  font-size: 21px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.text};
  margin: 0;
  flex: 1;
`;

const RecommendationItem = ({ text }) => {
  return (
    <Item>
      <IconWrapper>
        <CheckIcon />
      </IconWrapper>
      <Text>{text}</Text>
    </Item>
  );
};

export default RecommendationItem;
