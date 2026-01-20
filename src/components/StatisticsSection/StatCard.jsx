import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: 21px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  text-align: center;
  margin-bottom: -50px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: 14px;
    padding: 12px 8px;
    gap: 4px;
    margin-bottom: 0;
    min-height: 71px;
    height: auto;
    max-width: 144px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Number = styled.div`
  font-size: 48px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  color: ${props => props.theme.colors.primary};
  line-height: 1.2;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 22px;
    line-height: 1.0;
    margin-bottom: 2px;
  }
`;

const Label = styled.div`
  font-size: 17px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.black};
  line-height: 1.2;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 11px;
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.black};
    line-height: 1.2;
  }
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
