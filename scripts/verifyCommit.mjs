// @ts-check
// Invoked on the `commit-msg` git hook by simple-git-hooks

import { readFileSync } from 'node:fs'
import { colors } from 'consola/utils'

// Get $1 from commit-msg script
const msgPath = process.argv[2]
const msg = readFileSync(msgPath, 'utf-8').trim()

const RELEASE_RE = /^v\d/
const COMMIT_RE =
  /^(revert: )?(feat|fix|docs|style|refactor|perf|test|build|ci|chore)(\(.+\))?!?: .{1,50}/

if (!RELEASE_RE.test(msg) && !COMMIT_RE.test(msg)) {
  console.log()
  console.error(
    `  ${colors.bgRed(colors.white(' ERROR '))} ${colors.red(
      'invalid commit message format.',
    )}\n\n${colors.red(
      '  Proper commit message format is required for automated changelog generation. Examples:\n\n',
    )}    ${colors.green('feat: add `comments` option')}\n` +
      `    ${colors.green(
        'fix: handle events on blur (close #28)',
      )}\n\n${colors.red(
        '  See .github/commit-convention.md for more details.\n',
      )}`,
  )
  process.exit(1)
}
