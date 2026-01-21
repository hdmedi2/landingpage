import styled from 'styled-components';
import HeroImage from '../../assets/images/Hero.png';

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh * 0.8 - 80px);
  height: calc(100vh * 0.8 - 80px);
  margin-top: 80px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-top: 60px;
    min-height: calc(100vh * 0.8 - 60px);
    height: calc(100vh * 0.8 - 60px);
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px 0 0px;
  margin-left: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  text-align: left;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 40px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 20px;
    gap: 16px;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 90px;
  color: ${props => props.theme.colors.white};
  text-align: left;
  
  .highlight {
    color: ${props => props.theme.colors.primary};
  }

  .mobile-break {
    display: none;
  }

  .desktop-break {
    display: block;
  }

  .mobile-only {
    display: none;
  }

  .desktop-only {
    display: block;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 48px;
    line-height: 1.4;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 28px;
    line-height: 1.35;

    .mobile-break {
      display: block;
    }

    .desktop-break {
      display: none;
    }

    .mobile-only {
      display: block;
    }

    .desktop-only {
      display: none;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.white};
  line-height: 1.7;
  text-align: left;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 10px;
    line-height: 1.45;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    margin-top: 8px;
  }
`;

const HeroButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-radius: 20px;
  padding: 20px 48px;
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }

  &::after {
    content: '>';
    font-size: 22px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 169px;
    height: 40px;
    padding: 0;
    border-radius: 12px;
    font-size: 11px;
    justify-content: center;
    gap: 6px;

    &::after {
      font-size: 12px;
    }
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <BackgroundImage />
      <Overlay />
      <ContentWrapper>
        <Title>
          <span className="desktop-only">
            아이당뇨는
            <span className="desktop-break" />
            <span className="highlight">요양비 청구 과정</span>을
            <span className="desktop-break" />
            단순하게 만듭니다.
          </span>
          <span className="mobile-only">
            아이당뇨는
            <span className="mobile-break" />
            <span className="highlight">당뇨성 소모성</span>
            <span className="mobile-break" />
            <span className="highlight">재료 처방전 청구 과정</span>을
            <span className="mobile-break" />
            간편하게 처리합니다.
          </span>
        </Title>
        <Subtitle>
          매달 반복되는 서류 작업과 행정 절차, 이제 클릭 한 번으로 자동화하세요.
        </Subtitle>
        <ButtonWrapper>
          <HeroButton onClick={() => window.open('https://pharm.hdmedi.kr/', '_blank', 'noopener,noreferrer')}>
            아이당뇨 웹사이트 이동하기
          </HeroButton>
        </ButtonWrapper>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
