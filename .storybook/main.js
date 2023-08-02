const path = require('path')

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-material-ui5',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // specify public directory relative path if they are being accessed in stories
  staticDirs: ['../public'],
  // Fixing ModuleNotFound Error
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...(config.resolve || {}).fallback,
        fs: false,
        stream: false,
        os: false,
        util: require.resolve('util/'),
      },
      modules: [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, '../'),
      ],
    }
    return config
  },
}
