import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import blogIcon from '../../assets/images/blog.png';
import instagramIcon from '../../assets/images/instagram.png';
import youtubeIcon from '../../assets/images/youtube.png';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.footerBg};
  padding: 60px 0 40px;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 252px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 0 40px;
    gap: 40px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Logo = styled.img`
  height: 26px;
  width: auto;
  margin-bottom: 10px;
  align-self: flex-start;
`;

const CompanyInfo = styled.div`
  font-size: 11px;
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: 16px;
  color: ${props => props.theme.colors.white};
  letter-spacing: -0.22px;
`;

const Copyright = styled.p`
  font-size: 9px;
  font-weight: ${props => props.theme.fontWeights.light};
  color: ${props => props.theme.colors.footerText};
  margin-top: 20px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    align-items: flex-start;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  font-size: 11px;
  font-weight: ${props => props.theme.fontWeights.light};
  color: ${props => props.theme.colors.white};
  letter-spacing: -0.22px;
`;

const Link = styled.a`
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const BusinessHours = styled.div`
  font-size: 11px;
  font-weight: ${props => props.theme.fontWeights.light};
  line-height: 16px;
  color: ${props => props.theme.colors.white};
  text-align: right;
  letter-spacing: -0.22px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const IconLink = styled.a`
  width: 19.5px;
  height: 19.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <LeftSection>
          <Logo src={logo} alt="HD MEDI C&C" />
          <CompanyInfo>
            회사명 : 주식회사 에이치디메디 | 대표 : 이정의 | 사업자등록번호 : 587-87-02355<br />
            주소 : 본사 - 광주광역시 동구 금남로 193-22, 광주AI창업캠프 303호<br />
            연구소 : 서울시 강남구 선릉로93길 40길, 서울소셜벤처허브 302호<br />
            TEL : 02-6080-2216 | FAX : 0504-398-1694 | EMAIL : hdmedi@hdmedi.co.kr
          </CompanyInfo>
          <Copyright>
            COPYRIGHT 2026 All rights reserved by HDMedi.Co.,Ltd.
          </Copyright>
        </LeftSection>
        <RightSection>
          <Links>
            <Link>개인정보처리방침</Link>
            <Link>서비스이용약관</Link>
            <Link>찾아오시는 길</Link>
          </Links>
          <BusinessHours>
            영업시간 : 09:00 ~ 18:00<br />
            점심시간 : 12:00 ~ 13:00
          </BusinessHours>
          <SocialIcons>
            <IconLink href="#" aria-label="Blog">
              <img src={blogIcon} alt="Blog" />
            </IconLink>
            <IconLink href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </IconLink>
            <IconLink href="#" aria-label="YouTube">
              <img src={youtubeIcon} alt="YouTube" />
            </IconLink>
          </SocialIcons>
        </RightSection>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
