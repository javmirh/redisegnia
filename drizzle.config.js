import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'***REMOVED***neondb_owner:npg_uTA2mif7eIHK@ep-square-sky-a4pomlr9.us-east-1.aws.neon.tech/redisegna?sslmode=require',
  },
});