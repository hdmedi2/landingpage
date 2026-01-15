import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 15px;
  padding: 10px 24px;
  font-size: 15px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  display: flex;
  align-items: center;
  gap: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }

  &::after {
    content: '>';
    font-size: 18px;
  }
`;

const CTAButton = ({ text }) => {
  return <Button>{text}</Button>;
};

export default CTAButton;
