This is a boilerplate for a Next.js project with Cloudflare Pages, D1, and Drizzle ORM.

## Getting Started

1. Create a new project on Github using this template
2. Clone the repository to your local machine
3. Install the dependencies using `npm install`
4. [Create a D1 database](https://developers.cloudflare.com/d1/get-started/#2-create-a-database)
5. Rename `.env.example` to `.env` and set the environment variables
6. Rename `wrangler.toml.example` to `wrangler.toml` and set the environment variables
7. Modify the `package.json` file with your database name

```json
{
  "scripts": {
    "db:migrate:local": "wrangler d1 migrations apply my-database-name --local",
    "db:migrate:preview": "wrangler d1 migrations apply --env preview my-preview-database-name --remote",
    "db:migrate:prod": "wrangler d1 migrations apply my-database-name --remote"
  }
}
```

8. Generate db migration files

```shell
pnpm db:generate
```

8. Run db migrations

- local db: `pnpm db:migrate:local`
- preview db: `pnpm db:migrate:preview`
- production db: `pnpm db:migrate:prod`

9. View the database using drizzle studio

- local db: `pnpm db:studio:local`
- preview (remote) db: `pnpm db:studio:preview`
- production (remote) db: `pnpm db:studio:prod`

## Running the app

- Run the app in development mode

```shell
pnpm dev
```

- Run the app in cloudflare pages locally

```shell
pnpm pages:dev
```

## Deploying to Cloudflare

- Deploy to production environment

```shell
pnpm pages:deploy
```

- Deploy to preview environment

```shell
pnpm pages:deploy:preview
```