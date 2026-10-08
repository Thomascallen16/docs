# Ecosystem Full Audit — 2026-10-08

## Purpose

Reduce repository sprawl, remove stale/duplicated material, make every retained repository honest about its role, and establish a measurable completion gate.

This audit supersedes stale repository-count statements in older inventory documents while preserving them as historical records.

## Completion gate

A repository is GREEN only when:
1. Its role is explicit and non-duplicative.
2. README/status reflects reality.
3. No unnecessary generated/binary/archive artifacts remain in the active tree.
4. Dependency/install configuration is coherent.
5. Typecheck/lint/tests/build pass where applicable.
6. Security and agent-supply-chain checks pass where applicable.
7. Deployment status is verified or explicitly marked unverified.
8. Unique history/source is preserved before retirement.
9. No "verified/production/operational" label exists without an underlying check.
10. The repository has a defined owner role in the ecosystem.

## Current inventory

| Repository | Role | Disposition | Current audit signal |
|---|---|---|---|
| evidence-integrity-engine | Canonical EIE core | KEEP / CANONICAL | RED — CI failing on hardening test; PR #3 also has review findings |
| Open-the-Record | Private workspace | KEEP / DESTINATION | AMBER — smoke test passes; consolidation history is stale/retired |
| The-Citizens-Record | Public civic portal | KEEP / STABLE | AMBER — Pages + security pass; agent-supply-chain audit fails on AGENTS instruction |
| citizens-record | Migration source / substantial full-stack app | MIGRATE → Open-the-Record | GREEN CI/security on latest observed commit; migration still not complete |
| watchtower | Separate privacy/security application | KEEP SEPARATE | RED — latest Watchtower CI failed typecheck in server/db.ts |
| ProofFlow | Legacy provenance source | RECOVER UNIQUE → RETIRE | AMBER — CI/security pass, but no reason to remain a competing integrity core |
| The-Citizen-Main-File | Historical source archive | ARCHIVE | AMBER — archive/security workflows exist; no production role |
| fear-the-wolves | Separate Prompt Bridge/mobile product | KEEP SEPARATE | RED/STALE CI — latest validation failed during Expo web bundling |
| prompt-bridge | Small web/server artifact | REVIEW / LIKELY RETIRE | GREEN CI observed; relationship to fear-the-wolves must be resolved |
| docs | Canonical documentation/control center | KEEP / CANONICAL | GREEN security/CI observed |
| mintlify-docs | Duplicate small documentation repo | DIFF → RETIRE | No workflows/runs; overlaps docs |
| pocket-watchtower | Android device observatory | KEEP SEPARATE | GREEN Android validation/release observed |
| Signal-keeper | Independent SDR project | KEEP SEPARATE | GREEN tests + LOC audit observed |

## Concrete findings

### EIE

Latest CI failure: engine/hardening.test.ts, test "uses the latest verification record": expected FACT, received UNKNOWN.

Open PR #3 adds the independent offline verifier and adversarial validation. Automated review also identified:
- verifier binary is not included correctly in published package;
- installed eie-verify needs a Node shebang;
- nested malformed bundle input can escape the intended invalid-result path.

Do not merge PR #3 until CI and these findings are resolved.

### Watchtower

Latest Watchtower CI failure is a TypeScript error in server/db.ts at the createExposureForUser insert. This is a real code/type failure, not a transient workflow status.

### The Citizen's Record

Pages and Security Scan pass. Agent Supply Chain Security fails because AGENTS.md contains an executable installation command and references machine-readable AI documentation/install instructions. The audit intentionally treats this as review-required. Either the instruction must be made non-executable or the audit policy must distinguish documentation from executable agent instructions.

### fear-the-wolves

Latest validation failure occurs during Expo web export because Metro cannot obtain a SHA-1 for react-native-css-interop/.cache/web.css. The server build itself completed. This should be treated as a CI/build configuration defect, not a product feature blocker.

### Repository bloat / duplication

The-Citizens-Record contains a 66 KB .diff, 61 KB .patch, and 34 KB source ZIP under deployment/. These are candidates for removal from the active production tree after confirming their unique contents are preserved in Git history or another archive.

citizens-record and watchtower both contain a Wouter patch. This is not automatically bloat; retain it while the dependency requires it.

ProofFlow, prompt-bridge, and mintlify-docs require consolidation decisions based on unique source/content, not repository names alone.

## Safe retirement policy

No repository deletion occurs merely because it is redundant.

Before retirement:
- compare unique source/content;
- preserve anything unique;
- verify destination;
- tag/archive source if appropriate;
- document disposition;
- then archive or delete only with explicit approval.

## Autopilot order

1. Stabilize EIE and finish offline verifier.
2. Stabilize Watchtower.
3. Fix Citizen portal agent-supply-chain false-positive / unsafe instruction.
4. Fix Prompt Bridge validation.
5. Diff and retire duplicate docs/artifacts.
6. Complete citizens-record → Open-the-Record migration.
7. Recover unique ProofFlow functionality and retire its competing engine role.
8. Produce a final ecosystem audit with every retained repo GREEN or explicitly archived.

## Rule

Less code. Fewer repositories. Clear ownership. No fake green. Evidence before status.
