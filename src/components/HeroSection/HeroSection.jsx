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
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 40px;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 90px;
  color: ${props => props.theme.colors.white};
  text-align: center;
  
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
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
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
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }

  &::after {
    content: '>';
    font-size: 22px;
  }
`;

const InquiryButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 32px;
  padding: 20px 48px;
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.text};
  }
`;

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('도입을-고민중이신가요');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <BackgroundImage />
      <Overlay />
      <ContentWrapper>
        <Subtitle>
          매달 반복되는 서류 작업과 약국 업무, 이제 클릭 한 번으로 자동화하세요.
        </Subtitle>
        <Title>
          아이당뇨는<br />
          당뇨병 소모성 재료 처방전 청구 과정을<br />
          간편하게 처리합니다.
        </Title>
        <ButtonWrapper>
          <HeroButton onClick={() => window.open('https://pharm.hdmedi.kr/', '_blank', 'noopener,noreferrer')}>
            아이당뇨 웹사이트 이동하기
          </HeroButton>
          <InquiryButton onClick={scrollToContact}>
            도입 문의하기
          </InquiryButton>
        </ButtonWrapper>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
