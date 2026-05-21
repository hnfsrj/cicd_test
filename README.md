# Sample CI/CD Testing Repo

This is a minimal Node.js project with:

- A calculator example in `src/calculator.js`
- Unit tests in `tests/calculator.test.js`
- Jest as the test runner
- GitHub Actions CI workflow in `.github/workflows/ci.yml`

## Run locally

```bash
npm install
npm test
```

## CI behavior

The workflow runs automatically on every push and pull request, installs dependencies with `npm ci`, and executes Jest tests.