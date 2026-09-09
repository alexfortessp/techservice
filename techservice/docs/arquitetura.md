# Arquitetura proposta

O TechService será uma aplicação web organizada em camadas.

## Camadas

### Interface
Responsável pelas telas e interação com o usuário.

### Controller
Recebe as requisições da interface e direciona as operações.

### Service
Concentra regras de negócio e validações.

### Repository
Responsável pela persistência e recuperação dos dados.

### Banco de dados
Armazena clientes, equipamentos, ordens de serviço, diagnósticos e orçamentos.

Fluxo geral:

`Interface -> Controller -> Service -> Repository -> Banco de Dados`
