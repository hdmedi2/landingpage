import axios from 'axios';

// 개발 환경에서는 프록시 사용, 프로덕션에서는 직접 호출
const isDevelopment = import.meta.env.DEV;

// API 엔드포인트 목록 (fallback 지원)
// 개발 환경에서는 프록시를 사용하지만, 프록시가 실패하면 다른 도메인으로 재시도
const API_ENDPOINTS = isDevelopment
  ? [
      '/api/leads/phone', // 개발 환경: 프록시 사용 (vite.config.js의 프록시 설정 참조)
      // 프록시가 403을 반환하는 경우를 대비해 직접 호출도 시도
      // 단, CORS 에러가 발생할 수 있으므로 백엔드 서버에서 CORS 설정이 필요합니다
    ]
  : [
      'https://daeil.hdmedi.shop/api/leads/phone',
      'https://sdbio.hdmedi.shop/api/leads/phone',
    ];

/**
 * 전화번호에 하이픈 추가 (백엔드 요구사항)
 * @param {string} phoneNumber - 전화번호 (하이픈 포함/미포함)
 * @returns {string} 하이픈이 포함된 전화번호
 */
const formatPhoneNumber = (phoneNumber) => {
  // 이미 하이픈이 있으면 그대로 반환
  if (phoneNumber.includes('-')) {
    return phoneNumber.trim();
  }
  
  // 하이픈이 없으면 숫자만 추출
  const numbersOnly = phoneNumber.replace(/[^0-9]/g, '');
  
  // 전화번호 형식에 맞게 하이픈 추가
  if (numbersOnly.length === 10) {
    // 10자리: 02-123-4567 형식
    if (numbersOnly.startsWith('02')) {
      return `${numbersOnly.slice(0, 2)}-${numbersOnly.slice(2, 6)}-${numbersOnly.slice(6)}`;
    } else {
      // 지역번호 3자리: 031-123-4567
      return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3, 6)}-${numbersOnly.slice(6)}`;
    }
  } else if (numbersOnly.length === 11) {
    // 11자리: 010-1234-5678 형식
    return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3, 7)}-${numbersOnly.slice(7)}`;
  } else if (numbersOnly.length === 9) {
    // 9자리: 02-123-4567 (마지막 4자리가 3자리인 경우)
    return `${numbersOnly.slice(0, 2)}-${numbersOnly.slice(2, 5)}-${numbersOnly.slice(5)}`;
  }
  
  // 형식이 맞지 않으면 원본 반환
  return phoneNumber.trim();
};

/**
 * 연락처 폼 제출 API
 * 첫 번째 도메인 실패 시 두 번째 도메인으로 자동 재시도
 * @param {string} companyName - 약국명
 * @param {string} phoneNumber - 기관 전화번호 (하이픈 포함/미포함 모두 가능)
 * @returns {Promise} API 응답
 */
export const submitContactForm = async (companyName, phoneNumber) => {
  // 하이픈이 포함된 형식으로 변환 (백엔드 요구사항)
  const formattedPhone = formatPhoneNumber(phoneNumber);
  
  // 요청 데이터 준비
  const requestData = {
    companyName: companyName?.trim() || '',
    phoneNumber: formattedPhone,
  };
  
  // 디버깅: 전송되는 데이터 확인
  console.log('전송되는 데이터:', requestData);
  
  let lastError = null;
  
  // 각 엔드포인트를 순차적으로 시도
  for (const endpoint of API_ENDPOINTS) {
    try {
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
      
      // 성공 시 즉시 반환
      return response.data;
    } catch (error) {
      // 403 에러인 경우 (프록시가 거부한 경우)
      if (error.response?.status === 403) {
        // 개발 환경에서 프록시가 403을 반환하면 다른 도메인으로 재시도
        if (isDevelopment && endpoint === '/api/leads/phone') {
          console.warn('프록시가 403을 반환했습니다. 다른 도메인으로 재시도합니다.');
          // 다른 도메인으로 재시도
          const fallbackEndpoints = [
            'https://daeil.hdmedi.shop/api/leads/phone',
            'https://sdbio.hdmedi.shop/api/leads/phone',
          ];
          
          for (const fallbackEndpoint of fallbackEndpoints) {
            try {
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
              return response.data;
            } catch (fallbackError) {
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
  throw lastError;
};
