docker-compose up -d  
echo "Docker Compose up"
npx prisma migrate dev --name init
echo "PRISMA MIGRATED"
npm run test
echo "RUN TEST"
docker-compose down
echo "DOCKER COMPOSE DOWN"