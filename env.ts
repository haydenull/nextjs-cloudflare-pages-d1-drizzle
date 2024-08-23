import { loadEnvConfig } from '@next/env'
import { createEnv } from '@t3-oss/env-nextjs'
import z from 'zod'

loadEnvConfig(process.cwd())

export const env = createEnv({
  server: {
    CLOUDFLARE_ACCOUNT_ID: z.string(),
    CLOUDFLARE_D1_TOKEN: z.string(),
    CLOUDFLARE_DATABASE_ID: z.string(),
    CLOUDFLARE_PREVIEW_DATABASE_ID: z.string(),
    DB_LOCAL_PATH: z.string().optional(),
    NODE_ENV: z.enum(['development', 'preview', 'production']).default('development'),
  },
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },
  runtimeEnv: {
    CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
    CLOUDFLARE_D1_TOKEN: process.env.CLOUDFLARE_D1_TOKEN,
    CLOUDFLARE_DATABASE_ID: process.env.CLOUDFLARE_DATABASE_ID,
    CLOUDFLARE_PREVIEW_DATABASE_ID: process.env.CLOUDFLARE_PREVIEW_DATABASE_ID,
    DB_LOCAL_PATH: process.env.DB_LOCAL_PATH,
    NODE_ENV: process.env.NODE_ENV,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
})
