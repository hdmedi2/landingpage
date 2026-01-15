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
  font-size: 40px;
  flex-shrink: 0;
  color: ${props => props.theme.colors.primary};
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.text};
  margin: 0;
  flex: 1;
`;

const RecommendationItem = ({ text }) => {
  return (
    <Item>
      <IconWrapper>✓</IconWrapper>
      <Text>{text}</Text>
    </Item>
  );
};

export default RecommendationItem;
