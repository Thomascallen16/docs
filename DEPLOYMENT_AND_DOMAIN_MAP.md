# Deployment and Domain Map — Phase 1

**Audit date:** 2026-08-28

## Known deployment state

| Product / repository | Intended host | Branch | Production URL | Domain | Phase 1 status |
|---|---|---|---|---|---|
| `The-Citizens-Record` | GitHub Pages | `main` | `https://thomascallen16.github.io/The-Citizens-Record/` | None verified | **Verified configuration; prior workflow success documented** |
| `citizens-record` / Record Workspace | Application host required | `main` | Not established | Not established | **Unknown / deployment-dependent** |
| `watchtower` | Application host required | `main` | Not established | Not established | **Unknown / deployment-dependent** |
| `ProofFlow` | Not currently deployable | `main` | None verified | None | **Blocked by missing application source** |
| `The-Citizen-Main-File` | None; historical archive | `main` | None verified | None | **Archive / non-production** |
| `fear-the-wolves` / Prompt Bridge | Native mobile + managed backend | `main` | No web production URL established | None verified | **Not a Pages project** |
| `docs` | Mintlify documentation source | `main` | Not verified in Phase 1 | None verified | **Configuration exists; live deployment unknown** |

## Verified portal deployment

`The-Citizens-Record` recovery documentation identifies GitHub Pages built from `main` at the repository root, with the live URL above. Its documented audit reported a successful deployment workflow and a prior live-browser verification. The latest repository activity on 2026-08-27 restored the stronger editorial homepage, so the current live page should be re-verified before treating the deployment as identical to the documented baseline.

## Record Workspace boundary

The canonical interactive Workspace is `citizens-record`. Its package scripts build both a Vite client and a bundled Node/Express server, and its dependencies include database, S3, authentication-related, and Stripe components. This architecture cannot be represented faithfully by GitHub Pages alone. The exact production host, database, object storage, authentication provider, Stripe configuration, and live URL must be established from the authorized deployment environment.

## Watchtower boundary

`watchtower` is also a full-stack application source. Its recovery documentation explicitly says GitHub deployment and Pages status could not be inspected with the connected authorization and makes no live deployment claim. Do not infer a live URL from the repository name or workflow history.

## ProofFlow

`ProofFlow` has no application source, package manifest, build system, or verified deployment in the current repository. A previous Pages workflow was added and later removed because it was incorrect. Independent production deployment must wait for recovery of the real application source.

## Historical archive

`The-Citizen-Main-File` is intentionally preserved as a source archive. Its production deployment workflow was removed in a recent commit, consistent with its documented archive role.

## Prompt Bridge

`fear-the-wolves` is an Expo/mobile application with a Node backend. Its recovery status explicitly says GitHub Pages does not apply. Store deployment, backend hosting, signing, and device testing remain external verification items.

## Domain / DNS

No custom production domain or DNS record was verified from the accessible GitHub repository data in Phase 1. Do not change DNS or publish under a custom domain without explicit approval and access to the authoritative DNS provider.

## Operational rule

**Configured ≠ Deployed ≠ Verified Live.**

Phase 1 records only what the repositories and existing recovery documentation support. No deployment, DNS, domain, or hosting configuration was changed.
