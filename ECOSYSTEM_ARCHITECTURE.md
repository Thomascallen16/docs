# Accountability Ecosystem Architecture

## North Star

**Don't ask people to trust the system. Give them the sources and the means to verify.**

The ecosystem is accountability infrastructure, not a legal-advice service.

## Two public layers

### 1. Permanent Civic Portal

The permanent portal is static, free, source-oriented, and useful without an account.

**Purpose:** FIND → READ → VERIFY → GO TO THE SOURCE.

It should link visitors to official government and civic resources without becoming a case-management system. It must not require accounts, Stripe, or an application database.

The portal should remain useful even if the interactive platform is unavailable.

### 2. Accountability Platform

The interactive platform is where users may create accounts and build, organize, compare, preserve, and verify records.

It may contain:

- Citizen's Record — institutional/public records
- ProofFlow — evidence and provenance
- Watchtower — authorized digital exposure/privacy signals
- Chronicle — source-linked chronology
- Verification — support/conflict/unknown analysis
- Authority Map — governing sources and rules
- Records Requests — request/response tracking
- Public Accountability — optional publication
- professional handoff and export

## Shared Accountability Core

Every instrument should distinguish:

- **FACT** — supported by identified evidence.
- **AUTHORITY** — supported by an identified authoritative source.
- **CLAIM** — attributed statement not independently established.
- **INFERENCE** — assessment derived from identified material.
- **CONTRADICTION** — material sources conflict.
- **QUESTION** — specific unresolved issue.
- **UNKNOWN** — available material does not establish the answer.

### Canonical chain

**Question → Source → Evidence → Comparison → Finding → Unknowns → Verification**

The system must never manufacture certainty to make an answer look complete.

## Repository roles

| Repository | Canonical role | Status |
| --- | --- | --- |
| `The-Citizens-Record` | Permanent Civic Portal / public static workbench | Active deployment |
| `citizens-record` | Full-stack Accountability Platform foundation | Active application source |
| `ProofFlow` | Evidence/provenance instrument | Source recovery required before production deployment |
| `watchtower` | Privacy/exposure instrument | Active application source; provider integrations remain deployment-dependent |
| `The-Citizen-Main-File` | Historical static source archive | Preserve; not production |
| `docs` | Ecosystem documentation | Architecture/documentation source |
| `fear-the-wolves` | Separate Expo/mobile application | Separate product; do not conflate with accountability core without evidence |

## Repository truth rules

A repository is not considered production, canonical, recovered, or deployable merely because it contains code or a deployment workflow. Those states require verification.

Do not silently merge or delete repositories. Preserve history and document architectural decisions.

## Billing and identity

The interactive platform should use one identity system and one entitlement/billing model wherever practical. Stripe handles payment/billing; application authorization determines what a user can access.

The Permanent Civic Portal remains independent of billing and user accounts.

## Security and privacy

Never commit credentials, API keys, private evidence, or secrets. Live integrations require authorization. Demo/simulated material must remain explicitly separated from live evidence.

## Deployment truth

Use static hosting/CDN for the Permanent Civic Portal where practical. Use application hosting for full-stack products. Record deployment status separately as:

1. Configured
2. Deployed
3. Verified live

Only the third is a verified live deployment.
