const chalk = require('chalk');

const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim();

const commitRE = /^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|build|merge)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.log();
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      'invalid commit message format.',
    )}\n\n` +
      chalk.red('  Proper commit message format is required. Examples:\n\n') +
      `    ${chalk.green("feat: add 'comments' option")}\n` +
      `    ${chalk.green(
        'fix(input): handle events on blur (close #28)',
      )}\n\n` +
      chalk.red('  see ./.build/commit_convention.md for more details.\n'),
  );
  process.exit(1);
} else {
  console.log(chalk.green('verify commit message success'));
}
