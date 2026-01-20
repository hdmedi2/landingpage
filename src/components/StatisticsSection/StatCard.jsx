import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: 21px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: center;
  margin-bottom: -50px;
`;

const Number = styled.div`
  font-size: 48px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  line-height: 1.2;
`;

const Label = styled.div`
  font-size: 17px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.black};
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
