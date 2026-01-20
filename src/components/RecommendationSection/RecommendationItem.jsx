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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    background-color: ${props => props.theme.colors.backgroundGray};
    border: 1px solid ${props => props.theme.colors.backgroundGrayLight};
    border-radius: 14px;
    width: 280px;
    height: 50px;
    padding: 0;
    position: relative;
  }
`;

const CheckboxWrapper = styled.div`
  position: absolute;
  left: 21px;
  top: 16px;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.colors.white};
  border: 0.8px solid ${props => props.theme.colors.borderLight};
  border-radius: 6px;
  box-shadow: 0px 2px 2px 1px ${props => props.theme.colors.shadowCardLighter};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const CheckIcon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const CheckIconSmall = styled.img`
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
    width: 10px;
    height: 8px;
    object-fit: contain;
  }
`;

const Text = styled.p`
  font-size: 21px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.text};
  margin: 0;
  flex: 1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    position: absolute;
    left: 66px;
    top: 12px;
    font-size: 12px;
    font-weight: ${props => props.theme.fontWeights.semiBold};
    line-height: 1.1;
    width: auto;
    max-width: 190px;
    flex: none;
  }
`;

const RecommendationItem = ({ text }) => {
  return (
    <Item>
      <CheckIcon src={checkmarkImg} alt="checkmark" />
      <CheckboxWrapper>
        <CheckIconSmall src={checkmarkImg} alt="checkmark" />
      </CheckboxWrapper>
      <Text>{text}</Text>
    </Item>
  );
};

export default RecommendationItem;
