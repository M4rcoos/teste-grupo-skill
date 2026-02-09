#!/bin/sh
set -e

echo "Aguardando PostgreSQL..."
sleep 5

# Gerar Prisma client
npx prisma generate

# Executar migrations
npx prisma migrate deploy

# Seed opcional
npm run seed

# Rodar API
exec npm start
