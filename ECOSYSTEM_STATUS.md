# Accountability Ecosystem — Current Status

**Status date:** 2026-08-27

## Architecture

The ecosystem has two user-facing products:

1. **The Citizen's Record** — the Permanent Civic Portal. Static, public, free, account-free, and source-oriented.
2. **The Record Workspace** — the interactive Accountability Platform. This is the application environment for records, evidence, provenance, verification, chronology, authority mapping, records requests, and related tools.

Supporting repositories are not additional public websites. They are source, infrastructure, documentation, archive, or separate-product repositories.

## Repository map

| Repository | Role | Current status |
| --- | --- | --- |
| `The-Citizens-Record` | Permanent Civic Portal / canonical static site | **Canonical / deployable** |
| `citizens-record` | Record Workspace / full-stack application | **Canonical application source; deployment-dependent** |
| `ProofFlow` | Evidence and provenance instrument | **Blocked for independent production deployment; source recovery required** |
| `watchtower` | Consent-based privacy/exposure instrument | **Application source; provider integrations remain deployment-dependent** |
| `docs` | Ecosystem architecture and operating documentation | **Canonical documentation** |
| `The-Citizen-Main-File` | Historical static source archive | **Preserve; not production** |
| `fear-the-wolves` | Separate mobile/Expo project | **Separate product; not part of the two-site launch surface** |

## Deployment truth

### Permanent Civic Portal

The canonical portal has a GitHub Pages deployment workflow in `The-Citizens-Record`.

The latest observed deployment workflow completed successfully on 2026-08-27 for commit `d835be934e5f1731ea2ebc128fe61913176d674f`. The repository also has a separate static-site validation workflow that runs validation and tests before deployment.

**State:** deployment workflow verified successful. Live browser verification remains a separate state and must not be inferred solely from a successful workflow.

### Record Workspace

`citizens-record` is a full-stack Node/React/Vite/Express application with database, authentication, storage, and Stripe-related dependencies. Its package scripts include type checking, tests, production build, and database migration operations.

**State:** not suitable for GitHub Pages as the application runtime. It requires application hosting plus its external database/authentication/storage/provider configuration.

### Watchtower

`watchtower` has the same broad full-stack runtime shape and should be treated as an application component, not a GitHub Pages site.

**State:** application source exists; production provider integrations and deployment configuration must be verified before claiming live status.

### ProofFlow

The current repository explicitly identifies itself as a recovery/bootstrap repository rather than the complete ProofFlow application source.

**State:** do not label the repository production-ready until the canonical application source is recovered and tested.

## Accountability model

The shared classification model is:

- **FACT** — supported by identified evidence.
- **AUTHORITY** — supported by an identified authoritative source.
- **CLAIM** — attributed statement not independently established.
- **INFERENCE** — assessment derived from identified material.
- **CONTRADICTION** — material sources conflict.
- **QUESTION** — specific unresolved issue.
- **UNKNOWN** — available material does not establish the answer.

Canonical processing chain:

**Question → Source → Evidence → Comparison → Finding → Unknowns → Verification**

Conflicting evidence must remain visible. Missing evidence must remain unknown. The platform must never manufacture certainty to make a record appear complete.

## Current blockers

1. The interactive Workspace requires verified application hosting and external service configuration before it can be called production/live.
2. ProofFlow requires recovery of its canonical application source before independent production deployment.
3. Watchtower requires deployment/provider verification for live integrations.
4. The exact live URL for the Record Workspace must be established from the authorized application hosting environment before the public portal's `Open the Record` destination is treated as canonical.

## Operating rule

Do not delete or merge repositories merely to make the account look cleaner. Preserve history, establish source-of-truth roles, and consolidate only when the resulting architecture is demonstrably safer and clearer.

**Configured ≠ Deployed ≠ Verified Live.**
