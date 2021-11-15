FROM node:14 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY ./ .

RUN npm run build

## production

# FROM nginx as production-stage

# RUN mkdir /app

# COPY --from=build-stage /app/dist /app

# COPY nginx.conf /etc/nginx/nginx.conf
