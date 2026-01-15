import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 20px;
  }
`;

const NavItem = styled.a`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Navigation = () => {
  return (
    <NavContainer>
      <NavItem >Home</NavItem>
      <NavItem>Solution</NavItem>
      <NavItem>Services</NavItem>
    </NavContainer>
  );
};

export default Navigation;
