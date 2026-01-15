import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.borderLight};
  border-radius: 30px;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  margin: 0;
`;

const Description = styled.p`
  font-size: 17px;
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.textGrayLight};
  line-height: 1.7;
  margin: 0;
  white-space: pre-line;
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
