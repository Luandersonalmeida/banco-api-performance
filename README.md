# Banco API Performance Tests with k6

## Introdução

Este repositório contém testes de performance para uma API bancária desenvolvidos com k6, uma ferramenta moderna de teste de carga. Os testes simulam operações críticas como autenticação de usuários e processamento de transferências bancárias, permitindo avaliar:

- Tempos de resposta sob diferentes cargas
- Limites de capacidade da API
- Estabilidade em cenários de stress
- Comportamento em condições de uso realista

## 🛠 Tecnologias Utilizadas

- [k6](https://k6.io/) - Ferramenta de teste de performance de código aberto
- JavaScript - Linguagem principal para desenvolvimento dos testes
- JSON - Para configurações e payloads das requisições
- HTTP - Para comunicação com a API bancária
- Git/GitHub - Versionamento e hospedagem do código

## 📂 Estrutura do Repositório

```
banco-api-performance/
├── tests/
│   ├── login.test.js         # Testes de autenticação e obtenção de token
│   └── tranferencias.test.js # Cenários de teste para transferências
│
├── helpers/
│   └── auth.js              # Módulo auxiliar para autenticação
│
├── config.json.example      # Template de configuração (deve ser renomeado)
├── .gitignore
└── README.md                # Este arquivo
```

## ⚙️ Configuração Inicial

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/banco-api-performance.git
cd banco-api-performance
```

2. Prepare o arquivo de configuração:
```bash
cp config.json.example config.json
```

3. Edite o arquivo `config.json` com suas credenciais:
```json
{
  "K6_BASE_URL": "http://localhost:3000",
  "K6_USERNAME": "seu_usuario",
  "K6_PASSWORD": "sua_senha"
}
```

* `K6_BASE_URL`: URL base da API bancária
* `K6_USERNAME`: Nome de usuário para autenticação
* `K6_PASSWORD`: Senha para autenticação

> **IMPORTANTE**: O arquivo `config.json.example` contém a estrutura necessária com as variáveis `K6_BASE_URL`, `K6_USERNAME` e `K6_PASSWORD`. Este arquivo deve ser renomeado para `config.json` e configurado com os valores corretos para executar os testes.