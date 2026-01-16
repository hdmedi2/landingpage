import axios from 'axios';

// API 기본 URL 설정 (환경변수로 관리 가능)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

// axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 (필요시 토큰 추가 등)
apiClient.interceptors.request.use(
  (config) => {
    // 토큰이 있다면 헤더에 추가
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 (에러 처리)
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 공통 에러 처리
    if (error.response) {
      // 서버에서 응답이 온 경우
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // 요청은 보냈지만 응답을 받지 못한 경우
      console.error('Network Error:', error.request);
    } else {
      // 요청 설정 중 에러가 발생한 경우
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
