# Integration Map — Phase 1

**Audit date:** 2026-08-28

## System map

```text
The-Citizens-Record
  └─ public static civic portal
       └─ links / entry point toward Record Workspace

citizens-record
  ├─ React/Vite client
  ├─ Node/Express server
  ├─ MySQL + Drizzle
  ├─ object storage / S3-compatible services
  ├─ authentication / OAuth configuration
  └─ Stripe-related application dependencies

watchtower
  ├─ React/Vite client
  ├─ Node/Express server
  ├─ database / Drizzle
  ├─ consent and owner-scoped workflows
  └─ provider integrations requiring deployment credentials

ProofFlow
  └─ recovery/bootstrap repository only; canonical app source missing

docs
  └─ Mintlify documentation and ecosystem control-center source

The-Citizen-Main-File
  └─ historical static source archive

fear-the-wolves / Prompt Bridge
  ├─ Expo / React Native mobile client
  ├─ Node/Express backend
  ├─ database / Drizzle
  └─ secure OpenAI/BYOK-related assistant flow
```

## Integration inventory

| Integration | Repository | Evidence in Phase 1 | State |
|---|---|---|---|
| GitHub source control | All | All seven repositories accessible | Verified |
| GitHub Actions | Several repos | Workflows/directories and recent CI/deployment commits observed | Configured where present; run status not exhaustively audited |
| GitHub Pages | `The-Citizens-Record` | Recovery status + deployment workflow documentation | Verified configured; live re-check recommended |
| Mintlify | `docs` | `docs.json` explicitly uses Mintlify schema/config | Configured; live deployment unknown |
| MySQL / Drizzle | `citizens-record`, `watchtower`, `fear-the-wolves` | Package manifests and Drizzle config | Application dependency; live database unknown |
| S3-compatible storage | `citizens-record` | AWS S3 SDK dependencies | Configured in source; credentials/provider unknown |
| Authentication / OAuth | `citizens-record`, `watchtower`, `fear-the-wolves` | Recovery docs and env templates | Deployment-dependent |
| Stripe | `citizens-record` | `stripe` package dependency | Presence verified; live account/mode/webhooks unknown |
| OpenAI Platform / BYOK | `fear-the-wolves` | Recovery documentation and secure-key architecture | Credential/provider verification required |
| Privacy/exposure providers | `watchtower` | Optional integration variables named in recovery docs | Not live-verified |
| Forms/email | Static Citizen sources | Contact pages exist; archive docs say contact destination requires configuration | Not verified |
| Analytics | All | No Phase 1 evidence sufficient to claim a configured analytics service | Unknown |
| Custom DNS/domain | Ecosystem | No authoritative DNS configuration accessible | Unknown |

## Critical integration dependencies

1. `The-Citizens-Record` should remain independent of secrets and server infrastructure.
2. `citizens-record` needs a real application host plus database, storage, auth, and payment/provider configuration before it can be production-live.
3. `watchtower` needs approved provider credentials and deployment secret management before live integrations can be claimed.
4. `ProofFlow` cannot be integrated independently until its canonical application source is recovered.
5. `docs` should link to verified production destinations only; unresolved URLs must remain explicitly marked unknown.
6. `fear-the-wolves` requires native mobile release infrastructure and a separately verified backend environment.

## Single points of failure / owner dependencies

- GitHub account ownership is currently central to all seven repositories.
- The exact hosting accounts for the full-stack applications are not visible through the current GitHub authorization.
- Provider credentials and OAuth applications are external account dependencies.
- Stripe configuration is an external financial-service dependency and must not be inferred from package presence.
- DNS ownership is external and currently unverified.

## Security rule

Secret values are not recorded here. Environment-variable names may be documented; actual credentials must remain in the appropriate secret manager.

No integration was changed during Phase 1.
