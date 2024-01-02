FROM node:16-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=build-stage /app/build ./build
COPY package*.json ./
RUN npm install --only=production
COPY . .
