import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.backgroundGray};
  border: 1px solid ${props => props.theme.colors.borderGray};
  border-radius: 21px;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  min-height: 160px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.white};
  border: 0.8px solid ${props => props.theme.colors.borderLight};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  flex-shrink: 0;
`;

const Title = styled.h3`
  font-size: 23px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.textGray};
  line-height: 1.7;
  margin: 0;
  white-space: pre-line;
`;

const ProblemCard = ({ icon, title, description }) => {
  return (
    <Card>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default ProblemCard;
