# TechService — Sistema de Gerenciamento de Ordens de Serviço

Prática Profissional em Análise e Desenvolvimento de Sistemas — Mackenzie
Integrantes: Alexandre Eliezer Fortes, Ramon Henrique de Godoy

Aplicação web para assistências técnicas: clientes, equipamentos, ordens de serviço, diagnóstico, orçamento, aprovação, reparo, entrega e relatórios.

## Como publicar (GitHub Pages)

1. Envie todos os arquivos desta pasta para o repositório (o `index.html` precisa ficar na raiz).
2. No repositório, abra **Settings → Pages**.
3. Em **Source**, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)**, e clique em **Save**.
4. Em 1 a 2 minutos o sistema fica no ar em `https://<usuario>.github.io/<repositorio>/`.

Também funciona abrindo o `index.html` direto no navegador.

## Usuários de teste

| Perfil | E-mail | Senha |
| --- | --- | --- |
| Atendente | atendente@techservice.com | Teste@123 |
| Técnico | tecnico@techservice.com | Teste@123 |
| Administrador | admin@techservice.com | Teste@123 |

Dados iniciais: cliente Maria Oliveira (CPF 123.456.789-09) com o equipamento Notebook Dell Inspiron 15, nº de série ABC12345.

## Funcionalidades por perfil

| Perfil | Pode fazer |
| --- | --- |
| Atendente | Cadastrar e alterar clientes e equipamentos, abrir OS, atribuir técnico, registrar aprovação ou recusa do orçamento, registrar entrega |
| Técnico | Ver as OS atribuídas a ele, registrar diagnóstico e orçamento, atualizar status, concluir reparo |
| Administrador | Tudo do atendente, mais relatórios de OS por período e restauração do banco |

Fluxo de status da OS: Aberta → Aguardando aprovação → Aprovado ou Recusado → Em reparo → Concluída → Entregue.

## Persistência e consulta ao banco

Os dados são gravados no armazenamento local do navegador (localStorage, chave `techservice_db`), nas tabelas `usuarios`, `clientes`, `equipamentos`, `ordens` e `itens_orcamento`. A tela **BANCO DE DADOS** faz a consulta direta dessas tabelas, para comprovar que cada operação feita na aplicação foi gravada. O botão **EXPORTAR BANCO (JSON)** baixa o conteúdo completo.

## Estrutura

```
index.html        página da aplicação
css/style.css     estilos
js/db.js          camada de persistência
js/app.js         telas, regras de negócio e controle de acesso por perfil
docs/             plano de testes (UC-004 Abrir Ordem de Serviço)
```
