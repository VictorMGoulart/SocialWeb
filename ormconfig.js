module.exports = {
  type: process.env.CONNECTION_TYPE,
  host: process.env.CONNECTION_HOST,
  port: process.env.CONNECTION_PORT,
  username: process.env.CONNECTION_USER,
  password: process.env.CONNECTION_PASSWORD,
  database: process.env.CONNECTION_DATABASE,
  migrations: ['src/database/migrations/*.ts'],
  entities: ['src/entities/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/entities',
  },
};
