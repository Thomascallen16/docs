# Repository Inventory — Phase 1

**Audit date:** 2026-08-28
**Scope:** All repositories visible through the connected GitHub account.
**Rule:** Phase 1 only. No destructive changes performed.

## Inventory

| Repository | Visibility | Size | Default | Latest meaningful activity | Stack / purpose | Disposition |
|---|---|---:|---|---|---|---|
| `The-Citizens-Record` | Public | 160 KB | `main` | 2026-08-27 | Static HTML/CSS/JS civic portal; Node-native validation/build scripts | KEEP AND DEPLOY — canonical public portal |
| `docs` | Public | 50 KB | `main` | 2026-08-27 | Mintlify documentation source; ecosystem operating documentation | KEEP AND CONSOLIDATE — canonical documentation/control center |
| `ProofFlow` | Public | 9 KB | `main` | 2026-08-27 | Bootstrap/recovery documentation; no application source or package manifest | QUARANTINE / RECOVERY — recover canonical source before deployment |
| `The-Citizen-Main-File` | Public | 31 KB | `main` | 2026-08-27 | Historical static Citizen's Record source archive | ARCHIVE — not production |
| `fear-the-wolves` | Public | 1.2 MB | `main` | 2026-08-25 | Expo 54 / React Native / Node backend; Prompt Bridge mobile product | KEEP — separate product |
| `citizens-record` | Public | 2.1 MB | `main` | 2026-08-27 | React/Vite/Express full-stack Record Workspace with DB/auth/storage/Stripe dependencies | KEEP AND DEPLOY — canonical application source |
| `watchtower` | Public | 275 KB | `main` | 2026-08-27 | React/Vite/Express full-stack privacy/exposure MVP | KEEP — application component/product |

## Verified facts

- The connected account exposes exactly seven repositories at audit time.
- `The-Citizens-Record` is explicitly documented as the permanent civic portal and has a verified GitHub Pages workflow baseline.
- `citizens-record` is explicitly documented as the canonical full-stack Record Workspace source and is not a GitHub Pages runtime.
- `ProofFlow` explicitly states that its actual application source is missing from the repository.
- `The-Citizen-Main-File` is explicitly marked as a legacy/static source archive and its production deployment workflow was removed.
- `docs` is explicitly designated the canonical ecosystem documentation source.
- `fear-the-wolves` is a separate Expo/mobile project named Prompt Bridge in its recovery documentation.
- `watchtower` is a separate full-stack application source whose production provider integrations remain deployment-dependent.

## Branch health observed

- `The-Citizens-Record`: `main`, `backup/pre-manus-export-2026-08-19`, `setup/github-configuration`.
- `docs`: `main` only.
- `ProofFlow`: `main` only.
- `The-Citizen-Main-File`: `main` only.
- `fear-the-wolves`: `main` only.
- `citizens-record`: `main`, `pro-se-compass-release-prep`.
- `watchtower`: `main`, `feature/android-agent`.

No branch was deleted or modified during Phase 1.

## Documentation / build observations

### The-Citizens-Record
- README and recovery documentation exist.
- `package.json` has no runtime dependency set; it provides `validate`, `test`, `build:pages`, and `check` scripts.
- Node engine is `>=20`.
- No environment variables are required.
- Recovery status reports six Node-native tests passing and fourteen production assets staged during its prior audit.

### docs
- README, AGENTS.md, LICENSE, architecture/status documents, and Mintlify configuration exist.
- `docs.json` identifies Mintlify as the documentation framework and links to the canonical Citizen portal.
- Exact live docs deployment was not verified in this Phase 1 audit.

### ProofFlow
- Repository contains recovery/status documentation and a GitHub Actions directory, but no application source, package manifest, lockfile, build command, or tests.
- No live deployment was verified.

### The-Citizen-Main-File
- Static HTML/CSS/JS source and assets are present.
- Recovery status identifies it as a preserved source archive with no package/build/test requirements.
- No production deployment is claimed.

### fear-the-wolves / Prompt Bridge
- Expo `~54.0.37`, React Native `0.81.5`, Expo Router, Express, Drizzle, and Vitest are present.
- Recovery status reports `pnpm check`, `pnpm lint`, `pnpm test`, and `pnpm build` passing at the audit baseline, with one authentication/logout test skipped.
- Native store release, credentials, device testing, and backend deployment remain external verification items.

### citizens-record
- Full-stack Node/React/Vite/Express architecture.
- Uses MySQL/Drizzle, S3 SDKs, authentication/OAuth-related configuration, and Stripe dependencies.
- Scripts include development, production build/start, TypeScript check, Vitest tests, and database migration generation/application.
- It is not suitable for GitHub Pages as an application runtime.

### watchtower
- Full-stack application structure with client, server/database configuration, API documentation, security documentation, and environment template.
- Recovery status reports local check/test/build success at its audit baseline.
- Provider integrations and production deployment remain unverified.

## Phase 1 gaps requiring later inspection

The connector did not expose enough repository-tree detail in one response to enumerate every binary/large/generated file, dependency vulnerability, Git-history credential exposure, workflow run, or deployment provider setting. Those are Phase 2/verification tasks, not assumed clean.

## Disposition summary

**Canonical public product:** `The-Citizens-Record`

**Canonical interactive application:** `citizens-record`

**Canonical documentation/control center:** `docs`

**Supporting application:** `watchtower`

**Separate product:** `fear-the-wolves` / Prompt Bridge

**Recovery candidate:** `ProofFlow`

**Historical archive:** `The-Citizen-Main-File`

No repository is approved for deletion by this inventory.
