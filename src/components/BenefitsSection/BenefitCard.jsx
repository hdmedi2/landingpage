import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: 35px;
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  flex: 1;
  height: 100%;
  min-height: 280px;
  min-width: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: 14px;
    padding: 16px 18px;
    gap: 10px;
    min-height: auto;
    max-width: 300px;
    width: 100%;
  }
`;

const Number = styled.div`
  font-size: 26px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 18px;
    margin-bottom: 0;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.text};
  margin: 0;
  text-align: center;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 15px;
    line-height: 1.4;
  }
`;

const Description = styled.p`
  font-size: 17px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.textGrayDark};
  line-height: 1.7;
  margin: 0;
  text-align: center;
  white-space: pre-line;
  width: 100%;
 

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 12px;
    line-height: 1.55;
  }
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
