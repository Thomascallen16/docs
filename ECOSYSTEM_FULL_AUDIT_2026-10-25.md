# Full Repository Audit — 2026-10-25

## Executive summary

The connected GitHub account contains **14 repositories**. I checked each repository's current default-branch tree, workflow inventory, recent available Actions results, and the most relevant failing build/test logs. I then corrected several verified defects and reran CI through GitHub Actions.

**The codebase is healthier, but the ecosystem is not yet fully end-to-end operational.** Three material blockers remain: the private workspace migration is incomplete, the Evidence Integrity Engine's GitHub Pages site is not enabled, and the Windows PocketBuddy build does not bundle all runtime dependencies.

No repositories were deleted. No credentials, production databases, or user data were changed.

## Changes completed and validated

| Repository | Change | Validation |
|---|---|---|
| `citizens-record` | Updated vulnerable direct and transitive dependencies, refreshed the lockfile with pnpm 10.34.7, enabled scheduled Dependabot updates, and hardened the Windows portable-build workflow with pinned actions, pinned PyInstaller, ZIP-content checks, and executable-hash verification. | Dependency audit, typecheck, tests, production build, portable Windows build, security scan, and agent-supply-chain scan passed. Audit now reports **0 high/critical** and **23 low/moderate** advisories. |
| `watchtower` | Added the missing `supply_chain` risk category to the Drizzle schema and SQL migration. Enforced task-authority limits as a hard stop, accepted verified source citations as provenance locators, and corrected an async test. | Watchtower CI, security scan, and agent-supply-chain scan passed on main. |
| `evidence-integrity-engine` | Fixed a test fixture that expected a VERIFIED record to promote evidence without the required verifier and method fields. The engine's strict validation was retained. | Main CI passed. |
| `prompt-bridge` | Restricted the HTTP server to the public app and `/healthz`; source files, package metadata, documentation, environment templates, and `.git` paths now return 404. Added method restrictions and browser security headers. | Main HTTP smoke test passed, including denied-file and POST checks. |
| `docs` | Restored automatic validation for Mintlify navigation, local pages/assets, JSON configuration, and script syntax. | Documentation CI and security scan passed on main. |
| `fear-the-wolves` | Made the NativeWind filesystem-CSS workaround configurable for web export and enabled CI on pushes and pull requests with pinned Actions. | Fix merged; post-merge Expo validation passed on Oct 25. |

Relevant merged changes:

- [Citizen's Record agent-security false-positive fix](https://github.com/Thomascallen16/The-Citizens-Record/pull/8)
- [citizens-record dependency remediation](https://github.com/Thomascallen16/citizens-record/pull/29)
- [Portable Windows build integrity checks](https://github.com/Thomascallen16/citizens-record/pull/36)
- [watchtower schema and authorization fix](https://github.com/Thomascallen16/watchtower/pull/15)
- [Evidence Integrity Engine test fix](https://github.com/Thomascallen16/evidence-integrity-engine/pull/4)
- [Prompt Bridge server hardening](https://github.com/Thomascallen16/prompt-bridge/pull/2)
- [Documentation CI](https://github.com/Thomascallen16/docs/pull/2)
- [Expo web-export validation fix](https://github.com/Thomascallen16/fear-the-wolves/pull/2)

## Repository-by-repository status

| Repository | Current role | Audit result | Remaining work |
|---|---|---|---|
| `The-Citizens-Record` | Public static civic portal | Static Site CI, Security Scan, and Agent Supply Chain Security all passed on Oct 25 after fixing a false positive caused by the policy document naming install commands. Scheduled validation passed on Oct 21; latest observed Pages deployment passed on Oct 8. | Verify the live site in a browser after recent changes; workflow success alone is not proof of live runtime health. |
| `docs` | Canonical ecosystem documentation | **Green.** Documentation validation and security scans passed on Oct 25. | Verify Mintlify's external publishing integration separately. |
| `ProofFlow` | Legacy provenance/evidence source | Latest available CI and security checks passed on Sep 11. | No recent main-branch run. Preserve unique source until EIE/workspace migration is proven; do not delete based on overlap alone. |
| `The-Citizen-Main-File` | Historical static-site archive | Archive security scan passed on Aug 29. Current tree has no active deployment workflow. | Keep archived; do not treat as a production site. |
| `fear-the-wolves` | Separate Expo/mobile Prompt Bridge product | Old web-export validation failed because Metro could not hash generated NativeWind CSS. A scoped fix is merged and validation is rerunning. | Confirm the post-merge Expo export and tests finish green; native device/store release still requires separate verification. |
| `citizens-record` | Full-stack workspace source and migration source | **Green for build/security gate.** Dependency audit, typecheck, tests, production build, and the hardened Windows portable build passed on Oct 25; high/critical advisories are cleared. | 23 low/moderate advisories remain. Production deployment is not verified. The application has not yet been migrated into `Open-the-Record`. |
| `watchtower` | Separate privacy/security application | **Green.** Main CI, security scan, and agent-supply-chain scan passed on Oct 25. | Apply the new enum migration to any deployed database before writing `supply_chain` category records. Live provider/deployment behavior remains unverified. |
| `Open-the-Record` | Intended private workspace destination | Repository is private and its consolidation smoke test passed on Sep 29. | **Migration is incomplete.** The repository still contains module/documentation scaffolding rather than the full `citizens-record` application; it has no package manifest or application CI. The MVP acceptance test correctly remains blocked. |
| `evidence-integrity-engine` | Canonical deterministic evidence-integrity core | **CI green.** Main CI passed on Oct 25 after the test fix. | **Pages deployment blocked:** GitHub reports no Pages site and the workflow token cannot create one. An owner must enable Pages in repository Settings → Pages and choose GitHub Actions, then rerun Deploy Proof Lab. |
| `prompt-bridge` | Small Save State web/server artifact | **Green.** Main HTTP smoke test passed on Oct 25. Public-route allowlisting prevents the checkout's source/config files from being served. | No separate automated persistence/browser test exists; saved state is browser-local, so the user should export backups. |
| `pocket-watchtower` | Android device-observatory application | Android release build passed on Oct 19; Android validation passed on Oct 19. | A successful build is not device certification. Verify on the target phone and document device/OS coverage. |
| `Signal-keeper` | Separate Python SDR/signal project | Latest available test and LOC audit passed on Sep 12, on an audit branch. | No recent main-branch test run. Keep separate until its intended integration is established. |
| `mintlify-docs` | Small documentation duplicate | No workflows or recent CI runs; overlaps the canonical `docs` repository. | Compare unique pages/assets and preserve anything unique before retirement. Do not delete yet. |
| `Musically` | Python USB/package utility | Sanity checks and USB-package build passed on Oct 17. | Hardware/device execution was not verified by the repository build. |

## Cross-repository blockers

### 1. The private workspace is not yet a complete application

The architecture is clear: EIE owns evidence-integrity rules, `Open-the-Record` is the private workspace, and `The-Citizens-Record` is the public portal. However, the full-stack application remains in `citizens-record`. `Open-the-Record` currently contains module scaffolding and documentation, not the migrated application.

Do not claim the private workspace is production-ready until the application, lockfile, CI, database migrations, authentication/authorization, storage controls, and deployment are migrated and its acceptance checklist is actually executed.

### 2. Evidence Integrity Engine Pages requires one manual setting

The latest Deploy Proof Lab run fails because the repository has no configured Pages site and the Actions token cannot create one. Repository code cannot safely resolve this missing owner-level setting.

In GitHub, open **evidence-integrity-engine → Settings → Pages**, set the build/deployment source to **GitHub Actions**, then rerun [Deploy Proof Lab](https://github.com/Thomascallen16/evidence-integrity-engine/actions/workflows/pages.yml). Until that succeeds, the public Proof Lab deployment is unverified.

### 3. PocketBuddy is buildable but not fully self-contained

The Windows portable-build workflow passed on Oct 17. The artifact does **not** include the Ollama language model or Bento4. The current chat UI expects a local Ollama service and defaults to `qwen2.5:3b`; Bento4 is also not bundled. Therefore, the build is not yet a complete offline, plug-and-play repair toolkit.

The model and any legally distributable binaries need an explicit download/install and integrity-verification path before the portable package can be described as fully self-contained.

### 4. Dependency posture is improved, not vulnerability-free

The `citizens-record` remediation cleared the configured high/critical audit gate. The latest audit still reports **23 low/moderate advisories**. Dependabot is configured to keep npm dependencies and GitHub Actions updates coming in; new update PRs should be reviewed and validated rather than auto-merged blindly.

## Recommended next steps

1. Enable GitHub Pages for `evidence-integrity-engine` and rerun its deployment.
2. Finish the `citizens-record` → `Open-the-Record` migration only with a verified source-to-destination checklist; preserve the source repository until acceptance passes.
3. Decide whether PocketBuddy should be a lightweight launcher that installs dependencies, or a truly self-contained portable bundle. Then build, hash, and test the complete package on a clean Windows machine.
4. Review the remaining 23 low/moderate dependency advisories and Dependabot PRs.
5. Run fresh main-branch checks for `ProofFlow` and `Signal-keeper`; compare `mintlify-docs` against `docs` before any retirement decision.
6. Verify public deployments and the Android app on real target devices. Do not infer live operation from a successful build alone.

**Audit rule:** configured ≠ built ≠ deployed ≠ verified live.
