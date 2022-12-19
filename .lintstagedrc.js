// const path = require('path')

// const buildEslintCommand = (filenames) => [
//   `npm run lint --fix --file ${filenames
//     .map((f) => path.relative(process.cwd(), f))
//     .join(' --file ')}`,
//   ` --file ${filenames
//     .map((f) => path.relative(process.cwd(), f))
//     .join(' --file ')}`,
// ]

module.exports = {
  '*.{js,jsx}': [
    'npm run lint',
    // 'npm run test --watchAll=false --findRelatedTests --bail',
  ],
}
