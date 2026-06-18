# Bijbrengen Ecosystem

This repository now holds the public Bijbrengen web ecosystem shell.

The current live website snapshot from `https://www.bijbrengen.nl/` is restored at the repository root so GitHub Pages can serve it immediately. The previous local repository contents are preserved in `archive/local-repo-20260618-103626/`.

## Workspace Map

```text
Bijbrengen/
├─ index.html                       # Downloaded current live site entrypoint
├─ _astro/                          # Downloaded current live site assets
├─ scripts/                         # Downloaded current live site scripts
├─ CNAME                            # GitHub Pages custom domain
├─ .nojekyll                        # Allows GitHub Pages to serve _astro assets
├─ archive/
│  ├─ local-repo-20260618-103626/   # Previous local repo/site archive
│  └─ www-bijbrengen-nl-*/          # Downloaded live-site capture source
├─ landing-site/                    # Astro SSG marketing/info/docs source
│  ├─ astro.config.mjs
│  ├─ package.json
│  ├─ public/
│  │  ├─ CNAME
│  │  ├─ .nojekyll
│  │  └─ assets/
│  └─ src/
│     ├─ pages/
│     └─ styles/
└─ apps/
   └─ phile-tool/                   # Vite + React + Tailwind SPA
      ├─ vite.config.js
      ├─ package.json
      ├─ index.html
      └─ src/
         ├─ api/
         │  └─ freellClient.js
         ├─ App.jsx
         ├─ main.jsx
         └─ styles.css
```

External repositories:

```text
D:\repos\API       # API contract repository, initialized as a separate Git repo
D:\repos\Backend   # FastAPI backend/Docker blueprint, initialized as a separate Git repo
```

## Commands

```powershell
npm.cmd install
npm.cmd run build
npm.cmd run dev:landing
npm.cmd run build:landing
npm.cmd run dev:phile
npm.cmd run build:phile
```

Set `VITE_FREELL_API_URL=https://api.bijbrengen.nl` for the Phile SPA in production.

## GitHub Pages Deployment

GitHub Pages must use the built Astro output, not the `.astro` source files.

The workflow in `.github/workflows/deploy.yml` runs on every push to `main`, builds the Astro project in `landing-site`, and deploys only:

```text
landing-site/dist
```

In GitHub, set the repository Pages setting to:

```text
Settings > Pages > Build and deployment > Source > GitHub Actions
```

The custom domain is configured through `landing-site/public/CNAME`.
