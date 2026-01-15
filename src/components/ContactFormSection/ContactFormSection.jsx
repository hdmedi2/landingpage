import styled from 'styled-components';
import { useState } from 'react';

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  padding: 120px 0;
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
  font-size: 36px;
  font-weight: ${props => props.theme.fontWeights.extraBold};
  line-height: 50px;
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 26px;
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  flex: 1;
  height: 56px;
  padding: 0 28px;
  border: 1.3px solid ${props => props.theme.colors.borderGray};
  border-radius: 8px 0 0 8px;
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.white};

  &::placeholder {
    color: ${props => props.theme.colors.textGray};
  }

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  height: 56px;
  padding: 0 32px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 0 8px 8px 0;
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }
`;

const HelperText = styled.p`
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin: 0;
`;

const PrivacyText = styled.p`
  font-size: 13px;
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.textGray};
  text-align: center;
  margin: 0;
`;

const ContactFormSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Phone number:', phoneNumber);
  };

  return (
    <Section>
      <Container>
        <Title>도입을 고민 중이신가요?</Title>
        <Subtitle>
          휴대전화번호를 남겨주시면,<br />
          담당자가 확인 후 직접 연락드리겠습니다.
        </Subtitle>
        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <FormWrapper>
            <Input
              type="tel"
              placeholder="휴대전화번호를 입력해주세요."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <SubmitButton type="submit">전송</SubmitButton>
          </FormWrapper>
          <HelperText>
            * 하이픈(-)을 포함하여 입력해주세요. (예 : 010-1234-5678)
          </HelperText>
          <PrivacyText>
            *입력하신 정보는 아이당뇨 도입 안내 목적으로만 활용됩니다.
          </PrivacyText>
        </form>
      </Container>
    </Section>
  );
};

export default ContactFormSection;
