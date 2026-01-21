import styled from 'styled-components';
import { useState } from 'react';
import { submitContactForm } from '../../api/contactApi';

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  padding: 70px 0 120px 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 50px 0 80px 0;
  }
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 20px;
    gap: 24px;
  }
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 50px;
  color: ${props => props.theme.colors.text};
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 24px;
    line-height: 1.3;
    margin: 0;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 26px;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-top: -20px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 14px;
    line-height: 1.5;
    margin: -10px 0 0 0;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 700px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: 280px;
    gap: 16px;
  }
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 6px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.textGrayDark};
  text-align: left;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 10px;
  }
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 38px;
    padding: 0 12px;
    border-radius: 8px;
    font-size: 12px;
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 40px;
    border-radius: 10px;
    font-size: 10px;
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 9px;
    margin: 16px 0 0 0;
    max-width: 280px;
    padding-left: 0;
  }
`;

const SuccessMessage = styled.p`
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin: 20px 0 0 0;
  width: 100%;
  max-width: 700px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 10px;
    margin: 12px 0 0 0;
    max-width: 280px;
  }
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: #ff4444;
  text-align: center;
  margin: 20px 0 0 0;
  width: 100%;
  max-width: 700px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 10px;
    margin: 12px 0 0 0;
    max-width: 280px;
  }
`;

const ContactFormSection = () => {
  const [pharmacyName, setPharmacyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const formatPhoneInput = (value) => {
    const digits = value.replace(/[^0-9]/g, '');
    if (digits.length <= 2) {
      return digits;
    }
    if (digits.startsWith('02')) {
      if (digits.length <= 5) {
        return `${digits.slice(0, 2)}-${digits.slice(2)}`;
      }
      if (digits.length <= 9) {
        return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
      }
      return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
    }
    if (digits.length <= 3) {
      return digits;
    }
    if (digits.length <= 6) {
      return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    }
    if (digits.length <= 10) {
      return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('=== 전송하기 버튼 클릭 ===');
    console.log('입력된 약국명:', pharmacyName);
    console.log('입력된 전화번호:', phoneNumber);
    
    // 입력값 검증
    if (!pharmacyName.trim()) {
      console.log('❌ 검증 실패: 약국명이 비어있습니다.');
      setError('약국명을 입력해주세요.');
      return;
    }

    if (!phoneNumber.trim()) {
      console.log('❌ 검증 실패: 전화번호가 비어있습니다.');
      setError('전화번호를 입력해주세요.');
      return;
    }

    // 전화번호 형식 검증 (하이픈 포함만 허용)
    const phoneWithoutHyphen = phoneNumber.trim().replace(/-/g, '');
    const phoneRegex = /^[0-9]{9,11}$/; // 9~11자리 숫자
    if (!phoneRegex.test(phoneWithoutHyphen)) {
      console.log('❌ 검증 실패: 전화번호 형식이 올바르지 않습니다.', phoneWithoutHyphen);
      setError('올바른 전화번호 형식으로 입력해주세요. (예: 02-1234-5678)');
      return;
    }

    console.log('✅ 검증 통과 - API 호출 시작');
    console.log('전송할 데이터:', {
      companyName: pharmacyName.trim(),
      phoneNumber: phoneNumber.trim()
    });

    setIsLoading(true);
    setError('');
    setIsSuccess(false);

    try {
      console.log('📤 API 요청 전송 중...');
      await submitContactForm(pharmacyName.trim(), phoneNumber.trim());
      console.log('✅ API 요청 성공!');
      setIsSuccess(true);
      setPharmacyName(''); // 성공 시 입력값 초기화
      setPhoneNumber(''); // 성공 시 입력값 초기화
      
      // 3초 후 성공 메시지 숨기기
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      console.error('❌ API 요청 실패:', err);
      console.error('에러 상세:', {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status,
        isCorsError: err.isCorsError
      });
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
                    setPhoneNumber(formatPhoneInput(e.target.value));
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
