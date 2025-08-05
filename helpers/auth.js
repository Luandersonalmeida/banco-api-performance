import http from 'k6/http';
const config = JSON.parse(open('../config.json'));

export function obterToken(){

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
    console.log('Resposta do login:', response.body)
    
    const responseData = response.json();
    return responseData.token
       
}