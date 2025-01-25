# Cloudflare Hono Drizzle Zod Starter Kit

A TypeScript starter template for building Cloudflare Workers using Hono framework with Drizzle ORM and Zod validation.

## Features

- 🔥 [Hono](https://hono.dev/) - Fast, Lightweight, Web-standards web framework
- 🔧 [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM for SQL databases
- ✨ [Zod](https://zod.dev/) - TypeScript-first schema validation
- 👷 [Cloudflare Workers](https://workers.cloudflare.com/) - Serverless platform
- 📘 TypeScript support
- 🧪 Jest for testing
- 🎨 ESLint + Prettier for code formatting `@antfu/eslint-config`
- 🔄 Husky + lint-staged for git hooks

## Project Structure

```.
├── .github/        # GitHub-specific configurations 
│   └── workflows/  # Automation workflows for testing, deployment, etc.
├── .husky/         # Git hooks (e.g., pre-commit)
├── .vscode/        # VS Code workspace-specific settings
├── src/ 
│ ├── config/       # Configuration files
│ ├── db/           # Database related code
│ │ └── schema/     # Drizzle schema definitions
│ ├── middlewares/  # Hono middlewares
│ ├── routes/       # API routes
│ ├── services/     # Business logic
│ └── index.ts      # Entry point
├── test/           # Test files
├── .env.example    # Environment variables
|── .dev.vars.example # Environment variables example
├── .lintstagedrc   # Configuration for lint-staged (pre-commit).
├── drizzle.config.ts # Drizzle configuration
|── eslint.config.mjs # eslint configuration
├── package.json   # Project metadata and dependencies.
├── tsconfig.json  # TypeScript configuration
└── wrangler.toml  # Cloudflare Workers configuration
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/cloudflare-hono-drizzle-zod-starter-pack
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Setting up environment files

   - Copy the example files to create your environment files:

     ```bash
     cp .env.example .env.example
     cp .dev.vars.example .dev.vars
     ```

   - Update the values in both files:
   - `.env` requires:

     ```
     DB_URL=your_database_connection_url
     ```

   - `.dev.vars` requires:
     ```
     SECRET_KEY=your_secret_key
     DB_URL=your_database_connection_url
     ```

4. Run development server:

   ```bash
   bun run dev
   ```

5. Deploy to Cloudflare Workers:
   ```bash
   bunx wrangler login
   bun run deploy
   ```

## Available Scripts

- `bun run dev` - Start development server
- `bun run deploy` - Deploy to Cloudflare Workers
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Fix ESLint errors
- `bun run db:generate` - Generate Drizzle migrations
- `bun run db:migrate` - Run database migrations

## Environment Variables

Required environment variables in `.env`:

```
DB_URL=your_database_url
```

## License

[MIT](./LICENSE) License &copy; 2025-PRESENT [Musanna AL Akil](https://github.com/Musanna-al-akil)
