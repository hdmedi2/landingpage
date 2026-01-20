import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.borderLight};
  border-radius: 30px;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
  flex: 1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 14px;
    padding: 12px 16px;
    gap: 6px;
    box-shadow: 0px 4px 4px 0px ${props => props.theme.colors.shadowCardLight};
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
  }
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  margin: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 16px;
    line-height: 1.45;
  }
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.textGrayLight};
  line-height: 1.7;
  margin: 0;
  white-space: pre-line;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 11px;
    line-height: 1.5;
  }
`;

const FeatureCard = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default FeatureCard;
