# Ecosystem Audit — 2026-08-29

## Scope

This audit covers the seven repositories visible through the connected GitHub account at the time of review:

- `The-Citizens-Record` — canonical public static portal
- `citizens-record` — canonical full-stack application source
- `docs` — canonical ecosystem documentation/control center
- `ProofFlow` — reconstruction/recovery candidate
- `watchtower` — supporting full-stack application
- `fear-the-wolves` — Prompt Bridge mobile application
- `The-Citizen-Main-File` — historical source archive

No repository was deleted, made private, force-rewritten, or treated as recovered when the source record says otherwise.

## Actions completed

### Security

- Added Gitleaks repository-history scans to `The-Citizens-Record`, `citizens-record`, `docs`, `fear-the-wolves`, `watchtower`, and the ProofFlow reconstruction branch.
- Existing environment templates were reviewed and contain variable names/placeholders rather than credential values in the inspected files.
- No obvious OpenAI, GitHub, or Stripe secret-token pattern was returned by the targeted repository searches performed during this audit.
- A clean targeted search is not equivalent to proof that historical credentials never existed. The Gitleaks workflows provide the ongoing control; any actual credential finding must be revoked/rotated rather than merely deleted from source.

### CI / deployment correctness

- `The-Citizens-Record` retains GitHub Pages deployment because it is a static public site and already has a real validation/build/deploy pipeline.
- `citizens-record` retains full-stack CI and is not treated as a GitHub Pages application. Its latest recorded external status is successful through the configured Railway deployment integration.
- `docs` placeholder CI was replaced with deterministic validation of `docs.json`, navigation pages, favicon, and configured logos.
- `watchtower` now has reproducible typecheck/test/build CI.
- `fear-the-wolves` no longer attempts to deploy a server bundle to GitHub Pages. Its workflow now validates typecheck/lint/tests/server build and performs an Expo web-export smoke check. Native production release remains a store/build-signing process rather than a Pages deployment.
- ProofFlow reconstruction CI and security scanning are confined to the reconstruction branch until reviewed.

## Deployment disposition

| Project | Disposition | Why |
|---|---|---|
| The-Citizens-Record | Deploy/maintain | Static production portal; Pages workflow exists |
| citizens-record | Deploy/maintain | Full-stack source; external Railway status reported successful |
| docs | Deploy/maintain | Documentation source; deployment provider still requires live verification |
| watchtower | Ready for CI validation; production provider pending | Full-stack provider configuration is not verifiable from repository source alone |
| fear-the-wolves / Prompt Bridge | Native release preparation | Requires valid production credentials, signing, device testing, and store-console actions |
| ProofFlow | Reconstruction in review | Original application source was not recovered |
| The-Citizen-Main-File | Archive only | Historical source; not a production runtime |

## Hard blockers that require account/operator access

1. Production secrets and secret-store configuration cannot be inspected or invented through repository source.
2. Stripe live/test Price ID and webhook configuration must be verified in the Stripe account before billing is declared operational.
3. Native Apple/Google signing, device testing, and store submission require the appropriate developer accounts and credentials.
4. Deployment-provider dashboards, domains, DNS, environment variables, databases, and object-storage configuration cannot be truthfully marked verified from GitHub source alone.
5. ProofFlow's missing managed-project source remains a reconstruction boundary; reconstructed code must never be represented as the lost original.

## Verification standard

A repository is not marked production-ready solely because a source tree looks correct. The final standard is:

**Clean → Validated → Deployed → Verified Live → Maintainable.**

Where a live deployment or external account cannot be inspected, this audit records the project as **unverified** rather than guessing.
