import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: 21px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
`;

const Number = styled.div`
  font-size: 48px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  line-height: 1.2;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.textGray};
`;

const StatCard = ({ number, label }) => {
  return (
    <Card>
      <Number>{number}</Number>
      <Label>{label}</Label>
    </Card>
  );
};

export default StatCard;
