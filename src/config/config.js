// import promise from "bluebird";
// import pgPromise from "pg-promise";

// const options = {
//   promiseLib: promise,
//   query: (e) => {}
// };

// const pgp = pgPromise(options);
// const databaseConfig = {
//   host: "127.0.0.1",
//   port: 5432,
//   database: "sopa-letras",
//   user: "postgres",
//   password: "Cesar28457781"
// };

// const db = pgp(databaseConfig);

// export default db;

import pgPromise from 'pg-promise';

const pgp = pgPromise();

const databaseConfig = {
    host: '127.0.0.1',
    port: 5432,
    database: 'sopa_letrasv2',
    user: 'postgres',
    password: 'Cesar28457781'
};

const db = pgp(databaseConfig);

export default db;

