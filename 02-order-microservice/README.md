# Order Microservice

Este projeto representa um **microsserviço de pedidos (Order Service)**, desenvolvido como **teste técnico sênior**, com foco em **Clean Architecture**, **boas práticas de desenvolvimento** e **manutenção futura**.  

O serviço é implementado em **Node.js (NestJS)**, expõe um endpoint **GraphQL** para consulta de pedidos e utiliza **PostgreSQL** e **Redis** para persistência e cache.

---

## 🚀 Tecnologias utilizadas

- **Node.js / NestJS** – Backend estruturado em Clean Architecture  
- **GraphQL (Apollo)** – Endpoint para consulta de pedidos  
- **PostgreSQL** – Banco relacional para armazenamento de pedidos  
- **Redis** – Cache para otimização de consultas  
- **Docker / Docker Compose** – Contêinerização do ambiente  
- **Jest** – Testes unitários  

## 🧩 Arquitetura e decisões

### Separação de camadas
O projeto segue o princípio de **Clean Architecture**, com dependências unidirecionais:

- **domain** – Entidades e regras de negócio puras  
- **application** – Casos de uso e orquestração da lógica  
- **infra** – Implementações técnicas (grapql, banco, cache, etc.)  

### Benefícios dessa abordagem

- Facilidade de manutenção e evolução  
- Independência do framework ou banco de dados  
- Testabilidade completa de regras de negócio  
- Código previsível e modular  

---

## 🐳 Docker

Para rodar a aplicação localmente, use:

```bash
docker compose up -d
```
## 🛠 Banco de Dados

O banco de dados PostgreSQL já pode ser **populado automaticamente** com dados iniciais usando a **seed**.  

- O arquivo de seed está localizado em: `prisma/seeds/seed.ts`  
- Ele insere registros de teste no banco para facilitar o desenvolvimento e testes de requests  

### 🔗 Conexão para testes

Após rodar os containers com Docker (`docker compose up -d`), você pode se conectar ao banco PostgreSQL na configuração do container para testar requests à API GraphQL:

- **Host:** localhost  
- **Porta:** padrão do container PostgreSQL (definida no `docker-compose.yml`)  
- **Usuário/Senha:** conforme configuração do container  

Com o banco populado, é possível fazer consultas na API, como:

```graphql
query {
  order(id: "123") {
    id
    createdAt
    updatedAt
    total
    items {
      productId
      name
      price
      quantity
      total
    }
  }
}

