# The New HUB — Quartz site

This repository builds the Obsidian vault into a static website with [Quartz v5](https://quartz.jzhao.xyz/) and deploys it to GitHub Pages.

The intended project URL is `https://pratofeitoo.github.io/the-new-hub-site/`.

## Requirements

- Node.js 22 or newer
- npm 10.9.2 or newer
- Git
- A public GitHub repository when using GitHub Free

## Local development

```bash
npm ci
npx quartz plugin install
npx quartz build
npx quartz build --serve
```

Open <http://localhost:8080> after starting the server.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` runs on pushes to the `main` branch and can also be started manually with **Actions → Deploy Quartz site to GitHub Pages → Run workflow**.

To enable it:

1. Push this project to `pratofeitoo/the-new-hub-site`.
2. Open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or manually run the workflow.
5. Open the URL reported by the `github-pages` deployment environment.

The workflow installs dependencies, installs Quartz plugins, builds `public/`, uploads it as a Pages artifact, and deploys it with the official Pages actions. The site URL is configured in `quartz.config.yaml` under `configuration.baseUrl`.

## Updating the site

The vault snapshot is copied under `content/`. After changing the source vault, refresh that snapshot without copying the source repository's `.git` directory:

```bash
rsync -a --delete --exclude='.git' "/absolute/path/to/the-new-hub-dev-2/" content/
npm ci
npx quartz plugin install
npx quartz build
git diff --stat
git add content quartz.config.yaml .github/workflows README.md package.json package-lock.json .gitignore
git commit -m "chore: update published vault"
git push origin main
```

Review the diff before pushing. This repository contains the copied vault snapshot, but Quartz primarily turns Markdown into pages; configuration files, databases, canvases, and arbitrary binary files may remain unrendered or unsupported in the website. Do not add secrets to the vault or repository.

## Source and configuration

- `content/` — copied vault snapshot used as Quartz input
- `quartz.config.yaml` — site title, URL, theme, plugins, and processing rules
- `.github/workflows/deploy.yml` — GitHub Pages build/deploy workflow
- `public/` — generated output; ignored and not committed

For Quartz documentation, see <https://quartz.jzhao.xyz/>.
