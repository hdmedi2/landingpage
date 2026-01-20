import styled from 'styled-components';

const Button = styled.a`
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
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }

  &::after {
    content: '>';
    font-size: 18px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const CTAButton = ({ text, href }) => {
  return <Button href={href} target="_blank" rel="noopener noreferrer">{text}</Button>;
};

export default CTAButton;
