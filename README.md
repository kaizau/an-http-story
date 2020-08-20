# Vercel Starter Template

- [**Vercel**](https://vercel.com/docs) for hosting.
- [**Parcel**](https://parceljs.org/getting_started.html) for static assets.
- [**Express**](https://expressjs.com/) for serverless endpoints.
- [**Jest**](https://jestjs.io/docs/en/getting-started) for testing.
- [**ESLint**](https://eslint.org/docs/user-guide/getting-started) for linting.
- [**Prettier**](https://prettier.io/docs/en/index.html) for formatting.

## Installation

Expects globally-installed [`degit`](https://github.com/Rich-Harris/degit#readme) and [`vercel`](https://vercel.com/download).

1. Copy template with `degit kaizau/template-vercel`
2. Install dependencies with `npm i`
3. Configure Vercel domain, git integration, ENV variables
4. Sync ENV variables with `vercel env pull`
5. Trigger initial deploy with `vercel`

## Usage

```sh
npm start     # local server at localhost:8888
npm test      # watch /tests
```

## Notes

- Parcel [module resolution](https://parceljs.org/module_resolution.html) automatically handles "/" and "~" paths.
- When in doubt, follow [sane defaults](https://github.com/elsewhencode/project-guidelines).
