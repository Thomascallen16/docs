# Consolidation Recommendations — Phase 1

**Audit date:** 2026-08-28

## Recommended canonical structure

Keep the ecosystem intentionally small at the product surface:

1. **The Citizen's Record** (`The-Citizens-Record`) — canonical public civic portal.
2. **Record Workspace** (`citizens-record`) — canonical interactive application.
3. **docs** — canonical documentation, architecture, operations, and recovery control center.

Supporting code remains separate when it represents a genuinely separate runtime or product:

4. **watchtower** — supporting privacy/exposure application; integrate with the Workspace only when a real integration boundary is verified.
5. **fear-the-wolves / Prompt Bridge** — separate mobile product; do not fold into the two-site public launch surface.
6. **ProofFlow** — recovery candidate until canonical source is found.
7. **The-Citizen-Main-File** — historical archive; no production role.

## Repository-by-repository disposition

### `The-Citizens-Record` — KEEP AND DEPLOY

Canonical public portal. Recent commits reinforce the permanent-portal role and restore the stronger editorial homepage. Preserve its static architecture and source-first boundary. Do not turn it into the full-stack Workspace.

### `citizens-record` — KEEP AND DEPLOY

Canonical full-stack Workspace source. It contains materially different server/database/application capabilities and should remain the application source. The immediate work is deployment verification, not repository duplication.

### `docs` — KEEP AND CONSOLIDATE

Canonical operations/documentation repository. It already identifies itself as the ecosystem documentation source. The Phase 1 inventory reports created in this repository belong here unless a later operations-repository decision supersedes it.

### `watchtower` — KEEP

Keep as a separate application/component because it has its own runtime, security model, provider integrations, and deployment dependencies. Do not duplicate its code into the public portal.

### `fear-the-wolves` — KEEP AS SEPARATE PRODUCT

The repository is a substantive Expo/React Native application rather than a duplicate of the Citizen ecosystem. Keep separate. Reassess its product identity and deployment path after native/device verification.

### `ProofFlow` — QUARANTINE / RECOVERY

Do not delete. Its current repository is too small to represent the claimed application and explicitly says the canonical source is elsewhere. Recover the actual source before deciding whether it becomes a component of the Workspace or an independent product.

### `The-Citizen-Main-File` — ARCHIVE

Preserve as historical source material. It overlaps with the public Citizen portal, but recent commits already removed production deployment behavior and marked it as legacy. No deletion is recommended at this stage.

## What should NOT be consolidated

- Do not merge the static portal and full-stack Workspace into one deployment merely to reduce repository count.
- Do not merge Watchtower or Prompt Bridge into the public portal.
- Do not replace the canonical portal with the historical archive.
- Do not create a new ProofFlow repository until the missing canonical source is located and its ownership is clear.

## Migration policy

If unique code/content is discovered in an archive or recovery repository, copy it through a reviewed migration commit and preserve the original repository/branch until the destination is verified. Only after verification should any retirement proposal be made.

## Deletion / retirement status

**No deletion is recommended or approved by Phase 1.** Any future retirement requires evidence that the repository is a true duplicate or obsolete, plus a recoverable archive/tag/branch and explicit approval.
