# Risks and Blockers — Phase 1

**Audit date:** 2026-08-28

## Highest-risk items

| Priority | Repository / area | Risk / blocker | Evidence | Phase 1 action |
|---|---|---|---|---|
| P0 | `ProofFlow` | Canonical application source is missing | Recovery status explicitly says the repository is only a bootstrap/recovery repository | Recover source before deployment or deletion decisions |
| P0 | `citizens-record` | Production runtime is not established | Full-stack architecture requires server, DB, storage, auth/provider configuration | Identify authorized hosting environment and verify it |
| P1 | `watchtower` | Live deployment/provider state is unknown | Recovery status says deployment metadata could not be inspected | Verify hosting and approved provider integrations |
| P1 | `The-Citizens-Record` | Current live deployment should be re-checked after recent homepage commits | Recovery docs verify an earlier live baseline; newer commits changed the portal | Perform non-destructive live smoke test |
| P1 | Public repositories | Potential sensitive material requires repository-wide scan | All repos are public; some applications handle auth, legal/research, provider, or personal-data concepts | Scan current tree and history before cleanup/public release |
| P1 | `citizens-record` / `watchtower` / Prompt Bridge | Secrets/configuration are external and must not be inferred | Env templates and recovery docs name variables but do not expose values | Verify secret names only; never print values |
| P2 | `fear-the-wolves` | Native release not complete | Recovery status lists signing, device testing, store metadata, and a skipped auth/logout test | Treat as separate product; do not mix with two-site launch surface |
| P2 | `docs` | Live docs deployment not verified | Mintlify config exists but provider status is not exposed | Verify deployment separately |
| P2 | Legacy repositories | Duplicate/overlap could cause future drift | `The-Citizen-Main-File` overlaps historically with Citizen portal | Preserve archive; do not merge/delete without comparison |

## Security concerns

- All seven repositories are public according to GitHub metadata. This is not itself a vulnerability, but it increases the importance of scanning for accidentally committed secrets and private material.
- `citizens-record` contains dependencies and configuration patterns for database, object storage, authentication, and Stripe. Production secret exposure must be checked before further public development.
- `watchtower` contains privacy/exposure functionality and provider credentials in its deployment model. Its public source must not expose user data or secret values.
- Prompt Bridge documents secure server-side handling of user-managed OpenAI keys. A previously supplied Expo credential was identified by its recovery document as invalid for the intended OpenAI service and must not be reused as an API key.
- No credential value was printed or modified during Phase 1.

## Dependency/security status

A full package vulnerability audit was not executed in Phase 1. Existing recovery documents report successful local builds/checks for several projects, but passing builds do not prove dependency security or production security.

## Destructive-action status

No repositories, branches, files, deployments, domains, databases, or credentials were deleted, rewritten, rotated, or revoked.

## Unknowns that must remain unknown

- Exact production host for the Record Workspace.
- Exact production host/provider for Watchtower.
- Exact live docs deployment.
- Current DNS configuration.
- Current Stripe mode/account/webhook state.
- Current provider OAuth approvals and API scopes.
- Whether any old branch contains unique unreconciled work.
- Whether any repository history contains credentials requiring revocation or history rewriting.

These are verification targets, not assumptions.
