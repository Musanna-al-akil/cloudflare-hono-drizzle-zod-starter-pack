# Cloudflare Hono Drizzle Zod Starter Kit

A modern, production-ready starter template for building fast and scalable APIs on Cloudflare Workers. This kit combines the power of Hono framework, Drizzle ORM, and Zod validation to give you everything you need to build robust serverless applications.

## ✨ What's Included

This starter kit comes with a carefully curated stack of modern tools:

- **🚀 [Hono](https://hono.dev/)** - Lightning-fast web framework with excellent TypeScript support
- **🗄️ [Drizzle ORM](https://orm.drizzle.team/)** - Type-safe database operations with SQL-like syntax
- **🐘 [neondatabase/serverless](https://neon.com/docs/serverless/serverless-driver)** - Serverless PostgreSQL database package with automatic scaling
- **✅ [Zod](https://zod.dev/)** - Runtime type validation and schema definition
- **☁️ [Cloudflare Workers](https://workers.cloudflare.com/)** - Global edge computing platform
- **🧪 [Vitest](https://vitest.dev/)** - Fast unit testing framework
- **🎯 TypeScript** - Full type safety throughout your application
- **🎨 Code Quality** - ESLint + Prettier with `@antfu/eslint-config`
- **🔒 Git Hooks** - Husky + lint-staged for automated code quality checks

## 📁 Project Structure

```
.
├── .github/             # GitHub-specific configurations 
│   └── workflows/       # Automation workflows for testing, deployment, etc.
├── .husky/              # Git hooks (e.g., pre-commit)
├── .vscode/             # VS Code workspace-specific settings
├── src/ 
│   ├── config/          # Configuration files
│   ├── db/              # Database related code
│   │   ├── connection.ts # Database connection setup
│   │   └── schema/      # Drizzle schema definitions
│   ├── middlewares/     # Hono middlewares
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   └── index.ts         # Entry point
├── tests/               # Test files
├── .env.example         # Environment variables template
├── .dev.vars.example    # Development environment variables template
├── .lintstagedrc        # Configuration for lint-staged (pre-commit)
├── drizzle.config.ts    # Drizzle configuration
├── eslint.config.mjs    # ESLint configuration
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
└── wrangler.toml        # Cloudflare Workers configuration
```

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/Musanna-al-akil/cloudflare-hono-drizzle-zod-starter-pack.git

# Navigate to the project directory
cd cloudflare-hono-drizzle-zod-starter-pack

# Install dependencies
bun install
```

### 2. Environment Setup

Create your environment files by copying the examples:

```bash
# Copy environment files
cp .env.example .env
cp .dev.vars.example .dev.vars
```

Then update the files with your actual values:

**`.env` file:**
```env
DB_URL=your_database_connection_string_here
```

**`.dev.vars` file:**
```env
SECRET_KEY=your_secret_key_here
DB_URL=your_database_connection_string_here
```

### 3. Start Development

```bash
# Start the development server
bun run dev
```

Your API will be available at `http://localhost:8787`

### 4. Deploy to Production

```bash
# Login to Cloudflare (first time only)
bunx wrangler login

# Deploy to Cloudflare Workers
bun run deploy
```

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with hot reload |
| `bun run deploy` | Deploy to Cloudflare Workers |
| `bun run lint` | Check code for style and quality issues |
| `bun run lint:fix` | Automatically fix linting errors |
| `bun run db:generate` | Generate database migrations |
| `bun run db:migrate` | Apply database migrations |

## 🔧 Configuration

### Environment Variables

The following environment variables are required:

| Variable | Description | Example |
|----------|-------------|---------|
| `DB_URL` | Database connection string | `postgresql://user:pass@host:port/db` |
| `SECRET_KEY` | Application secret key | `your-super-secret-key-here` |

### Database Setup

This starter uses Drizzle ORM for database operations and is currently configured with **Neon** (PostgreSQL), but can be easily configured to work with any database that Drizzle supports.

**Currently configured for:**
- **Neon** - Serverless PostgreSQL with automatic scaling

**Other supported databases:**
- PostgreSQL, MySQL, SQLite, SQL Server, and more

To set up your database:

1. **Generate migrations:**
   ```bash
   bun run db:generate
   ```

2. **Apply migrations:**
   ```bash
   bun run db:migrate
   ```

## 🧪 Testing

Run your test suite with:

```bash
bun test
```


## 📚 Key Features Explained

### Hono Framework
- **Fast**: Built for speed with minimal overhead
- **TypeScript-first**: Excellent TypeScript support out of the box
- **Middleware support**: Easy to extend with custom middleware
- **Multiple platforms**: Works on Cloudflare Workers, Deno, Bun, and Node.js

### Drizzle ORM
- **Type-safe**: Full TypeScript support with automatic type inference
- **SQL-like syntax**: Familiar query syntax that's easy to learn
- **Migration system**: Version-controlled database schema changes
- **Multiple databases**: Support for PostgreSQL, MySQL, SQLite, and more

### Zod Validation
- **Runtime validation**: Ensure data integrity at runtime
- **Type inference**: Automatically generate TypeScript types from schemas
- **Error handling**: Detailed error messages for validation failures
- **Schema composition**: Build complex schemas from simple ones

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

**Built with ❤️ by [Musanna AL Akil](https://github.com/Musanna-al-akil)**

For questions, issues, or contributions, please [open an issue](https://github.com/Musanna-al-akil/cloudflare-hono-drizzle-zod-starter-pack/issues) on GitHub.
