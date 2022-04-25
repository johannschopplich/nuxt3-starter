// @ts-check
// Invoked on the `commit-msg` git hook by simple-git-hooks.
// Modified from https://github.com/vitejs/vite/blob/main/scripts/verifyCommit.ts

import { readFileSync } from 'fs'
import chalk from 'chalk'

// Get `$1` from `commit-msg` script
const msgPath = process.argv[2]
const msg = readFileSync(msgPath, 'utf-8').trim()

const RELEASE_RE = /^v\d/
const COMMIT_RE =
  /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/

if (!RELEASE_RE.test(msg) && !COMMIT_RE.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.bgRed(chalk.white(' ERROR '))} ${chalk.red(
      `invalid commit message format.`
    )}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${chalk.green(`feat: add 'comments' option`)}\n` +
      `    ${chalk.green(`fix: handle events on blur (close #28)`)}\n\n` +
      chalk.red(`  See .github/commit-convention.md for more details.\n`)
  )

  process.exit(1)
}
