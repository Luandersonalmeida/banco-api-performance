import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../helpers/auth.js';

const config = JSON.parse(open('../config.json'));

export const options = {
    iterations: 1
};

export default function() {
  const token1 = obterToken()
  console.log('Token obtido:', token1)

  const url = `${config.K6_BASE_URL}/transferencias`;

  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    valor: 11
  })

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token1}`
    }
  }

  let response = http.post(url, payload, params)

  check(response, 
  { "status is 201": (response) => response.status === 201 });
    console.log('erro', response)
  sleep(1)
}
