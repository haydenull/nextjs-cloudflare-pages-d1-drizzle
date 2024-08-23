import { defineConfig } from 'drizzle-kit'

import { env } from '@/env'

export default env.DB_LOCAL_PATH
  ? defineConfig({
      schema: './db/schema.ts',
      dialect: 'sqlite',
      dbCredentials: {
        url: env.DB_LOCAL_PATH,
      },
    })
  : defineConfig({
      schema: './db/schema.ts',
      out: './db/migrations',
      dialect: 'sqlite',
      driver: 'd1-http',
      dbCredentials: {
        accountId: env.CLOUDFLARE_ACCOUNT_ID,
        databaseId: env.NODE_ENV === 'preview' ? env.CLOUDFLARE_PREVIEW_DATABASE_ID : env.CLOUDFLARE_DATABASE_ID,
        token: env.CLOUDFLARE_D1_TOKEN,
      },
    })
