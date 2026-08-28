import { useState } from 'react';
import styled from 'styled-components';
import { submitContactForm } from '../../api/contactApi';
import logoImage from '../../assets/landing/idangnyo-logo.png';
import desktopScreen from '../../assets/landing/screen-desktop.png';
import mobileScreen from '../../assets/landing/screen-mobile.png';

const painPoints = [
  ['01', '청구 가능 여부 확인', '요양기관정보마당 로그인 / 위임 여부·급여종료일 확인'],
  ['02', '서류 작성', '위임장·요양비 지급청구서·거래명세서·세금계산서 등 작성 및 출력'],
  ['03', '공단 팩스 또는 우편발송', '작성한 서류를 환자가 속한 공단에 팩스 또는 우편으로 발송'],
  ['04', '접수 확인', '환자 관할 공단 연락처 검색 / 전화하여 접수·처리 결과 확인'],
];

const beforeItems = [
  '요양기관정보마당에서 환자별 조회',
  '청구서류를 하나씩 작성·출력',
  '팩스·우편으로 위임 및 청구',
  '환자가 속한 관할 공단과 연락처 직접 검색',
];

const afterItems = [
  '처방전 사진촬영 → 위임 여부·급여종료일 바로 확인',
  '판매 재료 입력 → 필요한 서류 자동완성',
  '위임등록·요양비 청구 버튼 클릭 → 공단 제출 완료',
  '환자별 공단 연락처와 처리상태 바로 확인',
];

const metrics = [
  ['비용 절감', '팩스·우편 발송비 절감 사례'],
  ['매출 증대', '환자 응대에 쓰는 시간이 늘어난 이용처 사례'],
  ['서류 자동완성', '반복적인 문서작성 감소'],
  ['온라인 청구', '팩스·우편 발송 업무 감소'],
];

const trustSteps = ['처방전 전송', '청구 가능 여부 확인', '서류 자동완성', '공단 청구'];

const audiences = [
  '공단으로 팩스·우편을 자주 발송하는 곳',
  '위임 여부·급여종료일을 환자마다 확인하고 있는 곳',
  '청구서류 작성에 많은 시간을 쓰고 있는 곳',
  '요양비 청구 업무를 더 효율적으로 바꾸고 싶은 곳',
];

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid #edf1f6;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
`;

const HeaderInner = styled.div`
  width: min(100% - 64px, 1120px);
  height: 72px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: min(100% - 40px, 1120px);
    height: 64px;
  }
`;

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #0069cf;
  font-size: 19px;
  font-weight: 900;
  letter-spacing: -0.02em;

  img {
    width: 38px;
    height: 38px;
    border-radius: 9px;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 8px;
  background: #0069cf;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  transition: background 150ms ease, transform 150ms ease;

  &:hover {
    background: #0055a8;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid rgba(0, 105, 207, 0.25);
    outline-offset: 3px;
  }
`;

const Section = styled.section`
  padding: 104px 32px;
  background: ${({ $background = '#fff' }) => $background};

  @media (max-width: 767px) {
    padding: 64px 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

const Eyebrow = styled.p`
  margin-bottom: 12px;
  color: ${({ $tone = '#0069cf' }) => $tone};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

const SectionTitle = styled.h2`
  color: #111;
  font-size: 40px;
  font-weight: 900;
  line-height: 1.35;
  letter-spacing: -0.03em;

  @media (max-width: 1199px) {
    font-size: 32px;
  }

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #f5f9ff 0%, #fff 100%);

  &::after {
    content: '';
    position: absolute;
    top: -160px;
    right: -140px;
    width: 520px;
    height: 520px;
    border-radius: 50%;
    background: #b8dbff;
    opacity: 0.35;
  }
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  width: min(100% - 64px, 1120px);
  margin: 0 auto;
  padding: 96px 0 88px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;

  @media (max-width: 1199px) {
    grid-template-columns: 1fr;
    gap: 44px;
  }

  @media (max-width: 767px) {
    width: min(100% - 40px, 1120px);
    padding: 64px 0;
    gap: 36px;
  }
`;

const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Badge = styled.p`
  padding: 7px 14px;
  border-radius: 999px;
  background: #e6f0ff;
  color: #0069cf;
  font-size: 13px;
  font-weight: 700;
`;

const Title = styled.h1`
  margin-top: 24px;
  color: #111;
  font-size: 58px;
  font-weight: 900;
  line-height: 1.22;
  letter-spacing: -0.035em;

  span {
    color: #0069cf;
  }

  @media (max-width: 1199px) {
    font-size: 46px;
  }

  @media (max-width: 767px) {
    font-size: 33px;
  }
`;

const Description = styled.p`
  margin-top: 24px;
  color: #4a5560;
  font-size: 17px;
  line-height: 1.8;
`;

const Emphasis = styled.p`
  margin-top: 14px;
  color: #111;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.6;
`;

const HeroButton = styled(Button)`
  margin-top: 30px;
  padding: 17px 34px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 105, 207, 0.25);
  font-size: 17px;
`;

const Devices = styled.div`
  position: relative;
  padding: 0 40px 56px 0;

  @media (max-width: 1199px) {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    padding: 0 30px 40px 0;
  }
`;

const Laptop = styled.div`
  position: relative;
  padding: 8px;
  border-radius: 12px;
  background: #263238;
  box-shadow: 0 22px 50px rgba(0, 50, 100, 0.2);

  img {
    width: 100%;
    aspect-ratio: 1754 / 1136;
    border-radius: 6px;
    object-fit: cover;
    object-position: left top;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -11px;
    left: -7%;
    width: 114%;
    height: 11px;
    border-radius: 0 0 10px 10px;
    background: #263238;
  }
`;

const Phone = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 31%;
  padding: 5px;
  border-radius: 22px;
  background: #263238;
  box-shadow: 0 16px 34px rgba(0, 40, 90, 0.26);

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    z-index: 1;
    width: 34%;
    height: 5px;
    border-radius: 999px;
    background: #263238;
    transform: translateX(-50%);
  }

  img {
    width: 100%;
    aspect-ratio: 375 / 700;
    border-radius: 18px;
    object-fit: cover;
    object-position: top;
  }
`;

const PainGrid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    margin-top: 32px;
    grid-template-columns: 1fr;
  }
`;

const PainCard = styled.article`
  min-height: 252px;
  padding: 28px 24px 30px;
  border: 1px solid #e7edf4;
  border-radius: 14px;
  background: #fbfcfe;
  display: flex;
  flex-direction: column;
  gap: 14px;

  strong {
    color: #111;
    font-size: 18px;
    line-height: 1.45;
    letter-spacing: -0.025em;
  }

  p {
    color: #5b6672;
    font-size: 15px;
    line-height: 1.7;
  }
`;

const NumberChip = styled.span`
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: #eef2f7;
  color: #8a97a5;
  font-size: 15px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Warning = styled.p`
  margin-top: 20px;
  padding: 24px 28px;
  border: 1px solid #fbd9d0;
  border-radius: 14px;
  background: #fff3f0;
  color: #b8330f;
  font-size: 17px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    flex: 0 0 8px;
    border-radius: 50%;
    background: #e9451e;
  }
`;

const ComparisonGrid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 767px) {
    margin-top: 32px;
    grid-template-columns: 1fr;
  }
`;

const ComparisonCard = styled.article`
  overflow: hidden;
  border: ${({ $after }) => ($after ? '2px solid #2290ff' : '1px solid #e3eaf2')};
  border-radius: 16px;
  background: #fff;
  box-shadow: ${({ $after }) => ($after ? '0 16px 40px rgba(0,105,207,0.14)' : 'none')};
`;

const ComparisonHeader = styled.h3`
  min-height: 62px;
  padding: 18px 26px;
  background: ${({ $after }) => ($after ? '#0069cf' : '#f1f4f8')};
  color: ${({ $after }) => ($after ? '#fff' : '#6b7683')};
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 22px;
    height: 22px;
    border-radius: 6px;
  }
`;

const ComparisonList = styled.ul`
  li {
    min-height: 92px;
    padding: 22px 26px;
    border-bottom: 1px solid ${({ $after }) => ($after ? '#eef4fb' : '#f0f3f7')};
    color: ${({ $after }) => ($after ? '#123' : '#5b6672')};
    font-size: 16px;
    font-weight: ${({ $after }) => ($after ? 500 : 400)};
    line-height: 1.65;
    display: flex;
    align-items: center;
  }

  li:last-child {
    border-bottom: 0;
  }

  @media (max-width: 767px) {
    li {
      min-height: auto;
      padding: 18px 20px;
      font-size: 15px;
    }
  }
`;

const FlowMessage = styled.p`
  max-width: 850px;
  margin: 44px auto 0;
  color: #0069cf;
  font-size: 26px;
  font-weight: 900;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 767px) {
    margin-top: 32px;
    font-size: 19px;
  }
`;

const EffectGrid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;

  @media (max-width: 1199px) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudy = styled.article`
  padding: 40px;
  border: 1px solid #dce7f5;
  border-radius: 16px;
  background: #f5f9ff;
  color: #4a5560;
  font-size: 17px;
  line-height: 1.8;

  p + p {
    margin-top: 16px;
  }

  strong {
    color: #0069cf;
  }

  @media (max-width: 767px) {
    padding: 26px;
  }
`;

const Quote = styled.blockquote`
  padding: 40px;
  border-radius: 16px;
  background: #0069cf;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: '“';
    height: 44px;
    color: #90c7ff;
    font-size: 44px;
    font-weight: 900;
    line-height: 1;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: -0.03em;
  }

  cite {
    margin-top: 20px;
    color: #b8dbff;
    font-size: 14px;
    font-style: normal;
  }

  @media (max-width: 767px) {
    padding: 26px;

    p {
      font-size: 20px;
    }
  }
`;

const MetricGrid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Metric = styled.article`
  padding: 32px 28px;
  border: 1px solid #e7edf4;
  border-radius: 14px;

  strong {
    color: #0069cf;
    font-size: 25px;
    font-weight: 900;
    letter-spacing: -0.03em;
  }

  p {
    margin-top: 10px;
    color: #5b6672;
    font-size: 15px;
    line-height: 1.6;
  }
`;

const Note = styled.p`
  margin-top: 18px;
  color: #98a4b0;
  font-size: 13px;
`;

const TrustSection = styled(Section)`
  position: relative;
  overflow: hidden;
  background: #0069cf;

  &::before {
    content: '';
    position: absolute;
    bottom: -200px;
    left: -120px;
    width: 460px;
    height: 460px;
    border-radius: 50%;
    background: #2290ff;
    opacity: 0.4;
  }
`;

const TrustGrid = styled(Container)`
  position: relative;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 56px;
  align-items: center;

  @media (max-width: 1199px) {
    grid-template-columns: 1fr;
  }
`;

const TrustCopy = styled.div`
  color: #fff;

  h2 {
    color: #b8dbff;
    font-size: 22px;
    font-weight: 700;
  }

  .label {
    margin-top: 30px;
    color: #90c7ff;
    font-size: 15px;
    font-weight: 500;
  }

  .number {
    color: #fff;
    font-size: 84px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.05em;
  }

  .description {
    margin-top: 22px;
    color: #dcebff;
    font-size: 17px;
    line-height: 1.8;
  }

  @media (max-width: 1199px) {
    .number { font-size: 68px; }
  }

  @media (max-width: 767px) {
    .number { font-size: 56px; }
  }
`;

const TrustCard = styled.div`
  padding: 36px 32px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  li span {
    width: 26px;
    height: 26px;
    flex: 0 0 26px;
    border-radius: 50%;
    background: #fff;
    color: #0069cf;
    font-size: 13px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin-top: 24px;
    color: #b8dbff;
    font-size: 16px;
    font-weight: 700;
  }

  @media (max-width: 767px) {
    padding: 26px;
  }
`;

const AudienceTitle = styled(SectionTitle)`
  text-align: center;
`;

const AudienceGrid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  @media (max-width: 767px) {
    margin-top: 32px;
    grid-template-columns: 1fr;
  }
`;

const AudienceItem = styled.p`
  padding: 22px 26px;
  border: 1px solid #e7edf4;
  border-radius: 12px;
  background: #f7fafe;
  color: #2c3540;
  font-size: 17px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 14px;

  span {
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    border-radius: 50%;
    background: #0069cf;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const ContactSection = styled(Section)`
  border-top: 1px solid #e3eaf2;
  background: #f5f9ff;
`;

const ContactContainer = styled(Container)`
  max-width: 820px;
  text-align: center;
`;

const ContactTitle = styled(SectionTitle)`
  font-size: 46px;

  @media (max-width: 1199px) {
    font-size: 36px;
  }

  @media (max-width: 767px) {
    font-size: 27px;
  }
`;

const ContactLead = styled.p`
  margin-top: 22px;
  color: #4a5560;
  font-size: 18px;
  line-height: 1.8;
`;

const SocialProof = styled.p`
  margin-top: 14px;
  color: #0069cf;
  font-size: 15px;
  font-weight: 700;
`;

const FormCard = styled.form`
  margin-top: 34px;
  padding: 30px;
  border: 1px solid #dce7f5;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 14px 34px rgba(0, 70, 140, 0.08);
  text-align: left;

  @media (max-width: 767px) {
    padding: 22px;
  }
`;

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.label`
  color: #2c3540;
  font-size: 14px;
  font-weight: 700;

  input {
    width: 100%;
    height: 54px;
    margin-top: 8px;
    padding: 0 16px;
    border: 1px solid #dce7f5;
    border-radius: 10px;
    background: #fff;
    color: #111;
    font-size: 16px;
    transition: border 150ms ease, box-shadow 150ms ease;
  }

  input:focus {
    border-color: #0069cf;
    box-shadow: 0 0 0 3px rgba(0, 105, 207, 0.12);
  }

  input:disabled {
    background: #f1f4f8;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  min-height: 58px;
  margin-top: 18px;
  padding: 15px 24px;
  border-radius: 10px;
  background: ${({ disabled }) => (disabled ? '#a9b6c3' : '#0069cf')};
  box-shadow: ${({ disabled }) => (disabled ? 'none' : '0 10px 26px rgba(0,105,207,0.28)')};
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background 150ms ease, transform 150ms ease;

  &:hover:not(:disabled) {
    background: #0055a8;
    transform: translateY(-1px);
  }
`;

const FormMessage = styled.p`
  margin-top: 16px;
  color: ${({ $error }) => ($error ? '#b8330f' : '#0069cf')};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

const Privacy = styled.p`
  margin-top: 14px;
  color: #7c8b9a;
  font-size: 12px;
  text-align: center;
`;

const Footer = styled.footer`
  padding: 36px 32px;
  border-top: 1px solid #edf1f6;
  background: #fff;

  > div {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .footer-brand {
    color: #7c8b9a;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }

  small {
    color: #a9b6c3;
    font-size: 13px;
  }

  @media (max-width: 767px) {
    padding: 30px 20px;

    > div {
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.startsWith('02')) {
    if (digits.length <= 2) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
    if (digits.length <= 9) return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
    return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  if (digits.length <= 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

function LandingPage() {
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const digits = phoneNumber.replace(/\D/g, '');

    if (!companyName.trim()) {
      setStatus({ type: 'error', message: '약국·기관명을 입력해주세요.' });
      return;
    }
    if (digits.length < 9) {
      setStatus({ type: 'error', message: '올바른 전화번호를 입력해주세요.' });
      return;
    }

    setStatus({ type: 'loading', message: '' });
    try {
      await submitContactForm(companyName, phoneNumber);
      setCompanyName('');
      setPhoneNumber('');
      setStatus({ type: 'success', message: '문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.' });
    } catch {
      setStatus({ type: 'error', message: '전송에 실패했습니다. 잠시 후 다시 시도해주세요.' });
    }
  };

  return (
    <>
      <Header>
        <HeaderInner>
          <Brand href="#top" aria-label="아이당뇨 홈">
            <img src={logoImage} alt="" />
            <span>아이당뇨</span>
          </Brand>
          <Button href="#contact">도입 문의하기</Button>
        </HeaderInner>
      </Header>

      <main id="top">
        <Hero>
          <HeroInner>
            <HeroCopy>
              <Badge>약국 · 의료기상사를 위한 요양비 청구 업무 서비스</Badge>
              <Title>쉽고 편한<br /><span>요양비 청구</span></Title>
              <Description>확인부터 서류 작성, 공단 청구까지.<br />번거로운 요양비 청구 업무를 한곳에서 처리하세요.</Description>
              <Emphasis>업무는 더 간단하게, 환자 응대에 더 집중할 수 있게.</Emphasis>
              <HeroButton href="#contact">도입 문의하기</HeroButton>
            </HeroCopy>
            <Devices aria-label="아이당뇨 PC와 모바일 서비스 화면">
              <Laptop><img src={desktopScreen} alt="아이당뇨 PC 요양비 계산 화면" /></Laptop>
              <Phone><img src={mobileScreen} alt="아이당뇨 모바일 요양비 청구 화면" /></Phone>
            </Devices>
          </HeroInner>
        </Hero>

        <Section>
          <Container>
            <Eyebrow $tone="#e9451e">기존 업무의 불편함</Eyebrow>
            <SectionTitle>요양비 청구 한 건에<br />아직도 이렇게 많은 일을 하고 계신가요?</SectionTitle>
            <PainGrid>
              {painPoints.map(([number, title, description]) => (
                <PainCard key={number}><NumberChip>{number}</NumberChip><strong>{title}</strong><p>{description}</p></PainCard>
              ))}
            </PainGrid>
            <Warning>청구 건수가 많을수록 비용도, 담당자의 업무시간도 늘어납니다.</Warning>
          </Container>
        </Section>

        <Section $background="#f5f9ff">
          <Container>
            <Eyebrow>아이당뇨에서는 이렇게 달라집니다</Eyebrow>
            <SectionTitle>복잡했던 요양비 청구,<br />이제 쉽고 편하게!</SectionTitle>
            <ComparisonGrid>
              <ComparisonCard>
                <ComparisonHeader>기존 방식</ComparisonHeader>
                <ComparisonList>{beforeItems.map((item) => <li key={item}>{item}</li>)}</ComparisonList>
              </ComparisonCard>
              <ComparisonCard $after>
                <ComparisonHeader $after><img src={logoImage} alt="" />아이당뇨</ComparisonHeader>
                <ComparisonList $after>{afterItems.map((item) => <li key={item}>{item}</li>)}</ComparisonList>
              </ComparisonCard>
            </ComparisonGrid>
            <FlowMessage>청구 가능한지 확인부터 요양비 지급처리까지, 아이당뇨 안에서 이어집니다.</FlowMessage>
          </Container>
        </Section>

        <Section>
          <Container>
            <Eyebrow>실제 이용처가 체감한 변화</Eyebrow>
            <SectionTitle>번거로운 업무가 줄어드니<br />비용도, 시간도 줄었습니다.</SectionTitle>
            <EffectGrid>
              <CaseStudy>
                <p>팩스와 우편으로 서류를 보낼 때마다 발생하던 발송비와 담당자의 반복 업무가 줄었습니다.</p>
                <p>한 이용처는 관련 비용을 <strong>월 약 100만 원</strong> 절감했고, 확보한 시간을 환자 상담에 활용하면서 <strong>매출 증가</strong>까지 경험했습니다.</p>
                <p>서류 자동완성과 온라인 청구가 일상적인 업무의 흐름을 바꿉니다.</p>
              </CaseStudy>
              <Quote><p>청구 업무에 쓰던 시간이 줄어드니 환자를 더 자세히 응대할 수 있게 됐어요.</p><cite>아이당뇨 이용처 담당자</cite></Quote>
            </EffectGrid>
            <MetricGrid>
              {metrics.map(([value, label]) => <Metric key={value}><strong>{value}</strong><p>{label}</p></Metric>)}
            </MetricGrid>
            <Note>※ 실제 이용처 사례로, 청구량과 업무환경에 따라 효과는 달라질 수 있습니다.</Note>
          </Container>
        </Section>

        <TrustSection>
          <TrustGrid>
            <TrustCopy>
              <h2>이미 현장에서 사용하고 있습니다.</h2>
              <p className="label">아이당뇨 이용처</p>
              <p className="number">400+</p>
              <p className="description">약국과 의료기상사가 아이당뇨로<br />복잡한 요양비 청구 업무를 간편하게 처리하고 있습니다.</p>
            </TrustCopy>
            <TrustCard>
              <ol>{trustSteps.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}</ol>
              <p>복잡했던 과정을 하나로 연결합니다.</p>
            </TrustCard>
          </TrustGrid>
        </TrustSection>

        <Section>
          <Container>
            <AudienceTitle>이런 곳이라면 아이당뇨가 필요합니다.</AudienceTitle>
            <AudienceGrid>{audiences.map((item) => <AudienceItem key={item}><span>✓</span>{item}</AudienceItem>)}</AudienceGrid>
          </Container>
        </Section>

        <ContactSection id="contact">
          <ContactContainer>
            <ContactTitle>요양비 청구에 쓰는<br />비용과 시간을 줄여보세요.</ContactTitle>
            <ContactLead>확인부터 서류 작성, 공단 청구까지.<br />쉽고 편한 아이당뇨 시작해 보세요!</ContactLead>
            <SocialProof>400+ 약국·의료기상사가 이용하고 있습니다.</SocialProof>
            <FormCard onSubmit={handleSubmit} noValidate>
              <FieldGrid>
                <Field>약국·기관명
                  <input type="text" name="companyName" autoComplete="organization" placeholder="예: 행복한 약국" value={companyName} onChange={(event) => { setCompanyName(event.target.value); setStatus({ type: 'idle', message: '' }); }} disabled={status.type === 'loading'} />
                </Field>
                <Field>연락처
                  <input type="tel" name="phoneNumber" inputMode="numeric" autoComplete="tel" placeholder="예: 02-1234-5678" value={phoneNumber} onChange={(event) => { setPhoneNumber(formatPhone(event.target.value)); setStatus({ type: 'idle', message: '' }); }} disabled={status.type === 'loading'} />
                </Field>
              </FieldGrid>
              <SubmitButton type="submit" disabled={status.type === 'loading'}>{status.type === 'loading' ? '전송 중...' : '아이당뇨 도입 문의하기'}</SubmitButton>
              {status.message && <FormMessage role="status" aria-live="polite" $error={status.type === 'error'}>{status.message}</FormMessage>}
              <Privacy>입력하신 정보는 아이당뇨 도입 안내 목적으로만 활용됩니다.</Privacy>
            </FormCard>
          </ContactContainer>
        </ContactSection>
      </main>

      <Footer>
        <div><p className="footer-brand"><img src={logoImage} alt="" />쉽고 편한 요양비 청구</p><small>© 아이당뇨</small></div>
      </Footer>
    </>
  );
}

export default LandingPage;
