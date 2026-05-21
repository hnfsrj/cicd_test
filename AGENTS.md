# CICD test — agent guide

## Commands

| Action | Command |
|--------|---------|
| Install | `npm install` | 
| Run all tests | `npm test` |
| Watch mode | `npm run test:watch` |
| CI does | `npm ci` → `npm test -- --ci` (GitHub Actions, Node 20, on push/PR) |

## Source layout

- `src/` — app code (CommonJS: `calculator.js`, `calculateTax.js`)
- `tests/*.test.js` — Jest tests

## Notable

- All source files use CommonJS (`module.exports` / `require`). No Jest transform config needed.
- Coverage output is gitignored (`coverage/`).
