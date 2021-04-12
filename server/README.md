# server

## sequelize mit sequelize-cli

1. datei erstellen die sagt wohin ordner sollen `.sequelizerc`
```js
// .sequelizerc
const path = require('path');

module.exports = {
  'config': path.resolve("src", 'config', 'database.json'),
  'models-path': path.resolve("src", "db", 'models'),
  'seeders-path': path.resolve("src", "db", 'seeders'),
  'migrations-path': path.resolve("src", "db", 'migrations')
};
```

```sh
npm i -g sequelize-cli
# instaliere sequelize-cli global via npm

sequelize init
# initialisiert ordner an orten wo oben (.sequelizerc) gennant

sequelize model:create --name <der_name> --attributes name:string,alter:number
# müssen tabellen restellt werden (migriert)

sequelize db:migrate:status
# mig status abfragen

sequelize db:migrate
# mig druchführen

sequelize db:migrate:undo:all
# rückgänging machen

sequelize db:migrate:undo
# nur letze migration rückgängig machen

## seeding:

sequelize seed:create --name <seed-name>

sequelize db:seed:all
# seeds migrieren

sequelize db:seed:undo:all

```
