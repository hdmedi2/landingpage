import styled from 'styled-components';
import checkmarkImg from '../../assets/images/checkmark.png';

const Item = styled.div`
  background-color: ${props => props.theme.colors.backgroundGray};
  border: 1px solid ${props => props.theme.colors.borderGray};
  border-radius: 21px;
  padding: 28px 32px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CheckIcon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  flex-shrink: 0;
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
      <CheckIcon src={checkmarkImg} alt="checkmark" />
      <Text>{text}</Text>
    </Item>
  );
};

export default RecommendationItem;
