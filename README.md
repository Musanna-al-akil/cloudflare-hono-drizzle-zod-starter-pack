# Cloudflare Hono Drizzle Zod starter kit

A starter template for building APIs on Cloudflare Workers with Hono, Drizzle ORM, Zod, and a Neon Postgres database. It includes three example endpoints, two of which read and write a database table, so you can see each piece connected before replacing it with your own code.

## What's included

- [Hono](https://hono.dev/) for routing and middleware
- [Drizzle ORM](https://orm.drizzle.team/) for the schema, queries, and migrations
- [@neondatabase/serverless](https://neon.com/docs/serverless/serverless-driver) as the Postgres driver, which talks to Neon over HTTP
- [Zod](https://zod.dev/) and [drizzle-zod](https://orm.drizzle.team/docs/zod) for request validation
- [Cloudflare Workers](https://workers.cloudflare.com/) and Wrangler for running and deploying
- [Vitest](https://vitest.dev/) for tests
- TypeScript, with `@/` mapped to `src/`
- ESLint with `@antfu/eslint-config`
- Husky and lint-staged for a pre-commit hook
- A GitHub Actions workflow that deploys on every push to `main`

## Project structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml        # Deploys to Cloudflare on push to main
├── .husky/
│   └── pre-commit            # Runs lint-staged, then the test suite
├── .vscode/                  # VS Code workspace settings
├── src/
│   ├── config/               # Empty, for your own config modules
│   ├── db/
│   │   ├── connection.ts     # createDB(): builds a Drizzle client from DB_URL
│   │   └── schema/           # Table definitions and their Zod schemas
│   ├── middlewares/          # Example request logger, not mounted in index.ts
│   ├── routes/               # Hono routers
│   ├── services/             # Database queries called by the routes
│   └── index.ts              # Worker entry point, mounts routers under /api
├── tests/                    # Vitest tests
├── .env.example              # DB_URL for drizzle-kit
├── .dev.vars.example         # Variables for wrangler dev
├── .lintstagedrc             # Runs eslint --fix on staged .ts, .js, .json files
├── drizzle.config.ts         # drizzle-kit config, writes migrations to ./drizzle
├── eslint.config.mjs
├── package.json
├── tsconfig.json             # Maps @/ to src/
├── vitest.config.ts          # Loads the @/ alias for tests
├── wrangler.jsonc            # Worker name, compatibility date, and flags
└── wrangler.jsonc.example    # Template for wrangler.jsonc
```

## Quick start

### 1. Clone and install

```bash
git clone https://github.com/Musanna-al-akil/cloudflare-hono-drizzle-zod-starter-pack.git
cd cloudflare-hono-drizzle-zod-starter-pack
bun install
```

### 2. Set environment variables

The project reads variables from two files. Wrangler loads `.dev.vars` when you run the Worker locally. drizzle-kit loads `.env` when you generate or apply migrations. Both files are in `.gitignore`.

```bash
cp .env.example .env
cp .dev.vars.example .dev.vars
```

Fill in your values:

`.env`

```env
DB_URL=your_database_connection_string_here
```

`.dev.vars`

```env
SECRET_KEY=your_secret_key_here
DB_URL=your_database_connection_string_here
```

### 3. Create the database table

```bash
bun run db:generate
bun run db:migrate
```

The first command writes SQL migration files to `./drizzle` from the schema in `src/db/schema/schema.ts`. The second applies them to the database in `DB_URL`.

### 4. Run locally

```bash
bun run dev
```

The API runs at `http://localhost:8787`. Try the example routes:

```bash
curl http://localhost:8787/api
```

```bash
curl -X POST http://localhost:8787/api/data-from-db -H "Content-Type: application/json" -d '{"name":"Ada","age":36}'
```

```bash
curl http://localhost:8787/api/data-from-db/1
```

### 5. Deploy

Log in to Cloudflare once:

```bash
bunx wrangler login
```

Then deploy:

```bash
bun run deploy
```

Wrangler does not upload `.dev.vars`. Set the production values as secrets:

```bash
bunx wrangler secret put DB_URL
```

```bash
bunx wrangler secret put SECRET_KEY
```

To deploy from GitHub instead, add a `CLOUDFLARE_API_TOKEN` secret to the repository. The workflow in `.github/workflows/deploy.yml` then deploys every push to `main`.

## Commands

| Command               | What it does                              |
| --------------------- | ----------------------------------------- |
| `bun run dev`         | Starts `wrangler dev` with hot reload     |
| `bun run deploy`      | Runs `wrangler deploy --minify`           |
| `bun run lint`        | Runs ESLint on the whole project          |
| `bun run lint:fix`    | Runs ESLint and applies its fixes         |
| `bun run db:generate` | Generates migration files from the schema |
| `bun run db:migrate`  | Applies pending migrations to `DB_URL`    |
| `bun run test`        | Runs Vitest in watch mode                 |

## Environment variables

| Variable     | Used by                                                                  | Example                               |
| ------------ | ------------------------------------------------------------------------ | ------------------------------------- |
| `DB_URL`     | The Worker (`createDB`) and drizzle-kit                                  | `postgresql://user:pass@host:port/db` |
| `SECRET_KEY` | Declared in the `Bindings` type in `src/index.ts`. Nothing reads it yet. | `your-secret-key`                     |

To add a variable, put it in `.dev.vars`, add it to the `Bindings` type in `src/index.ts`, and read it in a handler with `c.env.YOUR_VARIABLE`.

## How a request flows

The `POST /api/data-from-db` route shows how the pieces connect:

1. `src/db/schema/schema.ts` defines `randomTable` with Drizzle. drizzle-zod turns that table into `randomInsertSchema`, a Zod schema.
2. The route in `src/routes/accessDb.routes.ts` parses the JSON body with `randomInsertSchema`. A body without `name` or `age` throws a Zod error.
3. `createDB(c.env)` in `src/db/connection.ts` creates a Drizzle client from `DB_URL` for that request.
4. `insertRandom` in `src/services/random.service.ts` runs the insert and returns the new row's id.

When you add a column to the table, the Zod schema picks it up the next time the code runs. Run `bun run db:generate` and `bun run db:migrate` to update the database as well.

## Using a different database

The project uses Neon's HTTP driver (`drizzle-orm/neon-http`). To use another Postgres host, change the driver in `src/db/connection.ts`. The `pg` package is already installed, so `drizzle-orm/node-postgres` works without new dependencies.

To switch to MySQL, SQLite, or another engine, you also need to change the `dialect` in `drizzle.config.ts` and rewrite `src/db/schema/schema.ts`, which imports its column types from `drizzle-orm/pg-core`. Drizzle's docs list the [supported databases and drivers](https://orm.drizzle.team/docs/get-started).

## Testing

```bash
bun run test
```

Tests call the app with `app.request()`, so they don't start a server. See `tests/routes.test.ts` for an example. The pre-commit hook runs `eslint --fix` on staged files and then runs the test suite once. A failing test blocks the commit.

## Contributing

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit your changes.
4. Push the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

MIT. See [LICENSE](./LICENSE).

---

Built with ❤️ by [Musanna Al Akil](https://github.com/Musanna-al-akil). For questions or bugs, [open an issue](https://github.com/Musanna-al-akil/cloudflare-hono-drizzle-zod-starter-pack/issues).
