import { Pool } from 'pg'
import { db } from "./config";
import 'dotenv/config'

export const pool = new Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.port,
  database: db.database,
});

pool.on('connect', () => console.log('DB connected'))