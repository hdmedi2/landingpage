import axios from 'axios';

// hmlife 운영 환경의 문의 메일 전송 엔드포인트
const API_ENDPOINT = '/api/send-lead-email';


/**
 * 연락처 폼 제출 API
 * @param {string} companyName - 업체명
 * @param {string} phoneNumber - 연락처 (하이픈 포함/미포함 모두 가능)
 * @returns {Promise} API 응답
 */
export const submitContactForm = async (companyName, phoneNumber) => {
  // 요청 데이터 준비 (하이픈 유지 전송)
  const requestData = {
    companyName: companyName?.trim() || '',
    phoneNumber: phoneNumber?.trim() || '',
  };
  
  // 디버깅: 전송되는 데이터 확인
  console.log('📤 전송되는 데이터:', requestData);
  
  try {
    console.log(`🔄 요청 시도: ${API_ENDPOINT}`);
    const response = await axios.post(
      API_ENDPOINT,
      requestData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      }
    );
    
    console.log('✅ 요청 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error(`❌ 요청 실패 (${API_ENDPOINT}):`, {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message,
    });
    
    // CORS 에러인 경우 명확한 에러 메시지 제공
    if (error.code === 'ERR_NETWORK' || error.message.includes('CORS')) {
      const corsError = new Error('서버 연결 오류가 발생했습니다. 백엔드 서버의 CORS 설정을 확인해주세요.');
      corsError.isCorsError = true;
      throw corsError;
    }
    
    throw error;
  }
};
