import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: 35px;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
`;

const Number = styled.div`
  font-size: 22px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 8px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.text};
  margin: 0;
  text-align: center;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.textGrayDark};
  line-height: 1.7;
  margin: 0;
  text-align: center;
  white-space: pre-line;
`;

const BenefitCard = ({ number, title, description }) => {
  return (
    <Card>
      <Number>{number}</Number>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default BenefitCard;
