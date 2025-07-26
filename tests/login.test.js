import http from 'k6/http';
import { sleep, check } from 'k6';


export  const options = {
    iterations: 10,
}

export default function () {
  const url = 'http://localhost:3000/login';

  const payload = JSON.stringify({
    username: 'junior.lima',
    senha: '123456',
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