#!/bin/sh
set -e

echo "Aguardando PostgreSQL..."
sleep 5

npx prisma migrate deploy

npm run seed

exec npm run start:prod

