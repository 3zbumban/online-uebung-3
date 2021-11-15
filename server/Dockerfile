FROM node:14

ENV NODE_ENV=production
# dadurch werden dev deps ausgelassen

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# RUN npm run setup:db
# devdeps werden aber hier benötigt -> npx nutzen oder als devDep inst.
# RUN npx sequelize-cli db:create
# RUN npx sequelize-cli db:migrate

EXPOSE 3000

CMD ["node", "./src/app.js"]