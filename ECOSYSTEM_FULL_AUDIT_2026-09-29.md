# Ecosystem Full Audit & Consolidation Plan — 2026-09-29

## Executive decision

The ecosystem is being reorganized around Evidence Integrity Engine (EIE) as the provider-neutral evidence-verification infrastructure.

The architectural rule is:

EIE is the integrity core. Open the Record is the private workspace/client. The Citizen's Record is the public portal. Watchtower is a separate security instrument. MCP is an external agent interface, not the core.

No repository is deleted merely because it is redundant until unique source/history is preserved and the destination is verified.

## Current repository inventory

| Repository | Current role | Decision |
|---|---|---|
| evidence-integrity-engine | Deterministic evidence integrity core | KEEP / CANONICAL CORE |
| Open-the-Record | Private workspace shell/module destination | KEEP / REBUILD AROUND EIE |
| The-Citizens-Record | Public static civic portal | KEEP / STABLE |
| citizens-record | Existing full-stack workspace source with agent/MCP seam | MIGRATION SOURCE → Open the Record |
| watchtower | Privacy/security intelligence application | KEEP SEPARATE FOR NOW; INTEGRATE VIA CONTRACTS |
| ProofFlow | Older evidence/provenance application + duplicate engine | SOURCE/MIGRATION; RETIRE AFTER PROVENANCE PRESERVATION |
| docs | Ecosystem documentation/control center | KEEP / CANONICAL DOCS |
| The-Citizen-Main-File | Historical static source | ARCHIVE / PRESERVE |
| fear-the-wolves | Separate Prompt Bridge/mobile product | SEPARATE; DO NOT CONFLATE |
| prompt-bridge | Small Prompt Bridge web/server artifact with duplicated docs | REVIEW FOR MERGE/RETIREMENT |
| mintlify-docs | Small duplicate documentation repository | REVIEW AGAINST docs; likely retire after content diff |
| Signal-keeper | Small Python signal/testing project | SEPARATE until purpose/integration is proven |

The account currently exposes 12 repositories, not the seven/eight reflected in older August/early-September audits. Those older documents are historical records, not current inventory.

## What each layer does

### EIE
Owns evidence objects, provenance, verification records, classifications, contradictions, structural validation, and tamper-evident audit history.

### Open the Record
Owns private user/workspace state, authentication, authorization, persistence, source acquisition orchestration, evidence collection, chronology, exports, UI, and future write workflows.

It consumes EIE; it does not fork EIE's integrity rules.

### The Citizen's Record
Owns public, account-free presentation and source navigation. It must remain independently useful if the private application is unavailable.

### Watchtower
Owns authorized privacy/security observation and exposure intelligence. It can consume EIE contracts for evidence/provenance, but its security-specific runtime remains separate until a real integration boundary is verified.

### MCP
Provides a standardized machine interface to EIE and application capabilities. MCP must not receive database credentials or bypass application authorization. Read-only evidence verification is the first external interface. Mutations require explicit authorization, audit events, and separate policy.

## Combined system

    AI AGENTS / HUMAN USERS
              |
        MCP / Open the Record
              |
       Evidence Contracts
              |
    +---------v----------+
    | Evidence Integrity |
    | Engine (EIE)       |
    +---------+----------+
              |
       Sources / Evidence
              |
    Provenance / Verification
              |
    FACT / AUTHORITY / CLAIM /
    INFERENCE / CONTRADICTION /
    QUESTION / UNKNOWN
              |
    Citizen's Record (public)
              |
    Watchtower (authorized signals)

## Why this structure

1. One integrity implementation. The current EIE already declares itself canonical and has absorbed the ProofFlow engine.
2. No protocol lock-in. MCP is an adapter; other agent protocols can map to the same contracts later.
3. No trust leakage. AI output remains a proposal; verification remains an explicit state with provenance.
4. Clear security boundaries. Public portal, private workspace, deterministic core, and security tooling have distinct responsibilities.
5. Less repository duplication. Multiple copies of ProofFlow/evidence logic are a maintenance and correctness risk.
6. Failure isolation. A broken Watchtower deployment must not make the public portal or EIE unusable.
7. Better external value. Other AI agents can call evidence verification without importing an entire application.

## CI failure snapshot found during this audit

- evidence-integrity-engine: latest CI run on 2026-09-26 failed. The working tree contained obsolete src/ and tests/ material that the README already identified as non-canonical; CI also used npm despite the package declaring pnpm. Those obsolete trees have now been removed and CI has been aligned to pnpm.
- watchtower: repeated Watchtower CI failures were recorded on 2026-09-18 after a repair merge. Security workflows on the same commits were passing. Root-cause reproduction still requires the failed job log; the failure remains an open stabilization item rather than being guessed at.
- Open-the-Record: the consolidation workflow repeatedly failed on 2026-09-03/04/11. That workflow was an obsolete migration mechanism based on cloning and merging multiple repositories. It has now been removed; a new controlled migration will replace it after EIE stabilization.
- citizens-record: current CI/security runs on 2026-09-26 were passing; the current Agent Supply Chain Security workflow was also passing in the latest observed run.
- ProofFlow: application CI has both successful and failed historical runs; it is no longer the canonical EIE implementation and should not remain a competing integrity core.

## Immediate stabilization order

### Phase A — stop architectural churn
- Freeze feature additions across duplicate repositories.
- Treat EIE as the only canonical integrity implementation.
- Do not delete source repositories yet.

### Phase B — make EIE boring and green
- Verify CI after the cleanup commit.
- Keep engine/ as the only implementation.
- Add public package/API contract tests.
- Add the MCP adapter without putting MCP transport concerns into EIE itself.
- Publish a machine-readable evidence contract.

### Phase C — migrate the workspace
- Diff citizens-record against Open-the-Record.
- Move unique application code deliberately.
- Map existing server/agent contracts onto EIE and MCP.
- Preserve authentication/authorization outside EIE.
- Verify install → typecheck → test → build before any source retirement.

### Phase D — integrate supporting systems
- Define Watchtower → EIE evidence contract.
- Identify useful Signal-keeper capabilities before any merge.
- Recover only genuinely unique ProofFlow functionality not already represented in EIE.
- Preserve historical Citizen source material.

### Phase E — retire duplication
Retirement candidates after verification:
- old ProofFlow engine implementation;
- duplicate Prompt Bridge documentation artifacts;
- duplicate Mintlify documentation repository;
- obsolete consolidation scaffolding;
- any repository proven to contain no unique code, data, history, or deployment role.

## Non-negotiable verification gate

A component is not called production, verified, healthy, or operational merely because a workflow exists.

The gate is:

Clean → Installable → Typechecked → Tested → Built → Deployed → Verified Live → Maintainable

For EIE specifically:

source-backed evidence → explicit verification → provenance → deterministic classification → audit history → externally callable contract
