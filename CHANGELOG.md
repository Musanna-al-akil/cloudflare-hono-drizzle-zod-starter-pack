# Changelog

All notable changes to this project will be documented in this file.

## [0.3.0] - 2026-10-26

### Added
- updated to Hono v4.13.14 web framework
- updated to Drizzle ORM v0.45.4 with PostgreSQL support
- updated to ESLint v10 and @antfu/eslint-config v10
- updated to Vitest v5
- updated to @cloudflare/workers-types v5
- added vite v8 (required peer dependency of Vitest v5)

### Changed
- replaced wrangler.toml / wrangler.toml.example with wrangler.jsonc / wrangler.jsonc.example
- compatibility_date updated to 2026-10-19
- tsconfig `types` now uses `@cloudflare/workers-types` (v5 removed the dated entrypoints)
- eslint `perfectionist/sort-imports` option `tsconfigRootDir` renamed to `tsconfig.rootDir`
- deploy workflow uses actions/checkout v7 and cloudflare/wrangler-action v4
- requires Node ^22.22.1 || ^24.0.0 || >=26.0.0 (lint-staged v17, Vitest v5)

### Updated Dependencies
- @hono/zod-validator, @neondatabase/serverless, drizzle-orm, hono, pg, zod
- @antfu/eslint-config, @cloudflare/workers-types, @types/pg, dotenv, drizzle-kit, eslint, eslint-plugin-format, lint-staged, vite-tsconfig-paths, vitest, wrangler

## [0.2.0] - 2025-08-08

### Added
- updated to Hono v4.8.12 web framework
- updated to Drizzle ORM v0.44.4 with PostgreSQL support
- updated to Zod v4
- updated to wrangler v4

### Updated Dependencies
- @hono/zod-validator, @neondatabase/serverless, drizzle-orm, drizzle-zod, hono, pg, zod
- @antfu/eslint-config, @cloudflare/workers-types, @types/jest, @types/pg, drizzle-kit, eslint, eslint-plugin-format, husky, i, lint-staged, vite-tsconfig-paths, vitest, wrangler

