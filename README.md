# Hangar Digital — controle de vencimentos

Sistema simples para acompanhar os vencimentos de inspeções de manutenção aeronáutica. Nasceu como
um estágio simulado de desenvolvimento: cada função e cada tela entra por **ticket**, em uma **branch**
e um **pull request**, como num time de verdade.

> Projeto de estudo. Os dados são fictícios: nenhuma matrícula, empresa ou tarefa aqui é real.

## O que faz (conforme as sprints avançam)

- Calcula os dias até o vencimento de cada tarefa
- Classifica em **vencida**, **urgente**, **a vencer** ou **em dia**
- Mostra o resumo do dia

## Como rodar

Requisito: [Node.js](https://nodejs.org) 20 ou mais novo.

```bash
git clone https://github.com/andre-crator/hangar-digital.git
cd hangar-digital
npm test
```

## Como o trabalho é organizado

1. Cada ticket vira uma branch (`s1-t2-dias-ate`) e um pull request.
2. O pull request usa o modelo em `.github/pull_request_template.md`.
3. A CI roda `npm test` em todo pull request: só entra na `main` com os testes verdes.

## Stack

JavaScript (depois TypeScript e React). Testes com o test runner do próprio Node (`node --test`).

## O que aprendi

Uma seção por sprint, escrita ao fim de cada uma (o problema, o que deu errado, o que mudou).

- Sprint 1: _(a preencher)_
