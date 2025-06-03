<!-- wieloarchitekturowe obrazy (amd64, arm64) -->

docker buildx create --use

cd backend/quiz-service
docker buildx build --platform linux/amd64,linux/arm64 -t quiz-service:latest .

cd ../auth-service
docker buildx build --platform linux/amd64,linux/arm64 -t auth-service:latest .

cd ../user-service
docker buildx build --platform linux/amd64,linux/arm64 -t user-service:latest .

cd ../stats-service
docker buildx build --platform linux/amd64,linux/arm64 -t stats-service:latest .
