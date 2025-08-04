import http from 'k6/http';
import { sleep, check } from 'k6';

const config = JSON.parse(open('../config.json'));

export  const options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '20s', target: 10 },
        { duration: '10s', target: 30 },
        { duration: '20s', target: 30 },
        { duration: '20s', target: 0 },
    ],
      
thresholds: {
      http_req_duration: ['p(90)<3000', 'max<6000'],
      http_req_failed: ['rate<0.01']
    
    }
    
}

export default function () {
  const url = `${config.K6_BASE_URL}/login`;

  const payload = JSON.stringify({
    username: config.K6_USERNAME,
    senha: config.K6_PASSWORD,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = http.post(url, payload, params);

  check(response, {
    'Validar status 200 ' : (response) => response.status === 200,
    'Validar que o token é uma string' : (response) => typeof(response.json().token) == 'string'
  })

  console.log(response)

  sleep(3)
}