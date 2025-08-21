docker compose up -d  
echo "Docker Compose up"
./wait-for-it.sh "localhost:5432"  -- echo '🟢 - Database is ready!'
npx prisma migrate dev --name init
echo "PRISMA MIGRATED"
npm run test
echo "RUN TEST"
docker-compose down
echo "DOCKER COMPOSE DOWN"