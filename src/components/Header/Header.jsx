import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import CTAButton from './CTAButton';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px 0px ${props => props.theme.colors.shadow};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px;
  z-index: 1000;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 20px;
    height: 70px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 12px;
    height: 60px;
    gap: 8px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
      <CTAButton text="아이당뇨 이동하기" href="https://pharm.hdmedi.kr/" />
    </HeaderContainer>
  );
};

export default Header;
