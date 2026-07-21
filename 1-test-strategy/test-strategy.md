## Visão Geral

Este documento define a estratégia de testes para o sistema de transferências bancárias, responsável por permitir movimentações financeiras entre contas, respeitando regras de limite, horário e autorização.

O objetivo é garantir a confiabilidade, segurança e integridade das transações financeiras.

Baseado em experiência prática com sistemas financeiros e validação de regras críticas.

## Objetivo

Garantir que o sistema de transferências:
- Execute corretamente as transações financeiras
- Respeite regras de negócio (limites, horários, autorizações)
- Mantenha consistência de dados
- Evite falhas críticas que impactem usuários ou o negócio

## Análise de Riscos

| Risco | Impacto | Probabilidade | Mitigação |
|------|--------|--------------|----------|
| Transferência com valor incorreto | Alto | Médio | Testes automatizados de cálculo |
| Falha em validação de limite noturno | Alto | Alto | Testes de API + E2E |
| Duplicidade de transação | Crítico | Baixo | Testes de concorrência |
| Falha na autorização de diretoria | Crítico | Médio | Cenários BDD + validação manual |

## Escopo de Testes

### Incluído:
- Transferência entre contas
- Validação de limites diurno e noturno
- Fluxo de autorização
- Integração com APIs
- Persistência de dados

### Não incluído:
- Testes de performance (fora do escopo atual)
- Testes de segurança aprofundados

## Tipos de Teste

- Testes funcionais
- Testes de API
- Testes end-to-end (E2E)
- Testes exploratórios
- Testes de regressão

## Estratégia de Automação

A automação será aplicada prioritariamente em cenários críticos e repetitivos:

### Automatizar:
- Fluxos principais de transferência (E2E)
- Validação de regras de negócio (limites, saldo)
- Testes de API

### Não automatizar:
- Cenários exploratórios
- Casos com alta instabilidade
- Testes visuais complexos

### Ferramentas:
- Cypress (E2E)
- Postman / RestAssured (API)

## Estratégia de Execução

- Testes de API executados a cada build
- Testes E2E executados diariamente
- Testes exploratórios em novas funcionalidades
- Regressão antes de cada release

## Dados de Teste

- Contas com saldo positivo e negativo
- Usuários com diferentes níveis de permissão
- Valores dentro e fora dos limites permitidos

## Critérios de Entrada

- Ambiente estável
- APIs disponíveis
- Dados configurados

## Critérios de Saída

- 95% dos testes críticos aprovados
- Nenhum bug crítico em aberto

## Considerações Finais

A estratégia será revisada continuamente conforme evolução do sistema, priorizando sempre a mitigação de riscos e a eficiência na execução dos testes.