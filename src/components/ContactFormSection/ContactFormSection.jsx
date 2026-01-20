import styled from 'styled-components';
import { useState } from 'react';
import { submitContactForm } from '../../api/contactApi';

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  padding: 70px 0 120px 0;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 40px;
  }
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 50px;
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 26px;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-top: -20px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 700px;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.textGrayDark};
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.white};

  &::placeholder {
    color: #808080;
  }

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 56px;
  padding: 0 32px;
  background-color: ${props => props.disabled ? '#ccc' : props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.bold};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.disabled ? '#ccc' : props.theme.colors.primaryLight};
  }
`;


const PrivacyText = styled.p`
  font-size: 11px;
  font-weight: ${props => props.theme.fontWeights.regular};
  color: #808080;
  text-align: center;
  margin: 25px 0 0 0;
  width: 100%;
  max-width: 700px;
  padding-left: 8px;
`;

const SuccessMessage = styled.p`
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin: 20px 0 0 0;
  width: 100%;
  max-width: 700px;
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: #ff4444;
  text-align: center;
  margin: 20px 0 0 0;
  width: 100%;
  max-width: 700px;
`;

const ContactFormSection = () => {
  const [pharmacyName, setPharmacyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 입력값 검증
    if (!pharmacyName.trim()) {
      setError('약국명을 입력해주세요.');
      return;
    }

    if (!phoneNumber.trim()) {
      setError('전화번호를 입력해주세요.');
      return;
    }

    // 전화번호 형식 검증 (하이픈 포함만 허용)
    const phoneWithoutHyphen = phoneNumber.trim().replace(/-/g, '');
    const phoneRegex = /^[0-9]{9,11}$/; // 9~11자리 숫자
    if (!phoneRegex.test(phoneWithoutHyphen)) {
      setError('올바른 전화번호 형식으로 입력해주세요. (예: 02-1234-5678)');
      return;
    }

    setIsLoading(true);
    setError('');
    setIsSuccess(false);

    try {
      await submitContactForm(pharmacyName.trim(), phoneNumber.trim());
      setIsSuccess(true);
      setPharmacyName(''); // 성공 시 입력값 초기화
      setPhoneNumber(''); // 성공 시 입력값 초기화
      
      // 3초 후 성공 메시지 숨기기
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      // 에러 메시지 처리
      if (err.isCorsError) {
        // CORS 에러
        setError('서버 연결 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      } else if (err.response) {
        // 서버에서 에러 응답이 온 경우
        const errorMessage = err.response.data?.message || '전송에 실패했습니다. 다시 시도해주세요.';
        // [phoneNumber] 같은 필드명 접두사 제거
        const cleanedMessage = errorMessage.replace(/^\[.*?\]\s*/, '');
        setError(cleanedMessage);
      } else if (err.request) {
        // 네트워크 에러
        setError('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
      } else {
        // 기타 에러
        setError('오류가 발생했습니다. 다시 시도해주세요.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="도입을-고민중이신가요">
      <Container>
        <Title>도입을 고민 중이신가요?</Title>
        <Subtitle>
           약국 전화번호를 남겨주시면,<br />
          담당자가 확인 후 직접 연락드리겠습니다.
        </Subtitle>
        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
          <FormWrapper>
            <InputRow>
              <InputGroup>
                <Label>약국명</Label>
                <Input
                  type="text"
                  placeholder="예 : 행복한 약국"
                  value={pharmacyName}
                  onChange={(e) => {
                    setPharmacyName(e.target.value);
                    setError(''); // 입력 시 에러 메시지 초기화
                  }}
                  disabled={isLoading}
                />
              </InputGroup>
              <InputGroup>
                <Label>약국 전화번호</Label>
                <Input
                  type="tel"
                  placeholder="예: 02-1234-5678"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    setError(''); // 입력 시 에러 메시지 초기화
                  }}
                  disabled={isLoading}
                />
              </InputGroup>
            </InputRow>
            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? '전송 중...' : '전송하기'}
            </SubmitButton>
          </FormWrapper>
          {isSuccess && (
            <SuccessMessage>
              ✓ 전송이 완료되었습니다. 담당자가 확인 후 연락드리겠습니다.
            </SuccessMessage>
          )}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <PrivacyText>
            *입력하신 정보는 아이당뇨 도입 안내 목적으로만 활용됩니다.
          </PrivacyText>
        </form>
      </Container>
    </Section>
  );
};

export default ContactFormSection;
