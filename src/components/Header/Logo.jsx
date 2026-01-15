import React from 'react';
import styled from 'styled-components';
import logoImg from '../../assets/images/logo.svg'; 

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledLogo = styled.img`
  /* 헤더 높이(53px)에 맞춰 적절한 높이 설정 */
  height: 32px; 
  width: auto;
  object-fit: contain;
`;

const Logo = () => {
  return (
    <LogoWrapper onClick={() => window.location.href = '/'}>
      <StyledLogo src={logoImg} alt="아이당뇨 로고" />
    </LogoWrapper>
  );
};

export default Logo;
