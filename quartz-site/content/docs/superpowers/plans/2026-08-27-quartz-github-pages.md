# Publish an Obsidian Vault with Quartz and GitHub Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the intended public notes from an Obsidian vault as a searchable Quartz website hosted for free on GitHub Pages.

**Architecture:** Keep the Obsidian vault as the authoring source and a separate Quartz repository as the deployable site. Quartz builds the Markdown content into static HTML/CSS/JavaScript; GitHub Actions publishes the generated `public/` directory through GitHub Pages. Private notes and vault configuration remain outside the published content directory.

**Tech Stack:** Obsidian, Quartz v5, Node.js 22+, npm, GitHub repository, GitHub Actions, GitHub Pages.

## Global Constraints

- Do not publish `.obsidian/`, credentials, private notes, or private attachments.
- Use Quartz's Obsidian template and GitHub Pages workflow.
- Use a public GitHub repository when relying on GitHub Free.
- Set Quartz `baseUrl` to the final public URL before deployment.
- Keep the source vault and generated/public output separate.

---

## Task 1: Audit and prepare the vault

**Files:**
- Create: `<quartz-repo>/content/` (published Markdown and assets)
- Create: `<vault>/.gitignore` or `<quartz-repo>/.gitignore`, depending on the chosen source layout

**Steps:**

- [ ] Decide whether the site will publish every note or a curated public subset. Treat “entire vault” as all intended public notes, never the `.obsidian/` directory or secrets.
- [ ] List private folders, private tags, and sensitive attachments that must be excluded.
- [ ] Remove API keys, passwords, tokens, and private personal data from notes intended for publication.
- [ ] Confirm that note filenames and folder names are URL-safe enough for a public site.
- [ ] Back up the vault before connecting it to Quartz.

**Acceptance criteria:**
- A written inclusion/exclusion decision exists.
- No sensitive content is present in the intended published set.
- The vault backup can restore the pre-publishing state.

**Verification:** Manually inspect the planned public folders and run a repository secret scan before the first push.

**Dependencies:** None.

## Task 2: Create and initialize the Quartz repository

**Files:**
- Create: `<quartz-repo>/` from the Quartz GitHub template or clone
- Create: `<quartz-repo>/content/`
- Create/modify: `<quartz-repo>/quartz.config.ts`

**Steps:**

- [ ] Create a new public GitHub repository, for example `my-vault-site`.
- [ ] Install Node.js 22+ and npm 10.9.2+.
- [ ] Initialize Quartz using the Obsidian template and the existing vault as the source:

```bash
npx quartz create --template obsidian --strategy symlink --source "/absolute/path/to/your/vault"
```

- [ ] If the source vault is not suitable for a symlink, copy only the approved public notes into `<quartz-repo>/content/` instead.
- [ ] Install dependencies and configured Quartz plugins:

```bash
cd "/absolute/path/to/quartz-repo"
npm install
npx quartz plugin install --from-config
```

- [ ] Configure `baseUrl` in `quartz.config.ts`:
  - Project site: `username.github.io/repository-name`
  - User site: `username.github.io`
- [ ] Configure the site title, theme, analytics/comments (if any), and excluded paths without adding secrets to Git.

**Acceptance criteria:**
- Quartz initializes successfully.
- `quartz.config.ts` contains the final site identity and URL configuration.
- The content source contains only approved public material.

**Verification:** Run:

```bash
npx quartz build
```

Expected result: the command exits with status 0 and creates `public/`.

**Dependencies:** Task 1.

## Task 3: Preview and correct Obsidian rendering

**Files:**
- Modify: `<quartz-repo>/quartz.config.ts`
- Modify: `<quartz-repo>/quartz.layout.ts`
- Modify: `<quartz-repo>/content/**` only when correcting source content

**Steps:**

- [ ] Start the local Quartz server:

```bash
npx quartz build --serve
```

- [ ] Open `http://localhost:8080` in a browser.
- [ ] Check the home page, representative notes, folder navigation, wikilinks, backlinks, images, PDFs, callouts, code blocks, MathJax, Mermaid, and embedded notes.
- [ ] Test search and graph functionality.
- [ ] Fix broken links or unsupported Obsidian syntax in the source or Quartz configuration.
- [ ] Confirm that private/excluded notes are absent from navigation, search, backlinks, and generated output.

**Acceptance criteria:**
- Representative content renders correctly locally.
- Internal links and assets resolve without 404 errors.
- Excluded content is not discoverable in the generated site.

**Verification:** Use browser-based manual QA at `http://localhost:8080`, then run:

```bash
npx quartz build
```

**Dependencies:** Task 2.

## Task 4: Add the GitHub Pages deployment workflow

**Files:**
- Create: `<quartz-repo>/.github/workflows/deploy.yml`

**Steps:**

- [ ] Create `.github/workflows/deploy.yml` with this workflow, changing `v5` to the branch actually used by the repository if necessary:

```yaml
name: Deploy Quartz site to GitHub Pages

on:
  push:
    branches:
      - v5
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v6
        with:
          node-version: 24
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Install Quartz plugins
        run: npx quartz plugin install
      - name: Build Quartz
        run: npx quartz build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] Commit the workflow and Quartz configuration to the repository.
- [ ] Push the branch configured in the workflow.

**Acceptance criteria:**
- GitHub Actions recognizes the workflow.
- The build job installs dependencies, builds Quartz, and uploads `public/`.
- The deploy job has Pages write and OIDC permissions.

**Verification:** Inspect the workflow run logs; the build and deploy jobs must both succeed.

**Dependencies:** Tasks 2 and 3.

## Task 5: Enable and verify GitHub Pages

**Files:**
- Modify: GitHub repository settings
- Optional create: `<quartz-repo>/CNAME` for a custom domain

**Steps:**

- [ ] Open the repository's **Settings → Pages**.
- [ ] Set **Source** to **GitHub Actions**.
- [ ] If this is a project site, verify that `baseUrl` includes the repository path.
- [ ] Wait for the workflow deployment to complete.
- [ ] Open the Pages URL shown in the deployment environment.
- [ ] Test the home page, at least five internal links, search, graph/backlinks, images, mobile layout, and a nonexistent URL.
- [ ] Check browser console and network requests for errors.
- [ ] Optionally add a custom domain and configure DNS only after the default `github.io` site works.

**Acceptance criteria:**
- The site is publicly reachable at the expected GitHub Pages URL.
- Navigation, assets, search, and internal links work under the repository subpath.
- No private content is visible or indexed by the site UI.

**Verification:** Perform end-to-end browser QA against the live URL and review the final GitHub Actions run.

**Dependencies:** Task 4.

## Task 6: Establish the update and safety workflow

**Files:**
- Modify: `<quartz-repo>/.gitignore`
- Optional create: `<quartz-repo>/README.md`

**Steps:**

- [ ] Document the local preview command and deployment branch.
- [ ] Document the approved content source and exclusion rules.
- [ ] Add `.obsidian/`, local environment files, and other private material to `.gitignore` where applicable.
- [ ] Define a regular update workflow: edit in Obsidian, preview locally, inspect the diff, commit, push, review Actions, then inspect the live site.
- [ ] Before every push, review `git diff --stat` and scan for secrets or accidentally included private files.

**Acceptance criteria:**
- Another person can reproduce the build and deployment from the repository README.
- The routine update process includes a privacy review and a live-site check.
- No generated `public/` directory is committed unless intentionally required by the selected Pages strategy.

**Verification:** Clone the repository into a temporary directory and run the documented install/build commands.

**Dependencies:** Task 5.

## Final checkpoint

- [ ] `npx quartz build` succeeds locally.
- [ ] GitHub Actions build and deployment succeed.
- [ ] The live site is usable on desktop and mobile.
- [ ] Internal links, embeds, search, graph, and assets work.
- [ ] Private content and vault configuration are excluded.
- [ ] The update process is documented.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Private note or secret is published | High | Separate public content, use exclusions, inspect diffs, run a secret scan |
| Project Pages paths break links/assets | High | Set `baseUrl` to `username.github.io/repository-name` and test the live subpath |
| Obsidian plugin syntax is unsupported | Medium | Test representative notes locally and replace or configure unsupported syntax |
| Quartz or action versions change | Medium | Pin/document tested versions and verify builds after upgrades |
| Large vault exceeds build or repository limits | Medium | Exclude unnecessary binaries, optimize images, and measure repository/build size |

## Sources

- [Quartz documentation](https://quartz.jzhao.xyz/)
- [Quartz GitHub Pages hosting guide](https://quartz.jzhao.xyz/hosting#github-pages)
- [Quartz Obsidian create command](https://quartz.jzhao.xyz/getting-started/installation)
- [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
- [GitHub custom workflows for Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
