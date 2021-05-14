module.exports = {
   "type": "mysql",
   "url": process.env.DATABASE_URL,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/models/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}