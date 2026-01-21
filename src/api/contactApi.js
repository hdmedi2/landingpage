import axios from 'axios';

// 개발 환경에서는 프록시 사용, 프로덕션에서는 직접 호출
const isDevelopment = import.meta.env.DEV;

// API 엔드포인트 목록 (fallback 지원)
// 개발 환경에서는 프록시 사용, 프로덕션에서는 직접 호출
const API_ENDPOINTS = isDevelopment
  ? [
      '/api/leads/phone', // 개발 환경: 프록시 사용 (vite.config.js의 프록시 설정 참조)
    ]
  : [
      'https://api.daeil.hdmedi.shop/api/leads/phone',
      'https://sdbio.hdmedi.shop/api/leads/phone',
    ];


/**
 * 연락처 폼 제출 API
 * 첫 번째 도메인 실패 시 두 번째 도메인으로 자동 재시도
 * @param {string} companyName - 약국명
 * @param {string} phoneNumber - 기관 전화번호 (하이픈 포함/미포함 모두 가능)
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
  
  let lastError = null;
  
  // 각 엔드포인트를 순차적으로 시도
  for (const endpoint of API_ENDPOINTS) {
    try {
      console.log(`🔄 요청 시도: ${endpoint}`);
      const response = await axios.post(
        endpoint,
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        }
      );
      
      console.log('✅ 요청 성공:', response.data);
      // 성공 시 즉시 반환
      return response.data;
    } catch (error) {
      console.error(`❌ 요청 실패 (${endpoint}):`, {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message,
      });
      
      // 500 에러 또는 403 에러인 경우 (프록시/서버 문제)
      if (error.response?.status === 500 || error.response?.status === 403) {
        // 개발 환경에서 프록시가 500/403을 반환하면 다른 도메인으로 재시도
        if (isDevelopment && endpoint === '/api/leads/phone') {
          console.warn(`⚠️ 프록시가 ${error.response.status}을 반환했습니다. 다른 도메인으로 재시도합니다.`);
          // 다른 도메인으로 재시도
          const fallbackEndpoints = [
            'https://api.daeil.hdmedi.shop/api/leads/phone',
            'https://sdbio.hdmedi.shop/api/leads/phone',
          ];
          
          for (const fallbackEndpoint of fallbackEndpoints) {
            try {
              console.log(`🔄 Fallback 요청 시도: ${fallbackEndpoint}`);
              const response = await axios.post(
                fallbackEndpoint,
                requestData,
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  timeout: 10000,
                }
              );
              console.log('✅ Fallback 요청 성공:', response.data);
              return response.data;
            } catch (fallbackError) {
              console.error(`❌ Fallback 요청 실패 (${fallbackEndpoint}):`, {
                status: fallbackError.response?.status,
                data: fallbackError.response?.data,
                message: fallbackError.message,
              });
              
              // CORS 에러인 경우
              if (fallbackError.code === 'ERR_NETWORK' || fallbackError.message.includes('CORS')) {
                const corsError = new Error('서버 연결 오류가 발생했습니다. 백엔드 서버의 CORS 설정을 확인해주세요.');
                corsError.isCorsError = true;
                lastError = corsError;
              } else {
                lastError = fallbackError;
              }
            }
          }
        } else {
          lastError = error;
        }
      } else if (error.code === 'ERR_NETWORK' || error.message.includes('CORS')) {
        // CORS 에러인 경우 명확한 에러 메시지 제공
        const corsError = new Error('서버 연결 오류가 발생했습니다. 백엔드 서버의 CORS 설정을 확인해주세요.');
        corsError.isCorsError = true;
        lastError = corsError;
      } else {
        lastError = error;
      }
      
      // 마지막 엔드포인트가 아니면 다음으로 시도
      if (endpoint !== API_ENDPOINTS[API_ENDPOINTS.length - 1]) {
        continue;
      }
    }
  }
  
  // 모든 엔드포인트 실패 시 마지막 에러 throw
  console.error('❌ 모든 요청 실패. 마지막 에러:', lastError);
  throw lastError;
};
