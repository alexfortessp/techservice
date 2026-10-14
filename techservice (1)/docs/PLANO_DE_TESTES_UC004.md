# TechService — Plano de Testes (UC-004 Abrir Ordem de Serviço)

## Identificação

Este plano de testes de cenários cobre o caso de uso **Abrir Ordem de Serviço** do TechService, com 6 scripts agrupados em um caso de testes. Ele pertence ao estágio de testes de lançamento (Sommerville, 2018) e será executado na 2ª iteração da construção.

| Item | Valor |
| --- | --- |
| Projeto | TechService — Sistema de Gerenciamento de Ordens de Serviço |
| Disciplina | Prática Profissional em Análise e Desenvolvimento de Sistemas — Aula 4 |
| Integrantes | Alexandre Eliezer Fortes, Ramon Henrique de Godoy |
| Repositório | [github.com/alexfortessp/techservice2](https://github.com/alexfortessp/techservice2) |
| Tipo de teste | Teste de cenários, baseado na descrição do caso de uso |

## Caso de uso testado

O caso de uso escolhido é **UC-004 Abrir Ordem de Serviço**, porque é o ponto de entrada de todo o fluxo da OS (diagnóstico, orçamento, aprovação, entrega).

| Item | Descrição |
| --- | --- |
| Ator principal | Atendente |
| Pré-condição | Atendente autenticado no sistema |
| Pós-condição | OS registrada no banco com número único e status inicial |

**Fluxo principal:**

1. O atendente acessa NOVA OS no painel principal.
2. Identifica o cliente já cadastrado.
3. Seleciona o equipamento do cliente.
4. Informa o problema relatado.
5. Salva a ordem.
6. O sistema registra a OS com número e status inicial e exibe confirmação.

**Cenários considerados nos scripts:**

- Fluxo principal: cliente e equipamento já cadastrados.
- Fluxo alternativo A1: equipamento ainda não cadastrado, cadastrado durante a abertura.
- Fluxo alternativo A2: cliente não encontrado na busca.
- Fluxo de exceção E1: problema relatado em branco.
- Fluxo de exceção E2: nenhum equipamento selecionado.
- Fluxo de exceção E3: usuário com perfil Técnico tenta abrir OS.

## Caso de testes

| Identificação | Caso de uso | Scripts |
| --- | --- | --- |
| TC-001 Testes de abrir ordem de serviço | UC-004 Abrir Ordem de Serviço | TST-001 Abertura de OS bem-sucedida; TST-002 Abertura de OS com cadastro de novo equipamento; TST-003 Busca de cliente inexistente; TST-004 Tentativa de abrir OS sem problema relatado; TST-005 Tentativa de abrir OS sem equipamento; TST-006 Tentativa de abrir OS com perfil Técnico |

## Scripts de teste

Todos os scripts usam o mesmo usuário atendente: e-mail `atendente@techservice.com`, senha `Teste@123`. Os campos Resultado do teste, Descrição do resultado obtido e Data da última execução são preenchidos na execução dos testes (Aula 5). Valores possíveis do resultado: NÃO EXECUTADO, SUCESSO, FALHA, CANCELADO.

### TST-001 Abertura de OS bem-sucedida

| Informação | Conteúdo |
| --- | --- |
| Identificação única | TST-001 Abertura de OS bem-sucedida |
| Caso de uso em que se baseia | UC-004 Abrir Ordem de Serviço |
| Cenário | Fluxo principal |
| Preparação | Cliente 'Maria Oliveira', CPF 123.456.789-09, deve estar cadastrado e ter o equipamento 'Notebook Dell Inspiron 15', nº de série ABC12345, cadastrado. O atendente deve estar logado. |
| Passos para execução do teste | (1) No painel principal, selecionar NOVA OS. (2) No campo 'cliente', buscar o CPF 123.456.789-09 e selecionar 'Maria Oliveira'. (3) No campo 'equipamento', selecionar 'Notebook Dell Inspiron 15 – ABC12345'. (4) No campo 'problema relatado', informar 'Notebook não liga'. (5) Selecionar SALVAR. |
| Resultado esperado | O sistema deve exibir a mensagem 'Ordem de serviço registrada com sucesso', mostrar o número da nova OS com status 'Aberta' e a OS deve aparecer na tela ORDENS. Uma consulta direta ao banco deve mostrar o registro com cliente, equipamento, problema e status corretos. |
| Resultado do teste | NÃO EXECUTADO |
| Descrição do resultado obtido | |
| Data da última execução do teste | \_\_/\_\_/\_\_\_\_ |

### TST-002 Abertura de OS com cadastro de novo equipamento

| Informação | Conteúdo |
| --- | --- |
| Identificação única | TST-002 Abertura de OS com cadastro de novo equipamento |
| Caso de uso em que se baseia | UC-004 Abrir Ordem de Serviço |
| Cenário | Fluxo alternativo A1 — equipamento não cadastrado |
| Preparação | Cliente 'Maria Oliveira', CPF 123.456.789-09, cadastrado. Não deve existir equipamento com nº de série XYZ98765. O atendente deve estar logado. |
| Passos para execução do teste | (1) Selecionar NOVA OS. (2) Buscar o CPF 123.456.789-09 e selecionar 'Maria Oliveira'. (3) Selecionar a opção de cadastrar novo equipamento. (4) Informar tipo 'Smartphone', marca 'Samsung', modelo 'Galaxy A54', nº de série 'XYZ98765' e salvar o equipamento. (5) No campo 'problema relatado', informar 'Tela quebrada'. (6) Selecionar SALVAR. |
| Resultado esperado | O equipamento deve ser cadastrado e vinculado à cliente. O sistema deve exibir a mensagem 'Ordem de serviço registrada com sucesso' e o número da OS com status 'Aberta', associada ao 'Galaxy A54 – XYZ98765'. |
| Resultado do teste | NÃO EXECUTADO |
| Descrição do resultado obtido | |
| Data da última execução do teste | \_\_/\_\_/\_\_\_\_ |

### TST-003 Busca de cliente inexistente

| Informação | Conteúdo |
| --- | --- |
| Identificação única | TST-003 Busca de cliente inexistente |
| Caso de uso em que se baseia | UC-004 Abrir Ordem de Serviço |
| Cenário | Fluxo alternativo A2 — cliente não encontrado |
| Preparação | Não deve existir cliente com CPF 987.654.321-00. O atendente deve estar logado. |
| Passos para execução do teste | (1) Selecionar NOVA OS. (2) No campo 'cliente', buscar o CPF 987.654.321-00. |
| Resultado esperado | O sistema deve exibir a mensagem 'Cliente não encontrado' e oferecer a opção de cadastrar o cliente. Nenhuma OS deve ser criada. |
| Resultado do teste | NÃO EXECUTADO |
| Descrição do resultado obtido | |
| Data da última execução do teste | \_\_/\_\_/\_\_\_\_ |

### TST-004 Tentativa de abrir OS sem problema relatado

| Informação | Conteúdo |
| --- | --- |
| Identificação única | TST-004 Tentativa de abrir OS sem problema relatado |
| Caso de uso em que se baseia | UC-004 Abrir Ordem de Serviço |
| Cenário | Fluxo de exceção E1 — campo obrigatório em branco |
| Preparação | Mesma do TST-001. Anotar a quantidade de OS existentes na tela ORDENS. |
| Passos para execução do teste | (1) Selecionar NOVA OS. (2) Buscar o CPF 123.456.789-09 e selecionar 'Maria Oliveira'. (3) Selecionar 'Notebook Dell Inspiron 15 – ABC12345'. (4) Deixar o campo 'problema relatado' em branco. (5) Selecionar SALVAR. |
| Resultado esperado | O sistema deve destacar o campo 'problema relatado' e exibir a mensagem 'Informe o problema relatado'. A quantidade de OS na tela ORDENS deve continuar a mesma. |
| Resultado do teste | NÃO EXECUTADO |
| Descrição do resultado obtido | |
| Data da última execução do teste | \_\_/\_\_/\_\_\_\_ |

### TST-005 Tentativa de abrir OS sem equipamento

| Informação | Conteúdo |
| --- | --- |
| Identificação única | TST-005 Tentativa de abrir OS sem equipamento |
| Caso de uso em que se baseia | UC-004 Abrir Ordem de Serviço |
| Cenário | Fluxo de exceção E2 — equipamento não selecionado |
| Preparação | Mesma do TST-001. Anotar a quantidade de OS existentes na tela ORDENS. |
| Passos para execução do teste | (1) Selecionar NOVA OS. (2) Buscar o CPF 123.456.789-09 e selecionar 'Maria Oliveira'. (3) Não selecionar equipamento. (4) No campo 'problema relatado', informar 'Notebook não liga'. (5) Selecionar SALVAR. |
| Resultado esperado | O sistema deve exibir a mensagem 'Selecione o equipamento' e não salvar a OS. A quantidade de OS na tela ORDENS deve continuar a mesma. |
| Resultado do teste | NÃO EXECUTADO |
| Descrição do resultado obtido | |
| Data da última execução do teste | \_\_/\_\_/\_\_\_\_ |

### TST-006 Tentativa de abrir OS com perfil Técnico

| Informação | Conteúdo |
| --- | --- |
| Identificação única | TST-006 Tentativa de abrir OS com perfil Técnico |
| Caso de uso em que se baseia | UC-004 Abrir Ordem de Serviço |
| Cenário | Fluxo de exceção E3 — perfil sem permissão |
| Preparação | Usuário com perfil Técnico cadastrado: e-mail `tecnico@techservice.com`, senha `Teste@123`. |
| Passos para execução do teste | (1) Na tela de LOGIN, informar o e-mail tecnico@techservice.com e a senha Teste@123 e selecionar ENTRAR. (2) No painel principal, procurar a opção NOVA OS. (3) Se a opção não aparecer, acessar diretamente o endereço da tela NOVA OS. |
| Resultado esperado | A opção NOVA OS não deve aparecer para o técnico. O acesso direto ao endereço deve ser bloqueado com a mensagem 'Acesso não permitido para este perfil'. |
| Resultado do teste | NÃO EXECUTADO |
| Descrição do resultado obtido | |
| Data da última execução do teste | \_\_/\_\_/\_\_\_\_ |

## Referência

SOMMERVILLE, I. *Engenharia de software*. 10. ed. São Paulo: Pearson, 2018.
