# Working on this repo

## Deploying
- The live site (aayushipatel.work) is served from the `main` branch.
- The owner wants every change made live: after committing, push to `main`
  as well as to the session's working branch. No need to ask first.
- Source lives in `src/`; the served files (`assets/`, root `*.html`) are built.
  Run `npm run build` after editing `src/` and commit ALL built output
  (`assets/` plus every root `*.html`); shared chunk hashes change, so other
  pages break if their HTML is left out.
