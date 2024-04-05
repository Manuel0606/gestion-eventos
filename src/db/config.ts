export const db = {
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.PORT || '5432', 10),
  database: process.env.DB_DATABASE || 'gestion_eventos',
};