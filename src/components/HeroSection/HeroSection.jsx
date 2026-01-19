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
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1440px;
  margin-left: 280px; 
  margin-right: auto;
  padding: 0 120px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin-top: -100px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 40px;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 90px;
  color: ${props => props.theme.colors.white};
  
  .highlight {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 48px;
    line-height: 1.4;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.white};
  line-height: 1.7;
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

const HeroButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-radius: 32px;
  padding: 20px 48px;
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }

  &::after {
    content: '>';
    font-size: 22px;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <BackgroundImage />
      <Overlay />
      <ContentWrapper>
        <Title>
          아이당뇨는<br />
          <span className="highlight">요양비 청구 과정</span>을<br />
          단순하게 만듭니다.
        </Title>
        <Subtitle>
          매달 반복되는 서류 작업과 행정 절차, 이제 클릭 한 번으로 자동화하세요.
        </Subtitle>
        <ButtonWrapper>
          <HeroButton onClick={() => window.open('https://pharm.hdmedi.kr/', '_blank', 'noopener,noreferrer')}>
            아이당뇨 웹사이트로 이동하기
          </HeroButton>
        </ButtonWrapper>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
