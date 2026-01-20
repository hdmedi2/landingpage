import styled from 'styled-components';
import phoneImg from '../../assets/images/phone.png';

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundGray};
  padding: 120px 0;
  position: relative;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 0 40px;
    gap: 40px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Quote = styled.h2`
  font-size: 45px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 52px;
  color: ${props => props.theme.colors.text};
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 26px;
  color: ${props => props.theme.colors.text};
`;

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 10px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text};
`;

const CheckIcon = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-size: 32px;
`;

const ForPharmacistsSection = () => {
  return (
    <Section>
      <Container>
        <ImageWrapper>
          <Image 
            src={phoneImg}
            alt="약사"
          />
        </ImageWrapper>
        <ContentWrapper>

          <Quote>
            "약국 업무는 줄이고,<br />
            환자와 본업에 집중하세요."
          </Quote>
          <Description>
            사람이 굳이 하지 않아도 되는 일, 번거로운 수작업만 정확히 골라 제거해 드립니다. 
            아이당뇨는 단순한 프로그램이 아니라 경영을 돕는 필수 솔루션입니다.
          </Description>
          <FeatureList>
            <FeatureItem>
              <CheckIcon>✓</CheckIcon>
              <span>처리 시간 80% 단축</span>
            </FeatureItem>
            <FeatureItem>
              <CheckIcon>✓</CheckIcon>
              <span>처방전 3년 보관 의무 충족</span>
            </FeatureItem>
            <FeatureItem>
              <CheckIcon>✓</CheckIcon>
              <span>복잡한 공단 접속 불필요</span>
            </FeatureItem>
          </FeatureList>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default ForPharmacistsSection;
