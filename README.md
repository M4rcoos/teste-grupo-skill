# 📦 Teste Técnico – Grupo Skill

Este repositório contém a entrega do teste técnico para a vaga de Programador Sênior, com foco em Node.js, arquitetura distribuída e boas práticas de backend.

O objetivo do projeto é demonstrar entendimento de arquitetura, integração entre serviços, uso de mensageria, cache, banco de dados e conceitos como Saga Pattern e operadores Kubernetes, não sendo uma solução produtiva completa.

---

## 🧱 Estrutura do Projeto

O repositório está organizado da seguinte forma:

- **01-diagrama**  
  Diagrama de componentes em PlantUML representando a integração entre React, Redux Toolkit, Apollo Client, NestJS, PostgreSQL, Redis, RabbitMQ e Kubernetes.

- **02-order-microservice**  
  Microserviço em Node.js (NestJS) expondo um endpoint GraphQL `order(id)`, com busca de dados no PostgreSQL e uso de cache com Redis.

- **03-operator**  
  Exemplo de um operator Kubernetes simplificado, responsável por observar um CRD `PaymentJob` e criar um Job que consome mensagens de RabbitMQ e grava dados no PostgreSQL.

- **04-backup**  
  Script em Node.js para criação de snapshots incrementais de um cluster Aurora, exportação para S3 e política de retenção de 30 dias, utilizando recursos nativos da AWS.

- **05-cancel-order**  
  Modelagem textual de um diagrama de sequência para cancelamento de transação utilizando Saga Pattern e ações compensatórias baseadas em eventos.

---

## 🧠 Considerações Técnicas

- O uso de Redis foi aplicado como camada de cache antes do acesso ao banco de dados.
- A comunicação entre serviços é orientada a eventos, utilizando RabbitMQ.
- O cancelamento de transações foi modelado com Saga Pattern.
- Busco abraçar uma boa oportunidade e me destacar na carreira como dev.
- Não uso Kubernets no meu dia a dia, mais sou um dev focado em aprendizado e flexivel para novas tecnologias

- No meu dia a dia crio scripts em python para executar tarefas.  



## 👤 Sobre mim

Sou desenvolvedor backend com foco em Node.js, NestJS e arquitetura de sistemas. Tenho experiência prática com APIs, bancos de dados, e REDIS, e estou em constante evolução nos temas de clean archtecture, sistemas distribuidos e cloud.

Durante este teste, aprofundei meus estudos em Kubernetes, especialmente no conceito de operators, buscando compreender seu funcionamento e aplicação prática. Tenho grande interesse em aprender, evoluir tecnicamente e contribuir com soluções bem estruturadas.



## 📌 Observação Final

Este projeto foi desenvolvido com foco em clareza arquitetural e demonstração de conhecimento técnico, priorizando entendimento dos conceitos solicitados no teste.
