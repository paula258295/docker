FROM node:18-alpine AS build

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app /app

ENV NODE_ENV=production

EXPOSE 5001

CMD ["node", "app.js"]